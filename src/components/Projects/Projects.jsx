import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCards";
import { useLang } from "../context/LanguageContext";
import { fadeUp, staggerContainer, cardItem, useMotionSafe } from "../motionPresets";

import digitalTwinImg from "../../Assets/Projects/digital_twin.webp";
import findntagImg    from "../../Assets/Projects/findNtag.webp";
import parkingImg     from "../../Assets/Projects/parking.webp";
import quizzyImg      from "../../Assets/Projects/quizzy.webp";
import moodlyImg      from "../../Assets/Projects/moodly.webp";

const PROJECT_IMAGES = [digitalTwinImg, findntagImg, parkingImg, quizzyImg, moodlyImg];
const ALL_FILTERS = ["IoT", "Web", "Mobile", "IA", "Full-Stack", "SCADA"];

const buttonBase = {
  margin: "5px",
  padding: "6px 20px",
  borderRadius: "20px",
  border: "1px solid #c770f0",
  color: "var(--text-primary)",
  cursor: "pointer",
  fontSize: "0.9em",
  background: "transparent",
  position: "relative",
  zIndex: 10,
};

function Projects() {
  const { t, tArr } = useLang();
  const safe = useMotionSafe();
  const [activeFilter, setActiveFilter] = useState("all");

  const labelFor = (raw) => (raw === "IA" ? t("filter_ai_label") : raw);

  const projects = tArr("projects").map((p, i) => ({
    ...p,
    imgPath: PROJECT_IMAGES[i] ?? digitalTwinImg,
  }));

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4 }}
    >
      <Container fluid className="project-section">
        <Container>
          <motion.h1 {...safe(fadeUp(0))} className="project-heading">
            {t("proj_title1")}{" "}
            <strong className="purple">{t("proj_title2")}</strong>
          </motion.h1>
          <motion.p {...safe(fadeUp(0.1))} style={{ color: "white" }}>
            {t("proj_subtitle")}
          </motion.p>

          <div style={{ marginBottom: 30, textAlign: "center", position: "relative", zIndex: 10 }}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveFilter("all")}
              style={{ ...buttonBase, backgroundColor: activeFilter === "all" ? "#c770f0" : "transparent" }}
              aria-pressed={activeFilter === "all"}
            >
              {t("filter_all")}
            </motion.button>

            {ALL_FILTERS.map((filter) => (
              <motion.button
                key={filter}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveFilter(filter)}
                style={{ ...buttonBase, backgroundColor: activeFilter === filter ? "#c770f0" : "transparent" }}
                aria-pressed={activeFilter === filter}
              >
                {labelFor(filter)}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.1 }}
          >
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <Col md={4} className="project-card" key={project.title}>
                    <motion.div
                      layout
                      variants={cardItem}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    >
                      <ProjectCard
                        imgPath={project.imgPath}
                        isBlog={false}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        ghLink={project.ghLink}
                        demoLink={project.demoLink}
                      />
                    </motion.div>
                  </Col>
                ))}
              </AnimatePresence>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </motion.section>
  );
}

export default Projects;
