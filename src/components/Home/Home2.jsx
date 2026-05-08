import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
               Hello! Je suis Oumaima Damiri, ingénieure en Systèmes Intelligents basée à El Jadida, Maroc. 
               Je conçois des solutions complètes qui relient le monde physique (capteurs, microcontrôleurs ESP32/Raspberry Pi, protocoles MQTT/I2C/Modbus) au monde logiciel (React.js, React Native, Spring Boot, FastAPI, Django).
              <br />
              <br />
              
              <i>
                <b className="purple">
                  {" "}
                 Mon terrain de jeu :{" "}
                </b>
              </i>
              les jumeaux numériques industriels, l'IoT et les architectures temps réel.
              <br />
              Actuellement en stage de fin d'études chez OCP — Research Center ManufacturiX, je développe un système complet de simulation et supervision SCADA pour un turbo-alternateur.
              <br />
              <br/>
              
              Je m'intéresse particulièrement à : 
              <b className="purple"> IoT & systèmes embarqués </b> {" , "}
              <i>
                <b className="purple">Applications web/mobile cross-platform</b> et {" "}
                <b className="purple">Intégration d'IA dans les systèmes industriels</b>.
              </i>
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
