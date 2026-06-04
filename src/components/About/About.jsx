import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CurrentlyBuilding from "./CurrentlyBuilding";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";
import Education from "./Education";
import { useLang } from "../context/LanguageContext";
import SEO from "../SEO";
import { fadeUp, useMotionSafe } from "../motionPresets";

function About() {
  const { t } = useLang();
  const safe = useMotionSafe();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <SEO path="/about" />
      <Container fluid className="about-section">
        <Container>
          <motion.div {...safe(fadeUp(0))}>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  {t("about_who1")}{" "}
                  <strong className="purple">{t("about_who2")}</strong>
                </h1>
                <Aboutcard />
              </Col>
              <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
                <img src={laptopImg} alt={t("about_image_alt")} className="img-fluid" />
              </Col>
            </Row>
          </motion.div>

          <motion.section {...safe(fadeUp(0))}>
            <h1 className="project-heading">
              {t("about_skills1")}{" "}
              <strong className="purple">{t("about_skills2")}</strong>
            </h1>
            <Techstack />
          </motion.section>

          <motion.section {...safe(fadeUp(0))}>
            <h1 className="project-heading">
              {t("about_tools1")}{" "}
              <strong className="purple">{t("about_tools2")}</strong>
            </h1>
            <Toolstack />
          </motion.section>

          <motion.section {...safe(fadeUp(0))}>
            <Experience />
          </motion.section>

          <motion.section {...safe(fadeUp(0))}>
            <Education />
          </motion.section>

          <motion.section {...safe(fadeUp(0))}>
            <CurrentlyBuilding />
          </motion.section>
        </Container>
      </Container>
    </motion.main>
  );
}

export default About;
