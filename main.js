import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 10, 3, 64, 8, 5, 2 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const object = new THREE.Mesh( geometry, material );
scene.add( object );

camera.position.z = 30;


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

function animate() {
	requestAnimationFrame( animate );

	object.rotation.x += 0.01;
	object.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();