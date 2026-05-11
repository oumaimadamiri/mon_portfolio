import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useLang } from "../context/LanguageContext";

// Images des projets (inchangées)
import digitalTwinImg from "../../Assets/Projects/chatify.png";
import findntagImg    from "../../Assets/Projects/blog.png";
import parkingImg     from "../../Assets/Projects/codeEditor.png";
import quizzyImg      from "../../Assets/Projects/leaf.png";
import moodlyImg      from "../../Assets/Projects/emotion.png";

// Images mappées dans l'ordre des projets dans LanguageContext
const PROJECT_IMAGES = [digitalTwinImg, findntagImg, parkingImg, quizzyImg, moodlyImg];

const ALL_FILTERS = ["IoT", "Web", "Mobile", "IA", "Full-Stack", "SCADA"];

function Projects() {
  const { t, tArr } = useLang();
  const [activeFilter, setActiveFilter] = useState("all"); // "all" = clé neutre

  const projects = tArr("projects").map((p, i) => ({
    ...p,
    imgPath: PROJECT_IMAGES[i] ?? digitalTwinImg,
  }));

  const filterAll = t("filter_all"); // "Tous" ou "All"

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("proj_title1")}{" "}
          <strong className="purple">{t("proj_title2")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("proj_subtitle")}</p>

        {/* ── Boutons de filtre ── */}
        <div
          style={{
            marginBottom: "30px",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Bouton "Tous / All" */}
          <button
            onClick={() => setActiveFilter("all")}
            style={{
              margin: "5px",
              padding: "6px 20px",
              borderRadius: "20px",
              border: "1px solid #c770f0",
              backgroundColor: activeFilter === "all" ? "#c770f0" : "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: "0.9em",
              transition: "all 0.3s ease",
              position: "relative",
              zIndex: 10,
            }}
          >
            {filterAll}
          </button>

          {/* Boutons par tag (inchangés, noms techniques) */}
          {ALL_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                margin: "5px",
                padding: "6px 20px",
                borderRadius: "20px",
                border: "1px solid #c770f0",
                backgroundColor: activeFilter === filter ? "#c770f0" : "transparent",
                color: "white",
                cursor: "pointer",
                fontSize: "0.9em",
                transition: "all 0.3s ease",
                position: "relative",
                zIndex: 10,
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Cartes projets ── */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;