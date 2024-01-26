import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { createGround } from './3dFeatures/ground.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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


loader.load( '/Buildings/Stone Tower.glb', function ( gltf ) {

	gltf.scene.scale.set(3, 3, 3);

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.y = 2;


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );


document.addEventListener('click', function () {
	controls.lock();
  }, false);



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
  
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();
