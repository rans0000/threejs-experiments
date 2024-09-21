import {
    ColliderDesc,
    ImpulseJoint,
    JointData,
    MotorModel,
    PrismaticImpulseJoint,
    RigidBody,
    RigidBodyDesc,
    World
} from '@dimforge/rapier3d-compat';
import { TKeyMap } from 'src/utils/types';
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
    static keyMap: TKeyMap;

    wheelBLMotor: ImpulseJoint;
    wheelBRMotor: ImpulseJoint;
    wheelFLAxel: ImpulseJoint;
    wheelFRAxel: ImpulseJoint;
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
        whelHeight: number,
        keyMap: TKeyMap
    ) {
        super(scene, 'car');
        this.world = world;
        this.path = path;
        this.wheelRadius = wheelRadius;
        this.whelHeight = whelHeight;
        Car.collisionGroup = collisionGroup;
        Car.keyMap = keyMap;

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

            const axelFLBody = this.world.createRigidBody(
                RigidBodyDesc.dynamic()
                    .setTranslation(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z)
                    .setCanSleep(false)
            );
            const axelFRBody = this.world.createRigidBody(
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
            const chasisRestitution = 0.1;
            const wheelRestitution = 0.2;
            const chasisFriction = 3;
            const wheelFriction = 2;

            const carShape = (ColliderDesc.convexMesh(new Float32Array(positions)) as ColliderDesc)
                .setMass(20)
                .setRestitution(chasisRestitution)
                .setFriction(chasisFriction)
                .setCollisionGroups(chasisId);

            const wheelBLShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), -Math.PI / 2))
                .setTranslation(0.1, 0, 0)
                .setRestitution(wheelRestitution)
                .setFriction(wheelFriction)
                .setCollisionGroups(wheelId);
            const wheelBRShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(-0.1, 0, 0)
                .setRestitution(wheelRestitution)
                .setFriction(wheelFriction)
                .setCollisionGroups(wheelId);
            const wheelFLShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(0.1, 0, 0)
                .setRestitution(wheelRestitution)
                .setFriction(wheelFriction + 0.5)
                .setCollisionGroups(wheelId);
            const wheelFRShape = ColliderDesc.cylinder(this.whelHeight, this.wheelRadius)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setTranslation(-0.1, 0, 0)
                .setRestitution(wheelRestitution)
                .setFriction(wheelFriction + 0.5)
                .setCollisionGroups(wheelId);
            const axelFLShape = ColliderDesc.cuboid(0.1, 0.1, 0.1)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setMass(0.1)
                .setCollisionGroups(axelId);
            const axelFRShape = ColliderDesc.cuboid(0.1, 0.1, 0.1)
                .setRotation(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2))
                .setMass(0.1)
                .setCollisionGroups(axelId);

            //joins wheels to car body
            // this.world.createImpulseJoint(
            //     JointData.revolute(
            //         new Vector3(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
            //         new Vector3(0, 0, 0),
            //         new Vector3(-1, 0, 0)
            //     ),
            //     this.rigidBody,
            //     wheelBLBody,
            //     true
            // );
            // this.world.createImpulseJoint(
            //     JointData.revolute(
            //         new Vector3(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
            //         new Vector3(0, 0, 0),
            //         new Vector3(-1, 0, 0)
            //     ),
            //     this.rigidBody,
            //     wheelBRBody,
            //     true
            // );

            // attach back wheel to cars. These will be configurable motors.
            this.wheelBLMotor = this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(-1, 0, 0)
                ),
                this.rigidBody,
                wheelBLBody,
                true
            );

            this.wheelBRMotor = this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(-backWheelOffset.x, backWheelOffset.y, backWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(-1, 0, 0)
                ),
                this.rigidBody,
                wheelBRBody,
                true
            );

            // attach steering axels to car. These will be configurable motors.
            this.wheelFLAxel = this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(0, 1, 0)
                ),
                this.rigidBody,
                axelFLBody,
                true
            );
            (this.wheelFLAxel as PrismaticImpulseJoint).configureMotorModel(MotorModel.ForceBased);
            this.wheelFRAxel = this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(-frontWheelOffset.x, frontWheelOffset.y, -frontWheelOffset.z),
                    new Vector3(0, 0, 0),
                    new Vector3(0, 1, 0)
                ),
                this.rigidBody,
                axelFRBody,
                true
            );
            (this.wheelFRAxel as PrismaticImpulseJoint).configureMotorModel(MotorModel.ForceBased);

            // attach front wheel to steering axels
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(0, 0, 0),
                    new Vector3(0, 0, 0),
                    new Vector3(1, 0, 0)
                ),
                axelFLBody,
                wheelFLBody,
                true
            );
            this.world.createImpulseJoint(
                JointData.revolute(
                    new Vector3(0, 0, 0),
                    new Vector3(0, 0, 0),
                    new Vector3(1, 0, 0)
                ),
                axelFRBody,
                wheelFRBody,
                true
            );

            // create world collider
            this.world.createCollider(carShape, this.rigidBody);
            this.world.createCollider(wheelBLShape, wheelBLBody);
            this.world.createCollider(wheelBRShape, wheelBRBody);
            this.world.createCollider(wheelFLShape, wheelFLBody);
            this.world.createCollider(wheelFRShape, wheelFRBody);
            this.world.createCollider(axelFLShape, axelFLBody);
            this.world.createCollider(axelFRShape, axelFRBody);

            // add to the updatable list
            this.updatables.push([this.geometry, this.rigidBody]);
            this.updatables.push([wheelBLMesh, wheelBLBody]);
            this.updatables.push([wheelBRMesh, wheelBRBody]);
            this.updatables.push([wheelFLMesh, wheelFLBody]);
            this.updatables.push([wheelFRMesh, wheelFRBody]);
            this.updatables.push([new Object3D(), axelFRBody]);
            this.updatables.push([new Object3D(), axelFLBody]);
        });
    }

    update(delta: number): this {
        const length = this.updatables.length;
        for (let i = 0, n = length; i < n; i++) {
            this.updatables[i][0].position.copy(this.updatables[i][1].translation() as Vector3);
            this.updatables[i][0].quaternion.copy(this.updatables[i][1].rotation() as Quaternion);
        }

        // update camera
        this.followTarget.getWorldPosition(this.v);
        this.pivot && this.pivot.position.lerp(this.v, delta * 5);

        let targetVelocity = 0;
        if (Car.keyMap['KeyW']) {
            targetVelocity = -500;
        }
        if (Car.keyMap['KeyS']) {
            targetVelocity = 200;
        }
        (this.wheelBLMotor as PrismaticImpulseJoint).configureMotorVelocity(targetVelocity, 2.0);
        (this.wheelBRMotor as PrismaticImpulseJoint).configureMotorVelocity(targetVelocity, 2.0);

        let targetSteer = 0;
        if (Car.keyMap['KeyA']) {
            targetSteer += 0.6;
        }
        if (Car.keyMap['KeyD']) {
            targetSteer -= 0.6;
        }

        (this.wheelFLAxel as PrismaticImpulseJoint).configureMotorPosition(targetSteer, 100, 10);
        (this.wheelFRAxel as PrismaticImpulseJoint).configureMotorPosition(targetSteer, 100, 10);

        return this;
    }
}

export default Car;
