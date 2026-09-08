import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { useLang } from "../context/LanguageContext";

import pdfDev from "../../Assets/Damiri_Oumaima_DEV.pdf";
import pdfIot from "../../Assets/Damiri_Oumaima_IOT.pdf";

const CVS = [
  {
    id: "dev",
    labelKey: "resume_card_dev_label",
    emoji: "💻",
    accent: "#c770f0",
    file: pdfDev,
    techs: [
      "React.js", "React Native", "Tailwind CSS",
      "Spring Boot", "FastAPI", "WebSocket", "API REST",
      "PostgreSQL", "SQLite",
    ],
  },
  {
    id: "iot",
    labelKey: "resume_card_iot_label",
    emoji: "🔌",
    accent: "#38bdf8",
    file: pdfIot,
    techs: [
      "Embedded C", "C++", "Python",
      "ESP32", "Arduino", "Raspberry Pi",
      "MQTT", "MATLAB", "Simulink", "Proteus",
    ],
  },
];

function ResumeNew() {
  const { t } = useLang();
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));
  const active = CVS.find((c) => c.id === open);

  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4 }}
    >
      <Container fluid className="resume-section">
        <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column" }}>

          <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            <h1 className="project-heading">
              {t("resume_title1")}{" "}
              <strong className="purple">{t("resume_title2")}</strong>
            </h1>
            <p style={{ color: "var(--text-muted)", textAlign: "center" }}>
              {t("resume_subtitle")}
            </p>
          </Row>

          <Row style={{ justifyContent: "center", gap: "20px", marginBottom: "32px" }}>
            {CVS.map((cv) => {
              const isOpen = open === cv.id;
              return (
                <Col
                  key={cv.id}
                  xs={10} sm={5} md={4}
                  onClick={() => toggle(cv.id)}
                  className={`cv-card${isOpen ? " cv-card--open" : ""}`}
                  style={{
                    cursor: "pointer",
                    background: isOpen ? `${cv.accent}22` : "var(--card-bg)",
                    border: `1.5px solid ${isOpen ? cv.accent : "var(--card-border)"}`,
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{cv.emoji}</div>
                      <h4 style={{ color: isOpen ? cv.accent : "var(--text-primary)", margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
                        {t(cv.labelKey)}
                      </h4>
                      <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {cv.techs.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              background: `${cv.accent}18`,
                              color: cv.accent,
                              border: `1px solid ${cv.accent}44`,
                              borderRadius: "12px",
                              padding: "2px 10px",
                              fontSize: "0.75rem",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{
                      color: cv.accent,
                      fontSize: "1.5rem",
                      transition: "transform 0.3s",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      <MdExpandMore />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          {active && (
            <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
              <Col xs={12} md={8} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                  <a
                    href={active.file}
                    download
                    style={{
                      background: active.accent,
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "10px 24px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    <AiOutlineDownload size={18} /> {t("resume_download")}
                  </a>

                  <a
                    href={active.file}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "transparent",
                      color: active.accent,
                      border: `1.5px solid ${active.accent}`,
                      borderRadius: "8px",
                      padding: "10px 24px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${active.accent}18`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <FiExternalLink size={16} /> Ouvrir
                  </a>

                  <button
                    onClick={() => setOpen(null)}
                    style={{
                      background: "transparent",
                      color: "var(--text-muted)",
                      border: "1px solid var(--card-border)",
                      borderRadius: "8px",
                      padding: "10px 16px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                    }}
                  >
                    <AiOutlineClose /> {t("resume_close")}
                  </button>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </motion.section>
  );
}

export default ResumeNew;
