import { World } from '@dimforge/rapier3d-compat';
import { PerspectiveCamera, Scene, SpotLight, VSMShadowMap, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

export function initBasicScene() {
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
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.y = 1;

    return {
        world,
        scene,
        renderer,
        camera,
        controls
    };
}
