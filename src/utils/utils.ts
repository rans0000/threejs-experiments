import { World } from '@dimforge/rapier3d-compat';
import { PerspectiveCamera, Scene, SpotLight, VSMShadowMap, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { TBuildScene } from './types';

function createBitmask(indices: number[]): string {
    let bitmask = 0;
    for (let index of indices) {
        bitmask |= 1 << index;
    }
    return bitmask.toString(2).padStart(16, '0');
}
export function generateCollisionId(members: number[], filters: number[]): number {
    const memberId = createBitmask(members);
    const filterId = createBitmask(filters);
    return parseInt(memberId + filterId, 2);
}
export function initBasicScene(_config?: Partial<TBuildScene>) {
    const config: TBuildScene = {
        camera: 'orbit',
        ..._config
    };
    // setup the scene
    const gravity = { x: 0, y: -9.81, z: 0 };
    const world = new World(gravity);

    // setup threejs
    const scene = new Scene();

    // setup the light
    const light = new SpotLight(undefined, Math.PI * 10);
    light.position.set(2.5, 5, 5);
    light.angle = Math.PI / 3;
    light.penumbra = 0.5;
    light.castShadow = true;
    light.shadow.blurSamples = 10;
    light.shadow.radius = 5;
    scene.add(light);

    // setup the camera
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2, 5);

    // setup renderer
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = VSMShadowMap;
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // setup camera controls
    let controls: OrbitControls | PointerLockControls;
    if (config.camera === 'orbit') {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.target.y = 1;
    } else {
        controls = new PointerLockControls(camera, renderer.domElement);
        document.addEventListener(
            'click',
            () => {
                controls instanceof PointerLockControls && controls.lock();
            },
            false
        );
    }

    // setup stats
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    return {
        world,
        scene,
        renderer,
        camera,
        controls,
        stats
    };
}
