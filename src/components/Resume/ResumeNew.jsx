import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useLang } from "../context/LanguageContext";
import SEO from "../SEO";

import pdfDev from "../../Assets/Damiri_Oumaima_DEV.pdf";
import pdfIot from "../../Assets/Damiri_Oumaima_IOT.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const CVS = [
  {
    id: "dev",
    label: "Full-Stack Development",
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
    label: "IoT & Embedded Systems",
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
  const [width] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));
  const active = CVS.find((c) => c.id === open);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <SEO path="/resume" />
      <Container fluid className="resume-section">
        <Particle />
        <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column" }}>

          <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            <h1 className="project-heading">
              {t("resume_title1")}{" "}
              <strong className="purple">{t("resume_title2")}</strong>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
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
                  style={{
                    cursor: "pointer",
                    background: isOpen ? `${cv.accent}22` : "rgba(255,255,255,0.04)",
                    border: `1.5px solid ${isOpen ? cv.accent : "rgba(255,255,255,0.1)"}`,
                    borderRadius: "16px",
                    padding: "24px",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: "2rem", marginBottom: "8px" }}>{cv.emoji}</div>
                      <h4 style={{ color: isOpen ? cv.accent : "white", margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>
                        {cv.label}
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
            <Row style={{ justifyContent: "center", animation: "fadeSlideIn 0.3s ease" }}>
              <Col xs={12} md={8} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                  <Button
                    href={active.file}
                    target="_blank"
                    style={{
                      background: active.accent,
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 22px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 500,
                    }}
                  >
                    <AiOutlineDownload /> {t("resume_download")}
                  </Button>

                  <Button
                    onClick={() => setOpen(null)}
                    variant="outline-light"
                    style={{ borderRadius: "8px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "6px", opacity: 0.6 }}
                  >
                    <AiOutlineClose /> {t("resume_close")}
                  </Button>
                </div>

                <div style={{
                  border: `1.5px solid ${active.accent}55`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "16px 0",
                  background: "rgba(255,255,255,0.03)",
                }}>
                  <Document file={active.file} className="d-flex justify-content-center">
                    <Page pageNumber={1} scale={width <= 768 ? 0.6 : 1.2} />
                  </Document>
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </motion.main>
  );
}

export default ResumeNew;
