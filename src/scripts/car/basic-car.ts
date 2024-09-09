import RAPIER from '@dimforge/rapier3d-compat';
import { Entity, PhysicsEntity, RenderableEntity } from 'src/libs/entity';
import { initBasicScene } from 'src/utils/utils';
import * as THREE from 'three';

const entities: PhysicsEntity[] = [];

// -----------------------------------------------------------
// -----------------------------------------------------------

RAPIER.init().then(() => {
    // initialize the scene
    const { world, scene, camera, controls, renderer } = initBasicScene();

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

function buildScene(entities: Entity[], scene: THREE.Scene, world: RAPIER.World) {
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
