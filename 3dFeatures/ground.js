import * as THREE from 'three';


export function createGround(){
    const geometry = new THREE.PlaneGeometry( 10, 10 );
    

    //add several planes to make a ground surface
    const ground = new THREE.Group();
    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {
            let material;
            // set each pane to either light green or dark green
            if (Math.random() > 0.5) {
                material = new THREE.MeshStandardMaterial( {color: 0x52FF33, side: THREE.DoubleSide} );
            } else {
                material = new THREE.MeshStandardMaterial( {color: 0x059100, side: THREE.DoubleSide} );
            }

            const plane = new THREE.Mesh( geometry, material );
            plane.position.x = (i - 5) * 10;
            plane.position.z = (j - 5) * 10;
            
            //make it rotate so the planes are flat'
            plane.rotation.x = Math.PI / 2;
            
            ground.add(plane);
        }
    }
    return ground;
}