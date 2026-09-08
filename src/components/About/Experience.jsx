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
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85em" }}>
                    {exp.periode} | {exp.lieu}
                  </span>
                </div>
                <p style={{ color: "var(--text-muted)", fontStyle: "italic", margin: "4px 0 10px" }}>
                  {exp.entreprise}
                </p>
                <ul>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{ color: "var(--text-primary)", marginBottom: "5px" }}>
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
