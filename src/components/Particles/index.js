import { useCallback } from "react"
import Particles from "react-particles"
//import { loadFull } from "tsparticles" 
import { loadSlim } from "tsparticles-slim"

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        //await loadFull(engine)
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                },
                fpsLimit: 100,
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
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 400,
                        enable: true,
                        opacity: 0.5,
                        width: 0.5,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Particle