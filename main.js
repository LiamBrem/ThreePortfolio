import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new PointerLockControls(camera, document.body);

controls.movementSpeed = 1;
controls.lookSpeed = 0.005;

document.addEventListener('click', function () {
	controls.lock();
  }, false);

const geometry = new THREE.PlaneGeometry( 10, 10 );
const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );

plane.rotation.x = 0;
plane.rotation.y = 0;
plane.rotation.z = 0;

//add several planes to make a ground surface
const ground = new THREE.Group();
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		const plane = new THREE.Mesh( geometry, material );
		plane.position.x = i * 10;
		plane.position.z = j * 10;
		plane.rotation.x = 90;
		ground.add(plane);
	}
}

scene.add(ground);

camera.position.z = 10;


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );


function animate() {
	requestAnimationFrame( animate );



	renderer.render( scene, camera );
}

animate();