import { ColliderDesc, init, RigidBodyDesc, World } from '@dimforge/rapier3d-compat';
import Car from 'src/libs/car';
import { Entity, RenderableEntity } from 'src/libs/entity';
import RapierDebugRenderer from 'src/utils/debug-renderer';
import { initBasicScene } from 'src/utils/utils';
import { BoxGeometry, Clock, Mesh, MeshPhongMaterial } from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

const entities: Entity[] = [];
const options = {};

// -----------------------------------------------------------
// -----------------------------------------------------------

init().then(() => {
    // initialize the scene
    const { world, scene, camera, controls, renderer, stats } = initBasicScene();

    // setup geometry and colliders
    buildScene(entities, scene, world);

    // setup the loop
    const clock = new Clock();
    let delta;
    const rapierDebugRenderer = new RapierDebugRenderer(scene, world);

    // setup the controls
    const gui = new GUI();
    gui.add(rapierDebugRenderer, 'enabled').name('Rapier Degug Renderer');

    function gameLoop() {
        delta = clock.getDelta();
        world.timestep = Math.min(delta, 0.1);
        world.step();

        for (const entity of entities) {
            entity.update();
        }

        controls.update();
        rapierDebugRenderer.update();
        renderer.render(scene, camera);
        stats.update();
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
