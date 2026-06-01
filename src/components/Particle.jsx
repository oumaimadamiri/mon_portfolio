import React, { useMemo } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const reduce = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth < 768,
    []
  );

  if (reduce) return null;

  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 60,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        particles: {
          number: {
            value: isMobile ? 30 : 80,
            density: { enable: true, value_area: 1500 },
          },
          line_linked: { enable: false, opacity: 0.03 },
          move: { direction: "right", speed: 0.05 },
          size: { value: 1 },
          opacity: {
            anim: { enable: true, speed: 1, opacity_min: 0.05 },
          },
        },
        interactivity: {
          events: { onclick: { enable: true, mode: "push" } },
          modes: { push: { particles_nb: 1 } },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
