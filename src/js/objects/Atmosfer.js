import {
    Mesh,
    MeshLambertMaterial,
    SphereGeometry
} from "../lib/three.js-master/build/three.module.js";

class Atmosfer extends Mesh {
    constructor() {
        super(
            new SphereGeometry(5.3, 32, 32),
            new MeshLambertMaterial({
                color: 0x4d8bf0,
                transparent: true,
                opacity: 0.08
            })
        );
    }
}

export { Atmosfer }