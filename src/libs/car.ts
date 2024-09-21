import {
    ColliderDesc,
    JointData,
    RigidBody,
    RigidBodyDesc,
    World
} from '@dimforge/rapier3d-compat';
import { generateCollisionId } from 'src/utils/utils';
import { Group, Mesh, Object3D, Quaternion, Scene, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Entity } from './entity';

type TCollisionGroup = {
    floorCID: number;
    carChasisCID: number;
    wheelCID: number;
    axelCID: number;
};

class Car extends Entity {
    world: World;
    rigidBody: RigidBody;
    updatables: [Object3D, RigidBody][];
    wheelRadius: number;
    whelHeight: number;
    static collisionGroup: TCollisionGroup;

    path: string;
    followTarget = new Object3D();
    v = new Vector3();
    pivot: Object3D | null;

    constructor(
        scene: Scene,
        world: World,
        path: string,
        pivot: Object3D | null,
        collisionGroup: TCollisionGroup,
        wheelRadius: number,
        whelHeight: number
    ) {
        super(scene, 'car');
        this.world = world;
        this.path = path;
        Car.collisionGroup = collisionGroup;
        this.wheelRadius = wheelRadius;
        this.whelHeight = whelHeight;

        // setup initial values
        this.followTarget.position.set(0, 1, 0);
        this.pivot = pivot;
        this.updatables = [];
    }

    async init(
        position: [number, number, number],
        frontWheelOffset: Vector3,
        backWheelOffset: Vector3
    ) {
        await new GLTFLoader().loadAsync(this.path).then((gltf) => {
            // set up the mesh
            this.geometry = gltf.scene.getObjectByName('body') as Group;
            this.geometry.position.set(0, 0, 0);
            this.geometry.traverse((mesh) => (mesh.castShadow = true));
            this.geometry.add(this.followTarget);

            const wheelBLMesh = gltf.scene.getObjectByName('wheel-back-left') as Group;
            const wheelBRMesh = gltf.scene.getObjectByName('wheel-back-right') as Group;
            const wheelFLMesh = gltf.scene.getObjectByName('wheel-front-left') as Group;
            const wheelFRMesh = gltf.scene.getObjectByName('wheel-front-right') as Group;
            this.scene.add(this.geometry, wheelBLMesh, wheelBRMesh, wheelFLMesh, wheelFRMesh);

            // create rigid boadies for car, wheel and axle
            this.rigidBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(...position)
                    .setCanSleep(false)
            );
            const wheelBLBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z)
                    .setCanSleep(false)
            );
            const wheelBRBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z)
                    .setCanSleep(false)
            );
            const wheelFLBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z)
                    .setCanSleep(false)
            );
            const wheelFRBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(-frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z)
                    .setCanSleep(false)
            );

            // create a convexhull from all meshes in the this.geometry group
            const v = new Vector3();
            let positions: number[] = [];
            // ensure world matrix is up to date
            this.geometry.updateMatrixWorld(true);
            this.geometry.traverse((mesh) => {
                if (mesh.type !== 'Mesh') return;
                const posAttr = (mesh as Mesh).geometry.getAttribute('position');
                for (let i = 0, l = posAttr.count; i < l; i++) {
                    v.fromBufferAttribute(posAttr, i);
                    v.applyMatrix4((mesh.parent as Object3D).matrixWorld);
                    positions.push(...v);
                }
            });

            // create shapes for carBody, wheelBodies and axelBodies

            const { floorCID, carChasisCID, wheelCID, axelCID } = Car.collisionGroup;
            const chasisId = generateCollisionId([carChasisCID], [floorCID]);
            const wheelId = generateCollisionId([wheelCID], [floorCID]);
            const axelId = generateCollisionId([axelCID], [0]);

            const carShape = (ColliderDesc.convexMesh(new Float32Array(positions)) as ColliderDesc)
                .setMass(1)
                .setRestitution(0.5)
                .setFriction(3)
                .setCollisionGroups(chasisId);

            const wheelBLShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), -Math.PI / 2))
                .setTranslation(0.1, 0, 0)
                .setRestitution(0.5)
                .setFriction(2)
                .setCollisionGroups(wheelId);
            const wheelBRShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(-0.1, 0, 0)
                .setRestitution(0.5)
                .setFriction(2)
                .setCollisionGroups(wheelId);
            const wheelFLShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(0.1, 0, 0)
                .setRestitution(0.5)
                .setFriction(2.5)
                .setCollisionGroups(wheelId);
            const wheelFRShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(-0.1, 0, 0)
                .setRestitution(0.5)
                .setFriction(2.5)
                .setCollisionGroups(wheelId);

            //joins wheels to car body
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(-1, 0, 0)
                ),
                this.rigidBody,
                wheelBLBody,
                true
            );
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(-1, 0, 0)
                ),
                this.rigidBody,
                wheelBRBody,
                true
            );
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(1, 0, 0)
                ),
                this.rigidBody,
                wheelFLBody,
                true
            );
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(-frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(1, 0, 0)
                ),
                this.rigidBody,
                wheelFRBody,
                true
            );

            // create world collider
            this.world.createCollider(carShape, this.rigidBody);
            this.world.createCollider(wheelBLShape, wheelBLBody);
            this.world.createCollider(wheelBRShape, wheelBRBody);
            this.world.createCollider(wheelFLShape, wheelFLBody);
            this.world.createCollider(wheelFRShape, wheelFRBody);

            // add to the updatable list
            this.updatables.push([this.geometry, this.rigidBody]);
            this.updatables.push([wheelBLMesh, wheelBLBody]);
            this.updatables.push([wheelBRMesh, wheelBRBody]);
            this.updatables.push([wheelFLMesh, wheelFLBody]);
            this.updatables.push([wheelFRMesh, wheelFRBody]);
        });
    }

    update(delta: number): this {
        // update camera
        this.followTarget.getWorldPosition(this.v);
        this.pivot && this.pivot.position.lerp(this.v, delta * 5);

        const length = this.updatables.length;
        for (let i = 0, n = length; i < n; i++) {
            this.updatables[i][0].position.copy(this.updatables[i][1].translation() as Vector3);
            this.updatables[i][0].quaternion.copy(this.updatables[i][1].rotation() as Quaternion);
        }

        return this;
    }
}

export default Car;
