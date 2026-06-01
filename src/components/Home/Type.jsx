import React from "react";
import Typewriter from "typewriter-effect";
import { useLang } from "../context/LanguageContext";

function Type() {
  const { lang, tArr } = useLang();

  return (
    <div aria-live="polite" aria-atomic="true">
      <Typewriter
        key={lang}
        options={{
          strings: tArr("type_strings"),
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
