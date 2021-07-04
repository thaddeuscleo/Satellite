import { OrbitControls } from "../lib/three.js-master/examples/jsm/controls/orbitcontrols.js"

export const setOrbitControl = (camera, renderer) => {
    let control = new OrbitControls(camera, renderer.domElement)
    control.minDistance = 10
    control.maxDistance = 15
    control.minPolarAngle = 0
    control.maxPolarAngle = Math.PI / 1.2;
    control.rotateSpeed = 0.1;
    control.zoomSpeed = 0.5;
    return control
}