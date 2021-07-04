import { Object3D } from "../lib/three.js-master/build/three.module.js";

class Satellite extends Object3D {
    constructor(gltfLoader, pivot){
        super()
        gltfLoader.load(
            'assets/3d-models/satellite/scene.gltf',
            (gltf) => {
                gltf.scene.position.set(0, 0, 0)
                gltf.scene.scale.set(0.1,0.1,0.1)
                this.add(gltf.scene)
                this.rotation.x = -Math.PI/2   
                this.position.set(0, 2.1, 5.8)
                this.castShadow = true
                this.name = "Satellite"
                pivot.add(this)
            },
            (xhr) => {
            },
            (error) => {
                console.log(error);
            }
        )
    }
}

export {Satellite}