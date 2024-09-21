import { ColliderDesc, init, RigidBodyDesc, World } from '@dimforge/rapier3d-compat';
import Car from 'src/libs/car';
import { Entity, RenderableEntity } from 'src/libs/entity';
import RapierDebugRenderer from 'src/utils/debug-renderer';
import { TBuildScene } from 'src/utils/types';
import { initBasicScene } from 'src/utils/utils';
import { AxesHelper, BoxGeometry, Clock, Mesh, MeshPhongMaterial, Object3D, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min';

const entities: Entity[] = [];
let options = { showAxis: true };
const config: TBuildScene = {
    camera: 'pointerLock',
    cameraPos: [0, 0, 4],
    fov: 75,
    lightType: 'directional'
};

// -----------------------------------------------------------
// -----------------------------------------------------------

init().then(async () => {
    // initialize the scene
    const keyMap: { [key: string]: boolean } = {};
    const { world, scene, camera, controls, renderer, pivot, stats } = initBasicScene(
        keyMap,
        config
    );

    // setup geometry and colliders
    await buildScene(entities, scene, world, pivot);

    // setup helpers
    const rapierDebugRenderer = new RapierDebugRenderer(scene, world);
    const axisHelper = new AxesHelper(3);
    options.showAxis && scene.add(axisHelper);

    // setup the loop
    const clock = new Clock();
    let delta;

    // setup the controls
    const gui = new GUI();
    gui.add(rapierDebugRenderer, 'enabled').name('Rapier Degug Renderer');
    gui.add(options, 'showAxis')
        .name('Show Axis')
        .onChange((status: boolean) => {
            status ? scene.add(axisHelper) : scene.remove(axisHelper);
        });

    function gameLoop() {
        delta = clock.getDelta();
        world.timestep = Math.min(delta, 0.1);
        world.step();

        for (const entity of entities) {
            entity.update(world.timestep);
        }

        controls instanceof OrbitControls && controls.update();
        rapierDebugRenderer.update();
        renderer.render(scene, camera);
        stats.update();
        window.requestAnimationFrame(gameLoop);
    }

    window.requestAnimationFrame(gameLoop);
});

// -----------------------------------------------------------
// -----------------------------------------------------------

async function buildScene(
    entities: Entity[],
    scene: THREE.Scene,
    world: World,
    pivot: Object3D | null
) {
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

    const car = new Car(scene, world, './models/sedan-sports.glb', pivot);
    await car.init([0, 0, 0], new Vector3(0.3, 0, -0.66), new Vector3(0.3, 0, -0.66));
    entities.push(car);
}

// -----------------------------------------------------------
// -----------------------------------------------------------
