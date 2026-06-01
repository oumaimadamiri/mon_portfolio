import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const TECHS = [
  "FastAPI",
  "WebSocket",
  "Dash · Plotly",
  "Redis",
  "SQLite",
  "IAPWS-IF97",
  "Ridge Regression",
];

function CurrentlyBuilding() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {t("building_heading1")}{" "}
        <strong className="purple">{t("building_heading2")}</strong>
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
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "1.5rem" }}>🏭</span>
            <div>
              <h4 style={{ margin: 0, color: "#c770f0", fontWeight: 600 }}>
                {t("building_project_title")}
              </h4>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>
                {t("building_project_subtitle")}
              </span>
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", marginBottom: "18px" }}>
            {t("building_description")}
          </p>

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
            <motion.span
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
              }}
              animate={reduce ? {} : { opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            {t("building_status")}
          </div>
        </div>
      </Col>

    </Row>
  );
}

export default CurrentlyBuilding;
