import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { useColorMode } from "@chakra-ui/react";


const ParticlesBackground = () => {
    const { colorMode } = useColorMode();

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            init={particlesInit}
            options={
                {
                    particles: {
                      number: {
                        value: 100,
                        density: {
                          enable: true,
                          value_area: 500
                        }
                      },
                      color: {
                        value: "#A1A8FF",
                      },
                      shape: {
                        type: "circle",
                      },
                      opacity: {
                        value: 0.5,
                        random: false,
                      },
                      size: {
                        value: 5,
                        random: true,
                      },
                      links: {
                        enable: true,
                        distance: 100,
                        color: colorMode === "light" ? "#000000" : "#D8D3D3",
                        opacity: 0.4,
                        width: 1
                      },
                      move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: "out",
                      }
                    },
                    interactivity: {
                      detectsOn: "window",
                      events: {
                        onHover: {
                          enable: true,
                          mode: "repulse"
                        },
                        onClick: {
                          enable: true,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        repulse: {
                          distance: 100
                        },
                        push: {
                          quantity: 4
                        },
                      }
                    },
                    retina_detect: true,
                  }
            }
        />
    )

};

export default ParticlesBackground
