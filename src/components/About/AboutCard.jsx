import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLang } from "../context/LanguageContext";

function AboutCard() {
  const { t } = useLang();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("ac_hello")}{" "}
            <span className="purple">Oumaima Damiri</span>
            {t("ac_from")}
            <span className="purple">{t("ac_location")}</span>.
            <br />
            <br />
            {t("ac_p1a")}{" "}
            <span className="purple">{t("ac_dut")}</span>{" "}
            {t("ac_then")}{" "}
            <span className="purple">{t("ac_master")}</span>{" "}
            {t("ac_school")}{" "}
            <span className="purple">{t("ac_iot")}</span>{" "}
            {t("ac_side")}{" "}
            <span className="purple">{t("ac_fullstack")}</span>{" "}
            {t("ac_webmobile")}
            <br />
            <br />
            {t("ac_p2")}{" "}
            <span className="purple">ESP32</span>{" "}
            {t("ac_than")}{" "}
            <span className="purple">React Native</span>{" "}
            {t("ac_backend")}{" "}
            <span className="purple">Spring Boot / FastAPI</span>{" "}
            {t("ac_sensor")}
            <br />
            <br />
            {t("ac_hobbies")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("ac_h1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ac_h2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ac_h3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("ac_h4")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("ac_quote")}</p>
          <footer className="blockquote-footer">Oumaima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
