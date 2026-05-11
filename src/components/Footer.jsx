import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { useLang } from "./context/LanguageContext";

// ← Mettez ici votre vrai numéro de téléphone
const PHONE = "+212 632 818 023";
const EMAIL = "oumaimadamiri04@gmail.com";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  return (
    <Container fluid className="footer">
      <Row>
        {/* Mention design */}
        <Col md="4" className="footer-copywright">
          <h3>{t("footer_designed")}</h3>
        </Col>

        {/* Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>{t("footer_copyright")} © {year} OD</h3>
        </Col>

        {/* Icônes sociaux + téléphone */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/oumaimadamiri"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/oumaima-damiri"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* E-mail */}
            <li className="social-icons">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
                style={{ color: "white" }}
                aria-label="Envoyer un e-mail"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                style={{ color: "white" }}
                title={PHONE}
                aria-label="Appeler Oumaima Damiri"
              >
                <FaPhoneAlt />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;