import RAPIER from '@dimforge/rapier3d-compat';
import { Scene, Object3D } from 'three';

let _id = -1;
class Entity {
    id: number;
    scene: Scene;
    entityType: string;
    object: Object3D;

    constructor(scene: Scene, object: Object3D, entityType: string) {
        this.id = ++_id;
        this.scene = scene;
        this.object = object;
        this.entityType = entityType;
    }

    addToScene() {
        this.scene.add(this.object);
    }

    removeFromScene() {
        this.scene.remove(this.object);
    }

    update() {
        throw `update() method not defined for ${this.id}`;
    }
}

class PhysicsEntity extends Entity {
    collider: RAPIER.RigidBody;

    constructor(scene: Scene, object: Object3D, entityType: string, collider: RAPIER.RigidBody) {
        super(scene, object, entityType);
        this.collider = collider;
    }
}

export { Entity, PhysicsEntity };
