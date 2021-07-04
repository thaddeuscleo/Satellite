import { CleoAmbientLight } from "./CleoAmbientLight.js"
import { CleoDirectionalLight } from "./CleoDirectionalLight.js"
import { CleoPointLight } from "./CleoPointLight.js"

export const addSceneLight = (scene) => {
    
    // Ambient Light
    let ambient = new CleoAmbientLight(0.9)
    scene.add(ambient)

    // let point = new CleoPointLight(2.2)
    // point.position.set(30, 10, 13)
    // point.showHelper(scene)
    // scene.add(point)

    let directionalLight = new CleoDirectionalLight(4);
    directionalLight.position.set(-30, -10, 13)
    // directionalLight.showHelper(scene);
    scene.add(directionalLight);
}

