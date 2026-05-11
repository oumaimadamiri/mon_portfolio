import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {useLang} from "../context/LanguageContext"

function Home2() {
  const { t } = useLang();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2_title1")}{" "}
              <span className="purple">{t("home2_title2")}</span>
            </h1>
            <p className="home-about-body">
               {/* Salut ! Je suis Oumaima Damiri, ingénieure formée à la 
              fois au Génie Électrique (DUT) et au Génie Logiciel 
              (Master ISI).              
              <br />
              <br />
              Cette double formation m'a permis de développer une 
              expertise rare allant des microcontrôleurs ESP32 aux 
              applications React/Spring Boot, en passant par les 
              APIs FastAPI et les protocoles industriels (MQTT, 
              Modbus).
              <br />
              <br />
              <i>
                <b className="purple">
                  {" "}
                 Parmi mes réalisations :{" "}
                </b>
              </i>
              un Digital Twin complet pour 
              un turbo-alternateur industriel (OCP — Research Center 
              ManufacturiX), une application mobile de géolocalisation 
              NFC (Find'N'Tag), et un système IoT de gestion de 
              parking.
              <br />
              <br/>
              
              Je m'intéresse particulièrement à : 
              <b className="purple"> IoT & systèmes embarqués </b> {" , "}
              <i>
                <b className="purple">Applications web/mobile cross-platform</b> et {" "}
                <b className="purple">Intégration d'IA dans les systèmes industriels</b>.
              </i>
              <br/>
              Ouverte aux opportunités en développement Full-Stack, 
              IoT industriel ou Digital Twin */}
              {t("home2_p1")}
              <br />
              <br />
              {t("home2_p2")}
              <br />
              <br />
              <i>
                <b className="purple">{t("home2_highlights")} </b>
              </i>
              {t("home2_p3")}
              <br />
              <br />
              {t("home2_interests")}
              <br />
              <b className="purple"> {t("home2_i1")}</b>{", "}
              <i>
                <b className="purple">{t("home2_i2")}</b>
                {" "}{t("lang") === "en" ? "and" : "et"}{" "}
                <b className="purple">{t("home2_i3")}</b>.
              </i>
              <br />
              {t("home2_open")}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
