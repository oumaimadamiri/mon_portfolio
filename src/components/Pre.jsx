import React from "react";
import { useLang } from "./context/LanguageContext";

function Pre(props) {
  const { t } = useLang();
  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      role="status"
      aria-busy={props.load}
      aria-label={t("preloader_label")}
    />
  );
}

export default Pre;
