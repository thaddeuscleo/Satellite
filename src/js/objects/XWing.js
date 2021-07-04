import { Object3D } from "../lib/three.js-master/build/three.module.js";

class XWing extends Object3D {
    constructor(gltfLoader, pivot){
        super()
        gltfLoader.load(
            'assets/3d-models/s-wing/scene.gltf',
            (gltf) => {
                gltf.scene.position.set(0, 0, 0)
                gltf.scene.scale.set(0.5,0.5,0.5)
                this.add(gltf.scene)
                this.rotation.x = Math.PI
                this.rotation.y= Math.PI/2
                this.position.set(0, -.2, 10)
                this.castShadow = true
                pivot.add(this)
            },
            (xhr) => {
            },
            (error) => {
                console.log(error);
            }
        )
    }

    update = () => {
        this.rotation.x += 0.01;
    }
}

export {XWing}