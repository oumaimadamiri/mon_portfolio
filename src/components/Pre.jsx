import React from "react";
function Pre(props) {
  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      role="status"
      aria-busy={props.load}
      aria-label="Chargement en cours"
    />
  );
}

export default Pre;
