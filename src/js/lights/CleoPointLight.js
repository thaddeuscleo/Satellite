import {
    PointLight,
    PointLightHelper
} from "../lib/three.js-master/build/three.module.js";

class CleoPointLight extends PointLight {
    constructor(lightIntensity = 1, lightColor = 0xFFFFFF) {
        super(lightColor, lightIntensity)
    }

    showHelper = (scene) => {
        let helper = new PointLightHelper(this)
        scene.add(helper)
    }
}

export { CleoPointLight }