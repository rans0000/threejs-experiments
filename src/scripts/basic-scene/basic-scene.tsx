import * as THREE from 'three';
import { GUI } from 'dat.gui';
import Stats from 'three/examples/jsm/libs/stats.module';

// scene & render setup
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

//camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

//config setup
document.body.appendChild(renderer.domElement);
const gui = new GUI();
const stats = new Stats();
document.body.append(stats.dom);

//resize setup
function onWindowResize() {
    const { innerWidth, innerHeight } = window;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

// geometry setup
const boxGeom = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeom, boxMat);
scene.add(cube);
gui.add(cube.rotation, 'x', 0, Math.PI * 2);
gui.add(cube.rotation, 'y', 0, Math.PI * 2);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    stats.update();
    renderer.render(scene, camera);
}
animate();
