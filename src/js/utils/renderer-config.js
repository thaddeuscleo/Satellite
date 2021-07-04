import {
    Scene,
    WebGLRenderer
} from "../lib/three.js-master/build/three.module.js";

export const setSceneRenderer = () => {
    const scene = new Scene();
    const renderer = new WebGLRenderer({
        antialias: true,
    })
    renderer.shadowMap.enabled = true
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    return [scene, renderer]
}