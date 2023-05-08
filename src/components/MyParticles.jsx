import React,{useCallback} from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MyParticles=()=> {
        const particlesInit = useCallback(async engine => {
            console.log(engine);
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async container => {
            await console.log(container);
        }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fullScreen:{
            enable:true,
            zIndex: 0
        },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 90,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#000",
            },
            links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 2000,
                },
                value: 9,
            },
            opacity: {
                value: 0.4,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
/>
  )

}
export default MyParticles ;
