import RAPIER, { World } from '@dimforge/rapier3d-compat';
import { Object3D, Quaternion, Scene } from 'three';

let _id = -1;
class Entity {
    id: number;
    scene: Scene;
    entityType: string;
    geometry: Object3D;

    constructor(scene: Scene, entityType: string) {
        this.id = ++_id;
        this.scene = scene;
        this.entityType = entityType;
    }

    addToScene(scene?: Scene): this {
        if (!this.geometry) {
            throw "No geometry exists to add to the scene in 'addToScene()'!!";
        }
        if (!this.geometry && !scene) {
            throw "No scene supplied to add to the scene in 'addToScene()'!!";
        }
        this.scene.add(this.geometry || scene);
        return this;
    }

    removeFromScene() {
        if (!this.geometry) {
            throw "No geometry exist to remove to the scene in 'removeFromScene()'!!";
        }
        this.scene.remove(this.geometry);
    }

    update(delta: number) {
        throw `update() method not defined for ${this.id}`;
    }
}

class RenderableEntity extends Entity {
    world: World;
    rigidBody: RAPIER.RigidBody;

    constructor(
        scene: THREE.Scene,
        world: World,
        geometry: THREE.Object3D,
        entityType: string,
        rigidBody: RAPIER.RigidBody
    ) {
        super(scene, entityType);
        this.geometry = geometry;
        this.world = world;
        this.rigidBody = rigidBody;
    }

    update(): this {
        let temp = this.rigidBody.translation();
        this.geometry.position.set(temp.x, temp.y, temp.z);
        temp = this.rigidBody.rotation();
        this.geometry.quaternion.copy(new Quaternion(temp.x, temp.y, temp.z));
        return this;
    }
}

export { Entity, RenderableEntity };
