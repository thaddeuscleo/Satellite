import { BufferAttribute, DodecahedronGeometry, Mesh, MeshMatcapMaterial,Object3D} from "../lib/three.js-master/build/three.module.js";

class Asteroid extends Object3D {
    constructor(scene, loader) {
        super()
        this.asteroidGeo = new DodecahedronGeometry(0.1, 0)
        this.particleMaterial = new MeshMatcapMaterial({
            map: loader.load('assets/textures/planets/sand.jpg'),
            normalMap: loader.load('assets/textures/planets/sand_normal.jpg'),
            bumpMap: loader.load('assets/textures/planets/sand_height.jpg'),
        })
        this.mesh = new Mesh(this.asteroidGeo, this.particleMaterial)
        this.mesh.position.set(10, 10, -7)    
        this.add(this.mesh)
        scene.add(this)
    }

    update = () => {
        this.mesh.position.x -= 0.01        
        this.mesh.position.y -= 0.05        
    }
}

export { Asteroid }