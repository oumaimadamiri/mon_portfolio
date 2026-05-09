import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdfDev from "../../Assets/Damiri_Oumaima_DEV.pdf";
import pdfIot from "../../Assets/Damiri_Oumaima_IOT.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
  const [open, setOpen] = useState(null); // "dev" | "iot" | null
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));
  const active = CVS.find((c) => c.id === open);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        {/* minHeight évite que le footer remonte quand aucun CV n'est ouvert */}
        <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column" }}>

        {/* Titre */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <h1 className="project-heading">
            Mes <strong className="purple">CVs</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", textAlign: "center" }}>
            Choisissez un profil pour afficher le CV correspondant.
          </p>
        </Row>

        {/* Deux cartes boutons côte à côte */}
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
                  border: `1.5px solid ${isOpen ? cv.accent : "rgba(255,255,255,0.12)"}`,
                  borderRadius: "14px",
                  padding: "20px 24px",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem" }}>{cv.emoji}</div>
                  <h5 style={{ color: isOpen ? cv.accent : "white", margin: "6px 0 0", fontWeight: 600, transition: "color 0.25s" }}>
                    {cv.label}
                  </h5>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                  {cv.techs.map((t) => (
                    <span key={t} style={{
                      background: `${cv.accent}18`,
                      border: `1px solid ${cv.accent}44`,
                      borderRadius: "5px",
                      padding: "2px 9px",
                      fontSize: "0.73rem",
                      color: cv.accent,
                      fontFamily: "monospace",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Flèche indicateur */}
                <div style={{
                  color: isOpen ? cv.accent : "rgba(255,255,255,0.4)",
                  fontSize: "1.5rem",
                  transition: "transform 0.3s",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}>
                  <MdExpandMore />
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Zone dépliable */}
        {active && (
          <Row style={{ justifyContent: "center", animation: "fadeSlideIn 0.3s ease" }}>
            <Col xs={12} md={8} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>

              {/* Boutons actions */}
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
                  <AiOutlineDownload /> Download CV
                </Button>

                <Button
                  onClick={() => setOpen(null)}
                  variant="outline-light"
                  style={{ borderRadius: "8px", padding: "8px 16px", display: "flex", alignItems: "center", gap: "6px", opacity: 0.6 }}
                >
                  <AiOutlineClose /> Fermer
                </Button>
              </div>

              {/* Aperçu PDF */}
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
                  <Page pageNumber={1} scale={width <= 768 ? 0.5 : 1.2} />
                </Document>
              </div>

              {/* Bouton download bas */}
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
                  marginBottom: "30px",
                }}
              >
                <AiOutlineDownload /> Download CV
              </Button>
            </Col>
          </Row>
        )}

        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(-12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        </div> {/* fin minHeight */}
      </Container>
    </div>
  );
}

export default ResumeNew;