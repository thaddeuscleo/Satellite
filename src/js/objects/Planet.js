import {
    Mesh,
    MeshStandardMaterial,
    SphereGeometry
} from "../lib/three.js-master/build/three.module.js";

class Planet extends Mesh {
    constructor(texturePath, normalMapPath, loader, objName = "Planet") {
        super(
            new SphereGeometry(5, 32, 32),
            new MeshStandardMaterial({
                color: 'white',
                map: loader.load(texturePath),
                // normalMap: loader.load(normalMapPath),
                // castShadow: true,
            })
        );
        this.position.set(0, 0, 0)
        this.name = objName
        this.castShadow = true
    }

    update = () => {
        this.rotation.y -= 0.001;
    }
}

export { Planet }