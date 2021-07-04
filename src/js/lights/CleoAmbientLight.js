import { AmbientLight } from "../lib/three.js-master/build/three.module.js";

class CleoAmbientLight extends AmbientLight {
    constructor(lightIntensity = 1) {
        super(0xFFFFFF, lightIntensity)
    }
}

export { CleoAmbientLight }