// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Digital Twin Turbo-Alternateur"
//               description="Personal "
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Find'N'Tag"
//               description="My é"
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Smart Parking "
//               description="Online "
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Quizzy"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Moodly"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ⚠️ Remplacez ces images par de vraies captures d'écran de vos projets
import digitalTwinImg from "../../Assets/Projects/chatify.png";
import findntagImg    from "../../Assets/Projects/blog.png";
import parkingImg     from "../../Assets/Projects/codeEditor.png";
import quizzyImg      from "../../Assets/Projects/leaf.png";
import moodlyImg      from "../../Assets/Projects/emotion.png";

// ─── Données des projets ───────────────────────────────────────────────────
const projectsData = [
  {
    title: "Digital Twin — Turbo-Alternateur",
    description:(
      <>
      Jumeau numérique d'un turbo-alternateur industriel chez{" "}
        <b>OCP ManufacturiX</b>. Modèle thermodynamique IAPWS-IF97,
        architecture temps réel <b>FastAPI + WebSocket</b> et interface{" "}
        <b>SCADA</b> interactive conforme ISA-101.      </>
    ),
    tags: ["IoT", "Backend", "IA", "SCADA"],
    ghLink: "https://github.com/oumaimadamiri/digital-twin", // ⚠️ à mettre à jour
    imgPath: digitalTwinImg,
  },
  {
    title: "Find'N'Tag — Suivi d'animaux",
    description:(
      <>
        App mobile de géolocalisation d'animaux via <b>NFC</b>. Backend{" "}
        <b>Spring Boot + RAG</b>, frontend <b>React Native</b> avec
        intégration GPS et OCR pour identification en temps réel.
      </>
    ),    
    tags: ["Mobile", "IoT", "IA"],
    ghLink: "https://github.com/oumaimadamiri/findntag", // ⚠️ à mettre à jour
    imgPath: findntagImg,
  },
  {
    title: "Smart Parking — Gestion intelligente",
    description: (
      <>
        Système <b>IoT</b> de gestion de parking avec{" "}
        <b>Raspberry Pi + RFID</b> pour le contrôle d'accès et interface
        web de supervision en temps réel.
      </>
    ),
    tags: ["IoT", "Web"],
    ghLink: "https://github.com/oumaimadamiri/smart-parking", // ⚠️ à mettre à jour
    imgPath: parkingImg,
  },
  {
    title: "Quizzy — Gestionnaire de quiz",
    description: (
      <>
        App mobile éducative <b>cross-platform</b> (iOS/Android) avec
        gestion des rôles Étudiant/Professeur. <b>Spring Boot</b> +{" "}
        <b>React Native</b>, timer intégré et correction automatique.
      </>
    ),
    tags: ["Mobile", "Full-Stack"],
    ghLink: "https://github.com/oumaimadamiri/quizzy", // ⚠️ à mettre à jour
    imgPath: quizzyImg,
  },
  {
    title: "Moodly — Réseau Social",
    description: (
      <>
        Réseau social web de partage d'humeur. Backend <b>Django</b>,
        frontend <b>React.js</b> — création de profil et interactions
        entre utilisateurs.
      </>
    ),
    tags: ["Web", "Full-Stack"],
    ghLink: "https://github.com/oumaimadamiri/moodly", // ⚠️ à mettre à jour
    imgPath: moodlyImg,
  },
];

// ─── Filtres disponibles ───────────────────────────────────────────────────
const allFilters = ["Tous", "IoT", "Web", "Mobile", "IA", "Full-Stack", "SCADA"];

// ─── Composant principal ───────────────────────────────────────────────────
function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets</strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>

        {/* ── Boutons de filtre ── */}
        <div style={{ marginBottom: "30px", textAlign: "center", position: "relative",  // ← ajout
          zIndex: 10, }}>
          {allFilters.map((filter) => (
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
                position: "relative",  // ← ajout
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