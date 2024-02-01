import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createGround } from './3dFeatures/ground.js';
import Terrain from './terrain.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new PointerLockControls(camera, document.body);


//add skybox using the image in public folder
const skybox = new THREE.Mesh(
	new THREE.SphereGeometry(750, 32, 32),
	new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('/skybox.jpg'),
		side: THREE.BackSide,
	})
);

scene.add(skybox);


const ground = createGround();
scene.add(ground);


function drawObject(modelPath, xPos, yPos, zPos, scale, rotation) {
	loader.load(modelPath, function (gltf) {

		gltf.scene.scale.set(scale, scale, scale);
		gltf.scene.position.set(xPos, yPos, zPos);

		// rotate rotation degrees around the y axis
		gltf.scene.rotation.y = rotation;

		scene.add(gltf.scene);

	}, undefined, function (error) {

		console.error(error);

	});
}

function drawPath(xPos, zPos) {
	let modelPath = "/Buildings/Stone Walkway.glb";
	let yPos = 0;
	let scale = 3;
	drawObject(modelPath, xPos, yPos, zPos, scale, 0);
}

const terrain = new Terrain(loader, scene);
terrain.drawAllObjects();

//true starting pos
/*
camera.position.y = 2;
camera.position.x =27;
camera.position.z = 299;
*/

camera.position.y = 2;
camera.position.x = 44;
camera.position.z = 244;

//add light
const light = new THREE.DirectionalLight(0xffffff, 7);
light.position.z = 50;
light.position.y = 100;


scene.add(light);

//ambient light makes shadows less dark
scene.add(new THREE.AmbientLight(0xffffff, 0.6));


//locks the pointer when user clicks
document.addEventListener('click', function () {
	controls.lock();
}, false);



//handles key inputs
let keys = {
	up: false, // w
	down: false, // s
	left: false, // a
	right: false, // d
};


window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'w':
			keys.up = true;
			break;
		case 's':
			keys.down = true;
			break;
		case 'a':
			keys.left = true;
			break;
		case 'd':
			keys.right = true;
			break;
	}
});

window.addEventListener('keyup', (e) => {
	switch (e.key) {
		case 'w':
			keys.up = false;
			break;
		case 's':
			keys.down = false;
			break;
		case 'a':
			keys.left = false;
			break;
		case 'd':
			keys.right = false;
			break;
	}
});



//sets up the camera coordinates
const cameraCoordinatesDiv = document.getElementById('camera-coordinates');

const coordControls = new OrbitControls(camera, renderer.domElement);
coordControls.addEventListener('change', function () {
	cameraCoordinatesDiv.textContent = `Camera Position: x = ${camera.position.x.toFixed(2)}, y = ${camera.position.y.toFixed(2)}, z = ${camera.position.z.toFixed(2)}`;
});



function animate() {
	const speed = 0.5; // adjust as needed
	const direction = new THREE.Vector3();

	camera.getWorldDirection(direction);
	direction.y = 0; // ignore vertical direction
	direction.normalize(); // normalize to ensure consistent speed

	if (keys.up) {
		camera.position.add(direction.multiplyScalar(speed));
	}
	if (keys.down) {
		camera.position.sub(direction.multiplyScalar(speed));
	}

	direction.cross(camera.up); // get right direction

	if (keys.left) {
		camera.position.sub(direction.multiplyScalar(speed));
	}
	if (keys.right) {
		camera.position.add(direction.multiplyScalar(speed));
	}

	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	//updates the camera coordinates
	cameraCoordinatesDiv.textContent = `Camera Position: x = ${camera.position.x.toFixed(2)}, y = ${camera.position.y.toFixed(2)}, z = ${camera.position.z.toFixed(2)}`;
}

animate();
