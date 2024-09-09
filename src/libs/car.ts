import { ColliderDesc, RigidBody, RigidBodyDesc, World } from '@dimforge/rapier3d-compat';
import { BoxGeometry, Mesh, MeshNormalMaterial, Quaternion, Scene } from 'three';
import { Entity } from './entity';

class Car extends Entity {
    world: World;
    rigidBody: RigidBody;

    constructor(scene: Scene, world: World) {
        super(scene, 'car');
        this.world = world;
        const { geometry, rigidbody } = this.createCar(world);
        this.geometry = geometry;
        this.rigidBody = rigidbody;
    }

    createCar(world: World) {
        // setup the cube
        const geometry = new Mesh(new BoxGeometry(1, 1, 1), new MeshNormalMaterial());
        geometry.castShadow = true;
        const rigidbody = world.createRigidBody(
            RigidBodyDesc.dynamic().setTranslation(0, 5, 0).setCanSleep(false)
        );
        const cubeShape = ColliderDesc.cuboid(0.5, 0.5, 0.5).setMass(1).setRestitution(0.2);
        world.createCollider(cubeShape, rigidbody);

        return {
            geometry,
            rigidbody
        };
    }

    update(): this {
        let temp = this.rigidBody.translation();
        this.geometry.position.set(temp.x, temp.y, temp.z);
        temp = this.rigidBody.rotation();
        this.geometry.quaternion.copy(new Quaternion(temp.x, temp.y, temp.z));
        console.log(temp);

        return this;
    }
}

export default Car;
