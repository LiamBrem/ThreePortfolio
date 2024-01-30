class Terrain {
    constructor(loader, scene) {
        this.loader = loader;
        this.scene = scene;
    }

    drawObject(modelPath, xPos, yPos, zPos, scale, rotation) {
        this.loader.load(modelPath, (gltf) => {
            gltf.scene.scale.set(scale, scale, scale);
            gltf.scene.position.set(xPos, yPos, zPos);
            gltf.scene.rotation.y = rotation;
            this.scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
    }

    createTerrain() {
        this.loader.load('Valley Terrain.glb', (gltf) => {
            gltf.scene.scale.set(3, 3, 3);
            gltf.scene.position.set(10, -12.75, -10);
            this.scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });
    }

    drawAllObjects() {
        this.createTerrain();
        this.drawObject("/Buildings/Mill.glb", 10, 0, 10, 7, 0);

		//spawn 
    
		this.drawObject("/Buildings/Market Stalls Compact.glb", 26, 0, 257.26, 8, 0);
		this.drawObject("/Buildings/Cart.glb", 11.5, 0, 272, 5, 1.5708);
		this.drawObject("/Buildings/Fantasy Inn.glb", 50, 0, 280, 5, 4.71239);
		this.drawObject("/Buildings/Fantasy House.glb", 10, 0, 280, 5, 1.5708);
		this.drawObject("/Buildings/Business Building.glb", 10, 0, 295, 10, 1.5708);

		this.drawObject("/Nature/Tree (1).glb", 35, 7, 300, 6, 0);
		this.drawObject("/Nature/Rock (1).glb", 27, 0, 310, 12, 3.14159);
		this.drawObject("/Nature/Rock.glb", 18, 0, 308, 5, 0);
		this.drawObject("/Nature/Rock Large.glb", 34, 0, 307, 1, 0);
		this.drawObject("/Nature/Rock Large (1).glb", 44, 0, 294, 2, 0);
		this.drawObject("/Nature/Rock (1).glb", 41, 0, 303, 12, 3.14159);

		//square 
		this.drawObject("/Buildings/Stone Tower.glb", 0, 0, 280, 20, 3.14159);
		this.drawObject("/Buildings/Stone Tower (1).glb", 62, 0, 275, 20, 3.14159);
		this.drawObject("/Buildings/Blacksmith.glb", 80, 0, 266, 6, 4.71239);
		this.drawObject("/Buildings/Fantasy Sawmill.glb", -15, 0, 275, 7, 2.5);
		this.drawObject("/Buildings/Mill.glb", -50, 0, 250, 7, 1.5708);

		this.drawObject("/Buildings/Bell Tower.glb", 30, 0, 200, 7, 0);
		this.drawObject("/Buildings/Well.glb", 27, 1, 238, 4, 0);

		this.drawObject("/Buildings/Small Farm.glb", 80, 0, 240, 12, 4.71239);
		this.drawObject("/Buildings/Farm.glb", 112, 0, 250, 12, 3.14159);

		this.drawObject("/Buildings/Fantasy House.glb", 80, 0, 216, 6, 4.71239);
		this.drawObject("/Nature/Tree (1).glb", 80, 7, 226, 6, 0);
		this.drawObject("/Nature/Rock Large.glb", 94, -.5, 222, 2, 0);

		this.drawObject("/Buildings/Fantasy House.glb", 73, 0, 200, 6, 5.6);
		this.drawObject("/Buildings/Fantasy House.glb", 58, 0, 195, 6, 0);

		this.drawObject("/Buildings/Market Stand.glb", 49.5, 0, 271, 5, 4.71239);
		this.drawObject("/Buildings/House (1).glb", 105, 0, 275, 12, 4.2);
		this.drawObject("/Buildings/House (1).glb", -43, 0, 285, 12, 4.2);

		this.drawObject("/Buildings/Windmill.glb", -27, 0, 216, 20, .75);

		this.drawObject("/Buildings/Fantasy Stable.glb", 4, 0, 195, 6, 1.2);
		this.drawObject("/Buildings/House (2).glb", -50, 0, 225, 12, 0);
		this.drawObject("/Buildings/House (3).glb", -35, 0, 215, 12, .75);

		this.drawObject("/Buildings/Market Stalls.glb", 48, 0, 228, 8, 3.14159);
		this.drawObject("/Buildings/Archery Towers.glb", 140, 0, 230, 15, 0);

		//-133.16, y = 90.08, z = -118.05
		this.drawObject("/Buildings/Windmill.glb", -133, 70, -110, 20, .75);

		//-204.43, y = 127.18, z = -119.15
		this.drawObject("/Buildings/Windmill.glb", -204, 127, -120, 20, 5.8);

		this.drawObject("/Nature/Tree.glb", 40, 0, 203, 1, 0);
		this.drawObject("/Nature/Wood Log.glb", 45, 0, 203, 1, 0.6);
		this.drawObject("/Nature/Rock Large (1).glb", 42, -.5, 188, 3, 0);
		this.drawObject("/Nature/Rock (1).glb", 19, 0, 193, 20, 0);
		this.drawObject("/Nature/Rock.glb", 74, 0, 279, 5, 0);

		this.drawObject("/Buildings/Mine.glb", -60, 0, 234, 12, 1.5708);
		this.drawObject("/Buildings/Houses.glb", -16, 0, 200, 12, 1.5708);
		this.drawObject("/Buildings/House.glb", -25, 0, 281, 12, 1.5708);

		this.drawObject("/Nature/Pine Trees.glb", 150, 0, 257, 14, 1.5708);
		this.drawObject("/Nature/Pine Trees.glb", 135, 0, 280, 14, 1.5708);
		this.drawObject("/Nature/Pine Trees.glb", 120, 0, 208, 14, 1.5708);
		this.drawObject("/Nature/Pine Trees.glb", -70, 0, 308, 14, 1.5708);
		this.drawObject("/Nature/Pine Trees.glb", -87, 0, 261, 14, 1.5708);
		this.drawObject("/Nature/Pine Trees.glb", 52, 0, 324, 14, 1.5708);

		this.drawObject("/Nature/Tree (1).glb", -12, 7, 213, 6, 3.14159);
		this.drawObject("/Buildings/Barracks.glb", -57, 0, 274, 18, 0);
		this.drawObject("/Nature/Tree (1).glb", -15, 7, 213, 6, 3.14159);
		this.drawObject("/Nature/Tree (1).glb", -37, 7, 267, 6, 3.14159);
		this.drawObject("/Nature/Tree.glb", -39, 0, 259, 1, 3.14159);

		this.drawObject("/Nature/Rock.glb", 67, 0, 192, 5, 0);
		this.drawObject("/Nature/Rock.glb", 79, 0, 208, 5, 0);
		this.drawObject("/Nature/Rock Large.glb", -16, -1.5, 180, 3, 0);
		this.drawObject("/Nature/Rock.glb", 0, 0, 180, 5, 0);

		this.drawObject("/Buildings/Barracks (1).glb", 110, 0, 300, 18, 0);
		//-68, 248
		this.drawObject("/Nature/Rock (1).glb", -70, 0, 245, 30, 0);
		this.drawObject("/Nature/Rock (1).glb", -60, 0, 207, 30, 0);
		this.drawObject("/Nature/Rock (1).glb", -70, 0, 220, 38, 0);
		this.drawObject("/Nature/Rock (1).glb", -36, 0, 203, 35, 3.14159);
		this.drawObject("/Nature/Rock (1).glb", -42, 0, 203, 35, 1.14159);

		this.drawObject("/Nature/Mountains.glb", -17, 0, 400, 35, 0);
        this.drawObject("/Nature/Mountains.glb", 133, 0, 400, 35, 0);
		this.drawObject("/Nature/Tree (1).glb", -28, 7, 291, 6, 3.14159);

		this.drawObject("/Special/Drone.glb", 73, 3, 241, 6, 3.14159);
    }
}

export default Terrain;



function drawPath(xPos, zPos) {
	let modelPath = "/Buildings/Stone Walkway.glb";
	let yPos = 0;
	let scale = 3;
	drawObject(modelPath, xPos, yPos, zPos, scale, 0);
}