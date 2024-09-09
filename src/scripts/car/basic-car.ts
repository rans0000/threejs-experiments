import { ColliderDesc, init, RigidBodyDesc, World } from '@dimforge/rapier3d-compat';
import Car from 'src/libs/car';
import { Entity, RenderableEntity } from 'src/libs/entity';
import { initBasicScene } from 'src/utils/utils';
import { BoxGeometry, Clock, Mesh, MeshPhongMaterial } from 'three';

const entities: Entity[] = [];

// -----------------------------------------------------------
// -----------------------------------------------------------

init().then(() => {
    // initialize the scene
    const { world, scene, camera, controls, renderer } = initBasicScene();

    // setup geometry and colliders
    buildScene(entities, scene, world);

    // setup the loop
    const clock = new Clock();
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

function buildScene(entities: Entity[], scene: THREE.Scene, world: World) {
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

    const car = new Car(scene, world);
    car.addToScene();
    entities.push(car);
}

// -----------------------------------------------------------
// -----------------------------------------------------------
