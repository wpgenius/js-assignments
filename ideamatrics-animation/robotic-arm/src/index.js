import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    mobileAndTabletCheck,
    BloomPlugin,
    GammaCorrectionPlugin, 
} from "webgi";

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

lenis.stop()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

async function setupViewer(){

    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas'),
    })

    const isMobile = mobileAndTabletCheck()

    const manager = await viewer.addPlugin(AssetManagerPlugin)
    const camera = viewer.scene.activeCamera
    const position = camera.position
    const target = camera.target

    await viewer.addPlugin(GBufferPlugin)
    await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(true))
    await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    await viewer.addPlugin(BloomPlugin)

    const importer = manager.importer

    importer.addEventListener("onProgress", (ev) => {
        const progressRatio = (ev.loaded / ev.total)
        document.querySelector('.progress')?.setAttribute('style', `transform: scaleX(${progressRatio})`)
    })

    importer.addEventListener("onLoad", (ev) => {
        gsap.to('.loader', {x: '100%', duration: 0.8, ease: 'power4.inOut', delay: 1, onComplete: () =>{
            document.body.style.overflowY = 'auto'
            lenis.start()
        }})
    })

    viewer.renderer.refreshPipeline()

    await manager.addFromPath("./assets/a8.glb")

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true

    viewer.scene.activeCamera.setCameraOptions({controlsEnabled: false})

    if (isMobile){
        position.set(-3.5, -1.1, 5.5)
        target.set(-0.8, 1.55, -0.7)
        camera.setCameraOptions({ fov: 40 })
    }

    onUpdate()
    
    window.scrollTo(0,0)

    function setupScrollanimation(){
        const tl = gsap.timeline()

        tl
        .to(position, {x: -0.58, y: -0.62, z: 0.29,
            scrollTrigger: {
                trigger: ".second",
                start:"top bottom",
                end: "top top", scrub: true,
                immediateRender: false
        }, onUpdate})

        .to(target, {x: -0.08, y: -0.53 , z: 0.011,
            scrollTrigger: {
                trigger: ".second",
                start:"top bottom",
                end: "top top", scrub: true,
                immediateRender: false
        }})

        .to(position, {x: 0.78, y: -0.75, z: -0.016,
            scrollTrigger: {
                trigger: ".third",
                start:"top bottom",
                end: "top top", scrub: true,
                immediateRender: false
        }, onUpdate})

        .to(target, {x: -0.010, y: -0.808 , z: 0.165,
            scrollTrigger: {
                trigger: ".third",
                start:"top bottom",
                end: "top top", scrub: true,
                immediateRender: false
        }})
    }

    setupScrollanimation()

    // Very small, smooth movements on X, Y, Z axes
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;

    const updateMousePosition = (event) => {
        const { clientX: x, clientY: y } = event;

        // Further reduce the movement range for even more subtle motion
        targetX = (x / window.innerWidth - 0.5) * 0.02;  // Very small X-axis movement
        targetY = (y / window.innerHeight - 0.5) * 0.01; // Very small Y-axis movement
        targetZ = (x / window.innerWidth - 0.5) * 0.01;  // Very small Z-axis movement
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Hover effect and smooth movement
    viewer.addEventListener('preFrame', () => {
        gsap.to(viewer.scene.position, {
            x: targetX,
            y: targetY,
            z: targetZ,
            duration: 2.2,  // Increased duration for smoother motion
            ease: "power3.out"  // Smooth easing function
        });

        gsap.to(viewer.scene.scale, {
            x: 1.01,
            y: 1.01,
            z: 1.01,
            duration: 1.2,  // Smoother scaling
            ease: "power3.out",
            overwrite: "auto"
        });
        onUpdate();
    });

    // Return to normal size when mouse leaves
    viewer.addEventListener('mouseleave', () => {
        gsap.to(viewer.scene.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 1.2,  // Smoother scaling back
            ease: "power3.out",
            overwrite: "auto"
        });
    });

    let needsUpdate = true;

    function onUpdate() {
        needsUpdate = true;
        viewer.setDirty()
    }

    viewer.addEventListener('preFrame', () =>{
        if(needsUpdate){
            camera.positionTargetUpdated(true)
            needsUpdate = false
        }
    })
}

setupViewer()
