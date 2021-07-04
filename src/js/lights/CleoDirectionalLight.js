import {
    DirectionalLight,
    DirectionalLightHelper
} from "../lib/three.js-master/build/three.module.js";

class CleoDirectionalLight extends DirectionalLight {

    constructor(lightIntensity = 1) {
        super(0xFFFFFF, lightIntensity)
    }

    showHelper = (scene) => {
        let helper = new DirectionalLightHelper(this);
        scene.add(helper);
    }
}

export { CleoDirectionalLight }