import { Mesh, MeshStandardMaterial, Object3D, TextGeometry } from "../lib/three.js-master/build/three.module.js";
import { globals } from "../utils/globals.js";

class Panel extends Object3D {
    constructor(scene, loader) {
        super()
        this.zPos = 0

        loader.load('fonts/manifest.json', (font) => {
            this.fontGeo = new TextGeometry('EARTH', {
                font: font,
                size: 1,
                height: 1.2,
            })
            this.fontMat = new MeshStandardMaterial({
                color: 'white'
            })
            this.fontMesh = new Mesh(this.fontGeo, this.fontMat)
            this.fontMesh.position.set(-1.8, 3, this.zPos)
            this.fontMesh.rotation.x = -Math.PI / 18
            this.add(this.fontMesh)
            scene.add(this)
        })

    }


    update = () => {
        if (globals.IS_ON_ATMOSFER && this.fontMesh != undefined && this.zPos <= 2.9) {
            this.fontMesh.position.z = this.zPos
            this.zPos += 0.09
        } else {
            if (this.fontMesh != undefined && this.zPos > 0) {
                this.fontMesh.position.z = this.zPos
                this.zPos -= 0.1
            }
        }
    }
}

export { Panel }