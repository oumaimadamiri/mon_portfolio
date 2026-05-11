import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience"; // ← nouveau
import Education from "./Education";  // ← nouveau
import {useLang} from "../context/LanguageContext"

function About() {
  const { t } = useLang();
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t("about_who1")}{" "} 
                <strong className="purple">{t("about_who2")}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            {t("about_skills1")}{" "} 
            <strong className="purple">{t("about_skills2")}</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            {t("about_tools1")}{" "}
            <strong className="purple">{t("about_tools2")}</strong>
          </h1>
          <Toolstack />
          {/* Expérience ← nouveau */}
          <Experience />

          {/* Formation ← nouveau */}
          <Education />
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
