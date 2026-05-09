import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieure des Systèmes Intelligents",      // ✅
          "IoT & Embedded Systems Engineer",        // ✅
          "Développeuse Full-Stack Web & Mobile",   // ✅
          "Du Microcontrôleur à l'Interface",   // ✅ remplace "From Sensors to Cloud"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;