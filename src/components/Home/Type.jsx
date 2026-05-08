import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingénieure Systèmes Intelligents",
          "Développeuse Full-Stack Web & Mobile",
          "IoT & Embedded Systems",
          "From Sensors to Cloud"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
