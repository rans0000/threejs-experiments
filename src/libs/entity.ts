import RAPIER from '@dimforge/rapier3d-compat';
import { Scene, Object3D } from 'three';

let _id = -1;
class Entity {
    id: number;
    scene: Scene;
    entityType: string;
    geometry: Object3D;

    constructor(scene: Scene, geometry: Object3D, entityType: string) {
        this.id = ++_id;
        this.scene = scene;
        this.geometry = geometry;
        this.entityType = entityType;
    }

    addToScene() {
        this.scene.add(this.geometry);
    }

    removeFromScene() {
        this.scene.remove(this.geometry);
    }

    update() {
        throw `update() method not defined for ${this.id}`;
    }
}

class PhysicsEntity extends Entity {
    collider: RAPIER.RigidBody;

    constructor(scene: Scene, geometry: Object3D, entityType: string, collider: RAPIER.RigidBody) {
        super(scene, geometry, entityType);
        this.collider = collider;
    }
}

export { Entity, PhysicsEntity };
