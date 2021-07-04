import { Raycaster, Vector2 } from "../lib/three.js-master/build/three.module.js";
import { globals } from "./globals.js";

const raycast = new Raycaster();
const mouse = new Vector2();

const setEventHandler = () => {
    document.addEventListener("keyup", (e) => {
        if (e.code == 'KeyC') {
            globals.IS_CLOSE_UP = !globals.IS_CLOSE_UP
        }
    })

    window.addEventListener('mousemove', onMouseMove, false)
}

const onMouseMove = (event) => {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

const raycasterUpdate = (atmosfer, camera) => {
    raycast.setFromCamera(mouse, camera)
    const intersects = raycast.intersectObject(atmosfer)

    if(intersects.length == 1){
        globals.IS_ON_ATMOSFER = true
    }else{
        globals.IS_ON_ATMOSFER = false
    }
}

export { setEventHandler, raycasterUpdate }