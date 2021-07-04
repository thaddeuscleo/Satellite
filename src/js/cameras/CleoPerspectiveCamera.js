import {
    PerspectiveCamera,
    Vector3
} from "../lib/three.js-master/build/three.module.js";

class CleoPerspectiveCamera extends PerspectiveCamera {
    constructor(
        position = new Vector3(0, 0, 0),
        lookAtPos = new Vector3(0, 0, 0)
    ) {
        super(75, window.innerWidth / window.innerHeight, 0.1, 10000)
        this.position.copy(position)
        this.lookAt(lookAtPos)
    }
}

export { CleoPerspectiveCamera }