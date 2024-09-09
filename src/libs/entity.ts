import RAPIER from '@dimforge/rapier3d-compat';
import { Scene, Object3D, Quaternion } from 'three';

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
        this.geometry.quaternion.copy(new Quaternion(temp.x, temp.y, temp.z));
        return this;
    }
}

export { Entity, PhysicsEntity, RenderableEntity };
