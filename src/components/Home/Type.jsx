import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../context/LanguageContext";

const STRINGS = {
  fr: [
    "Ingénieure des Systèmes Intelligents",
    "IoT & Embedded Systems Engineer",
    "Développeuse Full-Stack Web & Mobile",
    "Du Microcontrôleur à l'Interface",
  ],
  en: [
    "Intelligent Systems Engineer",
    "IoT & Embedded Systems Engineer",
    "Full-Stack Web & Mobile Developer",
    "From Microcontroller to Interface",
  ],
};

function Type() {
  const { lang } = useLang();

  return (
    <Typewriter
      key={lang} // force le re-mount quand la langue change
      options={{
        strings: STRINGS[lang],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;