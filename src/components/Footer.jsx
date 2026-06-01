import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { useLang } from "./context/LanguageContext";
import { PHONE, EMAIL, SOCIAL } from "../constants";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLang();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("footer_designed")}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>{t("footer_copyright")} © {year} OD</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href={SOCIAL.github}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href={SOCIAL.linkedin}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("aria_send_email")}
              >
                <AiOutlineMail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                style={{ color: "white" }}
                title={PHONE}
                aria-label={t("aria_call_me")}
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
