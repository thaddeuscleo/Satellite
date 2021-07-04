import * as THREE from "./lib/three.js-master/build/three.module.js"
import { GLTFLoader } from "./lib/three.js-master/examples/jsm/loaders/GLTFLoader.js"
import { CleoPerspectiveCamera } from "./cameras/CleoPerspectiveCamera.js";
import { addSceneLight } from "./lights/SceneLight.js";
import { Atmosfer } from "./objects/Atmosfer.js";
import { Planet } from "./objects/Planet.js";
import { XWing } from "./objects/XWing.js";
import { setOrbitControl } from "./utils/control-config.js";
import { setSceneRenderer } from "./utils/renderer-config.js";
import { Satellite } from "./objects/Satellite.js";
import { globals } from "./utils/globals.js";
import { raycasterUpdate, setEventHandler } from "./utils/events.js";
import { Particles } from "./objects/Particles.js";
import { Panel } from "./objects/Panel.js";
import { Skybox } from "./objects/Skybox.js";
import { Asteroid } from "./objects/Asteroid.js";


// Renderer & Scene
const [scene, renderer] = setSceneRenderer();

// camera
const mainCamera = new CleoPerspectiveCamera(new THREE.Vector3(0, 5, 13))
const satelliteCamera = new CleoPerspectiveCamera(new THREE.Vector3(0, 0, .1))
satelliteCamera.rotation.x = Math.PI / 2

// Lights
addSceneLight(scene)

// OrbitControl
setOrbitControl(mainCamera, renderer);

// loaders
const textureLoader = new THREE.TextureLoader()
const gltfLoader = new GLTFLoader()
const fontLoader = new THREE.FontLoader()





// ===== Scene Content Start =====

// Blue Ocean Planet
const blueOceanPlanet = new Planet(
    'assets/textures/planets/earth.jpg',
    'assets/textures/planets/earth-normal.tif',
    textureLoader,
    "blueOceanPlanet"
)

// Atmosfer
const atmosfer = new Atmosfer()
blueOceanPlanet.add(atmosfer)
scene.add(blueOceanPlanet)

// BlueOceanPlanetPivot
let blueOceanPlanetPivot = new THREE.Object3D()
blueOceanPlanetPivot
    .position
    .copy(blueOceanPlanet.position)
scene.add(blueOceanPlanetPivot)

// XWing Model
const xWing = new XWing(
    gltfLoader,
    blueOceanPlanetPivot
)

// Satellite
const satellitePivot = new THREE.Object3D();
const satellite = new Satellite(gltfLoader, satellitePivot)
satellitePivot.add(satellite)
scene.add(satellitePivot)
satellite.add(satelliteCamera)

// Particles Skybox Panel
const particle = new Particles(scene);
const panel = new Panel(scene, fontLoader)
const skybox = new Skybox(scene, textureLoader)


const asteroid = new Asteroid(scene, textureLoader)

// ===== Scene Content End =====



// Event Handler
setEventHandler()

const animate = () => {
    requestAnimationFrame(animate)
    blueOceanPlanetPivot.rotation.y += 0.01;
    satellitePivot.rotation.y += 0.001;

    blueOceanPlanet.update()
    xWing.update()
    particle.update()
    panel.update()
    skybox.update()
    asteroid.update()
    
    let camera;
    if (globals.IS_CLOSE_UP) {
        camera = satelliteCamera;
    } else {
        camera = mainCamera;
    }

    raycasterUpdate(atmosfer, camera)
    renderer.render(scene, camera)
}
animate()