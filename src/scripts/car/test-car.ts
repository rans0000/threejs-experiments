import {
    ColliderDesc,
    ImpulseJoint,
    init,
    JointData,
    PrismaticImpulseJoint,
    RigidBodyDesc,
    RigidBodyType,
    World
} from '@dimforge/rapier3d-compat';
import { Entity, RenderableEntity } from 'src/libs/entity';
import RapierDebugRenderer from 'src/utils/debug-renderer';
import { TBuildScene, TKeyMap } from 'src/utils/types';
import { generateCollisionId, initBasicScene } from 'src/utils/utils';
import {
    AxesHelper,
    BoxGeometry,
    Clock,
    Mesh,
    MeshPhongMaterial,
    Object3D,
    Quaternion,
    Scene,
    Vector3
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

const entities: Entity[] = [];
let options = { showAxis: true };
const config: TBuildScene = {
    camera: 'pointerLock',
    cameraPos: [0, 1, 4],
    fov: 75,
    lightType: 'directional'
};
const collisionGroups = {
    floorCID: 0,
    carChasisCID: 1,
    wheelCID: 2,
    axelCID: 3
};
const keyMap: TKeyMap = {};

// -----------------------------------------------------------
// -----------------------------------------------------------

init().then(async () => {
    // initialize the scene
    const { world, scene, camera, controls, renderer, pivot, stats } = initBasicScene(
        keyMap,
        config
    );

    // setup geometry and colliders
    await buildScene(entities, scene, world, pivot);

    // setup helpers
    const rapierDebugRenderer = new RapierDebugRenderer(scene, world);
    const axisHelper = new AxesHelper(3);
    options.showAxis && scene.add(axisHelper);

    // setup the loop
    const clock = new Clock();
    let delta;

    // setup the controls
    const gui = new GUI();
    gui.add(rapierDebugRenderer, 'enabled').name('Rapier Degug Renderer');
    gui.add(options, 'showAxis')
        .name('Show Axis')
        .onChange((status: boolean) => {
            status ? scene.add(axisHelper) : scene.remove(axisHelper);
        });

    function gameLoop() {
        delta = clock.getDelta();
        world.timestep = Math.min(delta, 0.1);
        world.step();

        for (const entity of entities) {
            entity.update(world.timestep);
        }

        controls instanceof OrbitControls && controls.update();
        rapierDebugRenderer.update();
        renderer.render(scene, camera);
        stats.update();
        window.requestAnimationFrame(gameLoop);
    }

    window.requestAnimationFrame(gameLoop);
});

// -----------------------------------------------------------
// -----------------------------------------------------------

async function buildScene(
    entities: Entity[],
    scene: THREE.Scene,
    world: World,
    pivot: Object3D | null
) {
    // setup the floor
    const floorMesh = new Mesh(new BoxGeometry(100, 1, 100), new MeshPhongMaterial());
    floorMesh.receiveShadow = true;
    floorMesh.position.y = -1;
    const floorBody = world.createRigidBody(RigidBodyDesc.fixed().setTranslation(0, -1, 0));
    const floorShape = ColliderDesc.cuboid(50, 0.5, 50);
    world.createCollider(floorShape, floorBody);
    const floor = new RenderableEntity(scene, world, floorMesh, 'floor', floorBody);
    floor.addToScene();
    entities.push(floor);

    const car = new TempCar(
        scene,
        world
        // pivot,
        // 0.3,
        // 0.175,
        // keyMap
    );
    // (0.9, 0.6, 2)
    await car.init([0, 1, 0], new Vector3(0.5, -0.5, 1.5), new Vector3(0, 0, 0));

    entities.push(car);
}

// -----------------------------------------------------------
// -----------------------------------------------------------
class TempCar extends Entity {
    world: World;
    wheelBLMotor: ImpulseJoint;
    wheelBRMotor: ImpulseJoint;

    constructor(scene: Scene, world: World) {
        super(scene, 'tempCar');

        this.world = world;
    }

    async init(position: [number, number, number], frontOffset: Vector3, backOffset: Vector3) {
        const chasisId = generateCollisionId(
            [collisionGroups.carChasisCID],
            [collisionGroups.floorCID]
        );
        const wheelId = generateCollisionId([collisionGroups.wheelCID], [collisionGroups.floorCID]);
        const chasisMass = 1500;
        const wheelMass = 7;
        const chasisFriction = 0.6;
        const wheelFriction = 0.6;

        // setup chasis
        const chasisBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic)
            .setTranslation(...position)
            .setCanSleep(true);
        const chasisBody = this.world.createRigidBody(chasisBodyDesc);
        const chasisShape = ColliderDesc.cuboid(0.9, 0.6, 2)
            .setTranslation(0, 0, 0)
            .setMass(chasisMass)
            .setRestitution(0.1)
            .setFriction(chasisFriction)
            .setCollisionGroups(chasisId);
        this.world.createCollider(chasisShape, chasisBody);

        // -----------------------------------------------------------------
        // -----------------------------------------------------------------

        // setup FR wheel
        const wheelFRBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setCanSleep(true);
        const wheelFRBody = this.world.createRigidBody(wheelFRBodyDesc);
        const wheelFRShape = ColliderDesc.cylinder(0.2, 0.3)
            .setTranslation(0, 0, 0)
            .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
            .setMass(wheelMass)
            .setFriction(wheelFriction)
            .setRestitution(0.1)
            .setCollisionGroups(wheelId);
        this.world.createCollider(wheelFRShape, wheelFRBody);
        const wheelFRMotor = this.world.createImpulseJoint(
            JointData.revolute(
                new Vector3(-frontOffset.x, frontOffset.y, frontOffset.z),
                new Vector3(0, 0, 0),
                new Vector3(-1, 0, 0)
            ),
            chasisBody,
            wheelFRBody,
            true
        );

        // setup FL wheel
        const wheelFLBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setCanSleep(true);
        const wheelFLBody = this.world.createRigidBody(wheelFLBodyDesc);
        const wheelFLShape = ColliderDesc.cylinder(0.2, 0.3)
            .setTranslation(0, 0, 0)
            .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
            .setMass(wheelMass)
            .setFriction(wheelFriction)
            .setRestitution(0.1)
            .setCollisionGroups(wheelId);
        this.world.createCollider(wheelFLShape, wheelFLBody);
        const wheelFLMotor = this.world.createImpulseJoint(
            JointData.revolute(
                new Vector3(frontOffset.x, frontOffset.y, frontOffset.z),
                new Vector3(0, 0, 0),
                new Vector3(-1, 0, 0)
            ),
            chasisBody,
            wheelFLBody,
            true
        );

        // setup BR wheel
        const wheelBRBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setCanSleep(true);
        const wheelBRBody = this.world.createRigidBody(wheelBRBodyDesc);
        const wheelBRShape = ColliderDesc.cylinder(0.2, 0.3)
            .setTranslation(0, 0, 0)
            .setFriction(wheelFriction)
            .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
            .setMass(wheelMass)
            .setCollisionGroups(wheelId);
        this.world.createCollider(wheelBRShape, wheelBRBody);
        this.wheelBRMotor = this.world.createImpulseJoint(
            JointData.revolute(
                new Vector3(-frontOffset.x, frontOffset.y, -frontOffset.z),
                new Vector3(0, 0, 0),
                new Vector3(-1, 0, 0)
            ),
            chasisBody,
            wheelBRBody,
            true
        );

        // setup BL wheel
        const wheelBLBodyDesc = new RigidBodyDesc(RigidBodyType.Dynamic).setCanSleep(true);
        const wheelBLBody = this.world.createRigidBody(wheelBLBodyDesc);
        const wheelBLShape = ColliderDesc.cylinder(0.2, 0.3)
            .setTranslation(0, 0, 0)
            .setFriction(wheelFriction)
            .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
            .setMass(wheelMass)
            .setCollisionGroups(wheelId);
        this.world.createCollider(wheelBLShape, wheelBLBody);
        this.wheelBLMotor = this.world.createImpulseJoint(
            JointData.revolute(
                new Vector3(frontOffset.x, frontOffset.y, -frontOffset.z),
                new Vector3(0, 0, 0),
                new Vector3(-1, 0, 0)
            ),
            chasisBody,
            wheelBLBody,
            true
        );
    }

    update(delta: number): void {
        let targetVelocity = 200;
        (this.wheelBLMotor as PrismaticImpulseJoint).configureMotorVelocity(targetVelocity, 2.0);
        (this.wheelBRMotor as PrismaticImpulseJoint).configureMotorVelocity(targetVelocity, 2.0);
    }
}
