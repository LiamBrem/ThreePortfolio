import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { createGround } from './3dFeatures/ground.js';

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

//Draws 3d objects
function createTerrain() {
	loader.load('Valley Terrain.glb', function (gltf) {

		gltf.scene.scale.set(3, 3, 3);
		gltf.scene.position.set(10, -12.75, -10);

		scene.add(gltf.scene);

	}, undefined, function (error) {

		console.error(error);

	});


	drawObject("/Buildings/Mill.glb", 10, 0, 10, 7, 0);

	//spawn 
	drawObject("/Buildings/Market Stalls Compact.glb", 26, 0, 257.26, 8, 0);
	drawObject("/Buildings/Cart.glb", 11.5, 0, 272, 5, 1.5708);
	drawObject("/Buildings/Fantasy Inn.glb", 50, 0, 280, 5, 4.71239);
	drawObject("/Buildings/Fantasy House.glb", 10, 0, 280, 5, 1.5708);
	drawObject("/Buildings/Business Building.glb", 10, 0, 295, 10, 1.5708);

	drawObject("/Nature/Tree (1).glb", 35, 7, 300, 6, 0);
	drawObject("/Nature/Rock (1).glb", 27, 0, 310, 12, 3.14159);
	drawObject("/Nature/Rock.glb", 18, 0, 308, 5, 0);
	drawObject("/Nature/Rock Large.glb", 34, 0, 307, 1, 0);
	drawObject("/Nature/Rock Large (1).glb", 44, 0, 294, 2, 0);
	drawObject("/Nature/Rock (1).glb", 41, 0, 303, 12, 3.14159);

	//square 
	drawObject("/Buildings/Stone Tower.glb", 0, 0, 280, 20, 3.14159);
	drawObject("/Buildings/Stone Tower (1).glb", 62, 0, 275, 20, 3.14159);
	drawObject("/Buildings/Blacksmith.glb", 80, 0, 266, 6, 4.71239);
	drawObject("/Buildings/Fantasy Sawmill.glb", -15, 0, 275, 7, 2.5);
	drawObject("/Buildings/Mill.glb", -50, 0, 250, 7, 1.5708);

	drawObject("/Buildings/Bell Tower.glb", 30, 0, 200, 7, 0);
	drawObject("/Buildings/Well.glb", 27, 1, 238, 4, 0);

	drawObject("/Buildings/Small Farm.glb", 80, 0, 240, 12, 4.71239);
	drawObject("/Buildings/Farm.glb", 112, 0, 250, 12, 3.14159);

	drawObject("/Buildings/Fantasy House.glb", 80, 0, 216, 6, 4.71239);
	drawObject("/Nature/Tree (1).glb", 80, 7, 226, 6, 0);
	drawObject("/Nature/Rock Large.glb", 94, -.5, 222, 2, 0);

	drawObject("/Buildings/Fantasy House.glb", 73, 0, 200, 6, 5.6);
	drawObject("/Buildings/Fantasy House.glb", 58, 0, 195, 6, 0);

	drawObject("/Buildings/Market Stand.glb", 49.5, 0, 271, 5, 4.71239);
	drawObject("/Buildings/House (1).glb", 105, 0, 275, 12, 4.2);
	drawObject("/Buildings/House (1).glb", -43, 0, 285, 12, 4.2);

	drawObject("/Buildings/Windmill.glb", -27, 0, 216, 20, .75);

	drawObject("/Buildings/Fantasy Stable.glb", 4, 0, 195, 6, 1.2);
	drawObject("/Buildings/House (2).glb", -50, 0, 225, 12, 0);
	drawObject("/Buildings/House (3).glb", -35, 0, 215, 12, .75);

	drawObject("/Buildings/Market Stalls.glb", 48, 0, 228, 8, 3.14159);
	drawObject("/Buildings/Archery Towers.glb", 140, 0, 230, 12, 0);

	//-133.16, y = 90.08, z = -118.05
	drawObject("/Buildings/Windmill.glb", -133, 70, -110, 20, .75);

	//-204.43, y = 127.18, z = -119.15
	drawObject("/Buildings/Windmill.glb", -204, 127, -120, 20, 5.8);

	drawObject("/Nature/Tree.glb", 40, 0, 203, 1, 0);
	drawObject("/Nature/Wood Log.glb", 45, 0, 203, 1, 0.6);
	drawObject("/Nature/Rock Large (1).glb", 42, -.5, 188, 3, 0);
	drawObject("/Nature/Rock (1).glb", 19, 0, 193, 20, 0);
	drawObject("/Nature/Rock.glb", 74, 0, 279, 5, 0);

	drawObject("/Buildings/Mine.glb", -60, 0, 234, 12, 1.5708);
	drawObject("/Buildings/Houses.glb", -16, 0, 200, 12, 1.5708);
	drawObject("/Buildings/House.glb", -25, 0, 281, 12, 1.5708);

	drawObject("/Nature/Pine Trees.glb", 150, 0, 257, 14, 1.5708);
	drawObject("/Nature/Pine Trees.glb", 135, 0, 280, 14, 1.5708);
	drawObject("/Nature/Pine Trees.glb", 120, 0, 208, 14, 1.5708);

	drawObject("/Nature/Tree (1).glb", -12, 7, 213, 6, 3.14159);
	drawObject("/Buildings/Barracks.glb", -57, 0, 274, 18, 0);
	drawObject("/Nature/Tree (1).glb", -15, 7, 213, 6, 3.14159);
	drawObject("/Nature/Tree (1).glb", -37, 7, 267, 6, 3.14159);
	drawObject("/Nature/Tree.glb", -39, 0, 259, 1, 3.14159);

	drawObject("/Nature/Rock.glb", 67, 0, 192, 5, 0);
	drawObject("/Nature/Rock.glb", 79, 0, 208, 5, 0);
	drawObject("/Nature/Rock Large.glb", -16, -1.5, 180, 3, 0);
	drawObject("/Nature/Rock.glb", 0, 0, 180, 5, 0);


	// path is 5.5 units wide
	drawPath(27, 299);
	drawPath(27, 293.5);
}

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

createTerrain();
animate();
