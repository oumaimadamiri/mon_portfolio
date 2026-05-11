import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLang } from "../context/LanguageContext";

const CONTENT = {
  fr: {
    heading1: "🔧 En cours de",
    heading2: "Construction",
    description:
      "Simulation physique temps réel d'un turbo-alternateur industriel avec interface SCADA interactive — modèle thermodynamique IAPWS-IF97, calibration Ridge Regression, conforme ISA-101.",
    status: "En cours · Fév 2026 → aujourd'hui",
  },
  en: {
    heading1: "🔧 Currently",
    heading2: "Building",
    description:
      "Real-time physical simulation of an industrial turbo-alternator with interactive SCADA interface — IAPWS-IF97 thermodynamic model, Ridge Regression calibration, ISA-101 compliant.",
    status: "In progress · Feb 2026 → present",
  },
};

const TECHS = [
  "FastAPI",
  "WebSocket",
  "Dash · Plotly",
  "Redis",
  "SQLite",
  "IAPWS-IF97",
  "Ridge Regression",
];

function Github() {
  const { lang } = useLang();
  const c = CONTENT[lang];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {c.heading1}{" "}
        <strong className="purple">{c.heading2}</strong>
      </h1>

      <Col md={8}>
        <div
          style={{
            background: "rgba(200, 137, 230, 0.08)",
            border: "1.5px solid rgba(200, 137, 230, 0.4)",
            borderRadius: "12px",
            padding: "28px 32px",
            color: "white",
            textAlign: "left",
          }}
        >
          {/* Titre du projet */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "1.5rem" }}>🏭</span>
            <div>
              <h4 style={{ margin: 0, color: "#c770f0", fontWeight: 600 }}>
                Digital Twin — Turbo-Alternator
              </h4>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
                Research Center ManufacturiX · OCP SA · El Jadida
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "18px" }}>
            {c.description}
          </p>

          {/* Badges tech */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {TECHS.map((tech) => (
              <span
                key={tech}
                style={{
                  background: "rgba(200, 137, 230, 0.15)",
                  border: "1px solid rgba(200, 137, 230, 0.35)",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  fontSize: "0.8rem",
                  color: "#c770f0",
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Statut */}
          <div
            style={{
              marginTop: "18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
                animation: "pulse 2s infinite",
              }}
            />
            {c.status}
          </div>
        </div>
      </Col>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Row>
  );
}

export default Github;