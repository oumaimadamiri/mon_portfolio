// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { BsBriefcaseFill } from "react-icons/bs";

// const experiences = [
//   {
//     poste: "Stagiaire Ingénieure — Digital Twin",
//     entreprise: "OCP SA — Research Center ManufacturiX",
//     periode: "Février 2026 — Aujourd'hui",
//     lieu: "El Jadida",
//     points: [
//       "Conception d'un jumeau numérique complet pour un turbo-alternateur industriel.",
//       "Modèle thermodynamique IAPWS-IF97 avec calibration Ridge Regression.",
//       "Architecture temps réel : FastAPI + WebSocket, Redis, SQLite.",
//       "Interface SCADA interactive conforme aux standards ISA-101.",
//     ],
//   },
//   {
//     poste: "Stagiaire Technicienne — Automatisme & Instrumentation",
//     entreprise: "Groupe OCP — Jorf Lasfar Nord",
//     periode: "Avril 2023 — Juin 2023",
//     lieu: "El Jadida",
//     points: [
//       "Étude complète d'un doseur pondéral industriel et liaison avec le DCS.",
//       "Diagnostic de fiabilité par la méthode des 5 Pourquoi.",
//       "Élaboration d'un plan de 20 actions correctives remis à l'équipe maintenance.",
//     ],
//   },
// ];

// function Experience() {
//   return (
//     <Container>
//       <h1 className="project-heading" style={{ marginTop: "40px" }}>
//         Mon <strong className="purple">Expérience</strong>
//       </h1>
//       <Row style={{ justifyContent: "center" }}>
//         <Col md={8}>
//           <div className="resume">
//             {experiences.map((exp, i) => (
//               <div className="resume-item" key={i} style={{ marginBottom: "20px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     flexWrap: "wrap",
//                     alignItems: "center",
//                     marginBottom: "8px",
//                   }}
//                 >
//                   <h5 style={{ color: "#c770f0", margin: 0 }}>
//                     <BsBriefcaseFill style={{ marginRight: "8px" }} />
//                     {exp.poste}
//                   </h5>
//                   <span style={{ color: "#aaa", fontSize: "0.85em" }}>
//                     {exp.periode} | {exp.lieu}
//                   </span>
//                 </div>
//                 <p style={{ color: "#b0b0b0", fontStyle: "italic", margin: "4px 0 10px" }}>
//                   {exp.entreprise}
//                 </p>
//                 <ul>
//                   {exp.points.map((point, j) => (
//                     <li key={j} style={{ color: "white", marginBottom: "5px" }}>
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Experience;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsBriefcaseFill } from "react-icons/bs";
import { useLang } from "../context/LanguageContext";

function Experience() {
  const { t, tArr } = useLang();
  const experiences = tArr("exp");

  return (
    <Container>
      <h1 className="project-heading" style={{ marginTop: "40px" }}>
        {t("about_exp1")}{" "}
        <strong className="purple">{t("about_exp2")}</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8}>
          <div className="resume">
            {experiences.map((exp, i) => (
              <div className="resume-item" key={i} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h5 style={{ color: "#c770f0", margin: 0 }}>
                    <BsBriefcaseFill style={{ marginRight: "8px" }} />
                    {exp.poste}
                  </h5>
                  <span style={{ color: "#aaa", fontSize: "0.85em" }}>
                    {exp.periode} | {exp.lieu}
                  </span>
                </div>
                <p style={{ color: "#b0b0b0", fontStyle: "italic", margin: "4px 0 10px" }}>
                  {exp.entreprise}
                </p>
                <ul>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{ color: "white", marginBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;