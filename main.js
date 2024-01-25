import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new GLTFLoader();


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new PointerLockControls(camera, document.body);


document.addEventListener('click', function () {
	controls.lock();
  }, false);


var skyGeo = new THREE.SphereGeometry(10000, 25, 25); 
var textureLoader  = new THREE.TextureLoader();
var skyTexture = textureLoader.load( "/kloofendal_43d_clear_puresky_4k.jpg" );

var skyMaterial = new THREE.MeshStandardMaterial({ 
	map: skyTexture,
});

var sky = new THREE.Mesh(skyGeo, skyMaterial);
sky.material.side = THREE.BackSide;
scene.add(sky);


const geometry = new THREE.PlaneGeometry( 10, 30 );
const material = new THREE.MeshStandardMaterial( {color: 0xffff00, side: THREE.DoubleSide} );

//add several planes to make a ground surface
const ground = new THREE.Group();
for (let i = 0; i < 10; i++) {

	const plane = new THREE.Mesh( geometry, material );
	plane.position.x = i * 10;
	//make it rotate so the planes are flat'
	plane.rotation.x = Math.PI / 2;
	


	ground.add(plane);
	
}
scene.add(ground);



loader.load( '/House_001_GLB.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.y = 5;


const light = new THREE.AmbientLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

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
	const speed = 1; // adjust as needed
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