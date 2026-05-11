// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { BsBook } from "react-icons/bs";

// const formations = [
//   {
//     diplome: "Master — Ingénierie des Systèmes Intelligents",
//     specialite: "Option Génie Logiciel",
//     ecole: "Faculté des Sciences Ain Chock, Casablanca",
//     periode: "2024 — Présent",
//   },
//   {
//     diplome: "Licence — Sciences Mathématiques et Informatiques",
//     specialite: "Option Systèmes et Réseaux",
//     ecole: "Faculté des Sciences Ain Chock, Casablanca",
//     periode: "2023 — 2024",
//   },
//   {
//     diplome: "DUT — Génie Électrique",
//     specialite: "Option Électronique et Informatique Industrielle",
//     ecole: "École Supérieure de Technologie, Casablanca",
//     periode: "2021 — 2023",
//   },
//   {
//     diplome: "Baccalauréat — Sciences et Technologie Électrique",
//     specialite: "",
//     ecole: "Lycée Qualifiant Errazi, El Jadida",
//     periode: "2021",
//   },
// ];

// function Education() {
//   return (
//     <Container>
//       <h1 className="project-heading" style={{ marginTop: "40px" }}>
//         Ma <strong className="purple">Formation</strong>
//       </h1>
//       <Row style={{ justifyContent: "center" }}>
//         <Col md={8}>
//           <div className="resume">
//             {formations.map((f, i) => (
//               <div className="resume-item" key={i} style={{ marginBottom: "20px" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     flexWrap: "wrap",
//                     alignItems: "center",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   <h5 style={{ color: "#c770f0", margin: 0 }}>
//                     <BsBook style={{ marginRight: "8px" }} />
//                     {f.diplome}
//                   </h5>
//                   <span style={{ color: "#aaa", fontSize: "0.85em" }}>
//                     {f.periode}
//                   </span>
//                 </div>
//                 {f.specialite && (
//                   <p style={{ color: "#b0b0b0", fontStyle: "italic", margin: "4px 0 4px" }}>
//                     {f.specialite}
//                   </p>
//                 )}
//                 <p style={{ color: "white", margin: 0 }}>{f.ecole}</p>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Education;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import { useLang } from "../context/LanguageContext";

function Education() {
  const { t, tArr } = useLang();
  const formations = tArr("edu");

  return (
    <Container>
      <h1 className="project-heading" style={{ marginTop: "40px" }}>
        {t("about_edu1")}{" "}
        <strong className="purple">{t("about_edu2")}</strong>
      </h1>
      <Row style={{ justifyContent: "center" }}>
        <Col md={8}>
          <div className="resume">
            {formations.map((f, i) => (
              <div className="resume-item" key={i} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    alignItems: "center",
                    marginBottom: "6px",
                  }}
                >
                  <h5 style={{ color: "#c770f0", margin: 0 }}>
                    <BsBook style={{ marginRight: "8px" }} />
                    {f.diplome}
                  </h5>
                  <span style={{ color: "#aaa", fontSize: "0.85em" }}>
                    {f.periode}
                  </span>
                </div>
                {f.specialite && (
                  <p style={{ color: "#b0b0b0", fontStyle: "italic", margin: "4px 0 4px" }}>
                    {f.specialite}
                  </p>
                )}
                <p style={{ color: "white", margin: 0 }}>{f.ecole}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;