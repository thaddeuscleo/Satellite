import { BufferAttribute, BufferGeometry, Object3D, Points, PointsMaterial } from "../lib/three.js-master/build/three.module.js";

class Particles extends Object3D{
    constructor(scene) {
        super()
        this.particleGeo = new BufferGeometry()
        this.particleCount = 2000
        this.positionArray = new Float32Array(this.particleCount * 3)
        for (let i = 0; i < this.particleCount * 3; i++) {
            this.positionArray[i] = (Math.random() - 0.5) * 8000
        }
        this.particleGeo.setAttribute('position', new BufferAttribute(this.positionArray, 3))
        this.particleMaterial = new PointsMaterial({
            size: 0.002
        })
        this.particleMesh = new Points(this.particleGeo, this.particleMaterial)
        this.add(this.particleMesh)
        scene.add(this)
    }

    update = () => {
        this.rotation.x += 0.0008
    }

}

export { Particles }