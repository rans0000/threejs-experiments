import { World } from '@dimforge/rapier3d-compat';
import {
    DirectionalLight,
    Object3D,
    PerspectiveCamera,
    Scene,
    SpotLight,
    VSMShadowMap,
    WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { TBuildScene, TKeyMap } from './types';

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
export function initBasicScene(keyMap: TKeyMap = {}, _config?: Partial<TBuildScene>) {
    const config: TBuildScene = {
        camera: 'orbit',
        cameraPos: [0, 2, 5],
        fov: 50,
        lightType: 'spot',
        ..._config
    };
    let pivot: Object3D | null = null;
    // setup the scene
    const gravity = { x: 0, y: -9.81, z: 0 };
    const world = new World(gravity);

    // setup threejs
    const scene = new Scene();

    // setup the light
    let light: SpotLight | DirectionalLight;
    if (config.lightType === 'spot') {
        light = new SpotLight(undefined, Math.PI * 10);
        light.angle = Math.PI / 3;
        light.penumbra = 0.5;
    } else {
        light = new DirectionalLight(0xffffff, 0.5);
        light.shadow.camera.near = 0.5;
        light.shadow.camera.far = 1500;
    }
    light.shadow.blurSamples = 10;
    light.shadow.radius = 5;
    light.position.set(2.5, 5, 5);
    light.castShadow = true;
    scene.add(light);

    // setup the camera
    const camera = new PerspectiveCamera(
        config.fov,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.set(...config.cameraPos);

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
        // followcam
        pivot = new Object3D();
        const yaw = new Object3D();
        const pitch = new Object3D();
        scene.add(pivot);
        pivot.add(yaw);
        yaw.add(pitch);
        pitch.add(camera);
        yaw.rotateY(0.6);
        function onDocumentMouseMove(e: MouseEvent) {
            yaw.rotation.y -= e.movementX * 0.002;
            const v = pitch.rotation.x - e.movementY * 0.002;
            // limit range
            if (v > -1 && v < 0.1) {
                pitch.rotation.x = v;
            }
            pivot && camera.lookAt(pivot.position);
        }

        function onDocumentMouseWheel(e: WheelEvent) {
            e.preventDefault();
            const v = camera.position.z + e.deltaY * 0.005;

            // limit range
            if (v >= 1 && v <= 10) {
                camera.position.z = v;
            }
        }

        const onDocumentKey = (e: KeyboardEvent) => {
            keyMap[e.code] = e.type === 'keydown';
        };

        document.addEventListener('click', () => {
            renderer.domElement.requestPointerLock();
        });

        document.addEventListener('pointerlockchange', () => {
            if (document.pointerLockElement === renderer.domElement) {
                document.addEventListener('keydown', onDocumentKey);
                document.addEventListener('keyup', onDocumentKey);

                renderer.domElement.addEventListener('mousemove', onDocumentMouseMove);
                renderer.domElement.addEventListener('wheel', onDocumentMouseWheel);
            } else {
                document.removeEventListener('keydown', onDocumentKey);
                document.removeEventListener('keyup', onDocumentKey);

                renderer.domElement.removeEventListener('mousemove', onDocumentMouseMove);
                renderer.domElement.removeEventListener('wheel', onDocumentMouseWheel);
            }
        });
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
        stats,
        pivot
    };
}
