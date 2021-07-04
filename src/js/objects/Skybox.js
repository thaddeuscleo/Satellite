import { BackSide, BoxGeometry, Mesh, MeshBasicMaterial } from "../lib/three.js-master/build/three.module.js"

class Skybox {
    constructor(scene, loader) {
        this.mats = [
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_front.png'),
                transparent: true,
                opacity: 0.2,
            }),
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_back.png'),
                transparent: true,
                opacity: 0.2,
            }),
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_top.png'),
                transparent: true,
                opacity: 0.2,
            }),
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_bottom.png'),
                transparent: true,
                opacity: 0.2,
            }), 
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_right.png'),
                transparent: true,
                opacity: 0.2,
            }),
            new MeshBasicMaterial({
                map: loader.load('assets/skybox/Spacebox_left.png'),
                transparent: true,
                opacity: 0.2,
            }),
        ]

        this.mats = this.mats.map((mat) => {
            mat.side = BackSide
            return mat
        })

        this.geo = new BoxGeometry(10000, 10000, 10000)
        this.mesh = new Mesh(this.geo, this.mats)
        this.mesh.name = "Skybox"
        scene.add(this.mesh)
    }

    update = () => {
        this.mesh.rotation.y += 0.001;
    }
}

export { Skybox }