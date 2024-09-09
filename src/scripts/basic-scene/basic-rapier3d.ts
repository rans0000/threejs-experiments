import RAPIER from '@dimforge/rapier3d-compat';
import { Entity, PhysicsEntity } from 'src/libs/entity';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const entities: PhysicsEntity[] = [];

// -----------------------------------------------------------
// -----------------------------------------------------------

RAPIER.init().then(() => {
    // initialize the scene
    const { world, scene, camera, controls, renderer } = init();

    // setup geometry and colliders
    buildScene(entities, scene, world);

    // setup the loop
    const clock = new THREE.Clock();
    let delta;

    function gameLoop() {
        delta = clock.getDelta();
        world.timestep = Math.min(delta, 0.1);
        world.step();

        for (const entity of entities) {
            entity.update();
        }

        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(gameLoop);
    }

    window.requestAnimationFrame(gameLoop);
});

// -----------------------------------------------------------
// -----------------------------------------------------------
function init() {
    // setup the scene
    const gravity = { x: 0, y: -9.81, z: 0 };
    const world = new RAPIER.World(gravity);

    // setup threejs
    const scene = new THREE.Scene();

    // setup the light
    const light = new THREE.SpotLight(undefined, Math.PI * 10);
    light.position.set(2.5, 5, 5);
    light.angle = Math.PI / 3;
    light.penumbra = 0.5;
    light.castShadow = true;
    light.shadow.blurSamples = 10;
    light.shadow.radius = 5;
    scene.add(light);

    // setup the camera
    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.set(0, 2, 5);

    // setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // setup camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.y = 1;

    return {
        world,
        scene,
        renderer,
        camera,
        controls
    };
}

// -----------------------------------------------------------
// -----------------------------------------------------------

function buildScene(entities: Entity[], scene: THREE.Scene, world: RAPIER.World) {
    // setup the cube
    const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
    cubeMesh.castShadow = true;
    const cubeBody = world.createRigidBody(
        RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false)
    );
    const cubeShape = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1).setRestitution(0.2);
    world.createCollider(cubeShape, cubeBody);
    const cube = new RenderableEntity(scene, cubeMesh, 'cube', cubeBody);
    cube.addToScene();
    entities.push(cube);

    // setup the floor
    const floorMesh = new THREE.Mesh(
        new THREE.BoxGeometry(100, 1, 100),
        new THREE.MeshPhongMaterial()
    );
    floorMesh.receiveShadow = true;
    floorMesh.position.y = -1;
    const floorBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -1, 0));
    const floorShape = RAPIER.ColliderDesc.cuboid(50, 0.5, 50);
    world.createCollider(floorShape, floorBody);
    const floor = new RenderableEntity(scene, floorMesh, 'floor', floorBody);
    floor.addToScene();
    entities.push(floor);
}

// -----------------------------------------------------------
// -----------------------------------------------------------

class RenderableEntity extends PhysicsEntity {
    collider: RAPIER.RigidBody;

    constructor(
        scene: THREE.Scene,
        geometry: THREE.Object3D,
        entityType: string,
        collider: RAPIER.RigidBody
    ) {
        super(scene, geometry, entityType, collider);
    }

    update(): this {
        let temp = this.collider.translation();
        this.geometry.position.set(temp.x, temp.y, temp.z);
        temp = this.collider.rotation();
        this.geometry.quaternion.copy(new THREE.Quaternion(temp.x, temp.y, temp.z));
        return this;
    }
}
