import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Experience from "./Experience";
import Education from "./Education";
import { useLang } from "../context/LanguageContext";
import { fadeUp, useMotionSafe } from "../motionPresets";

function About() {
  const { t } = useLang();
  const safe = useMotionSafe();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4 }}
    >
      <Container fluid className="about-section">
        <Container>
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

        </Container>
      </Container>
    </motion.section>
  );
}

export default About;
