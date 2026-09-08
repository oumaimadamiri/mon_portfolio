import { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import { PHONE, EMAIL, SOCIAL } from "../../constants";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const { t } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => setStatus("error"));
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4 }}
    >
      <Container fluid className="project-section">
        <Container style={{ position: "relative", zIndex: 1 }}>
          <h1 className="project-heading">
            {t("contact_title1")} <strong className="purple">{t("contact_title2")}</strong>
          </h1>
          <p style={{ color: "var(--text-muted)" }}>{t("contact_subtitle")}</p>

          <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
            {/* Info panel */}
            <Col md={4} className="contact-info" style={{ color: "var(--text-primary)", marginBottom: "30px" }}>
              <div className="contact-info-item" style={{ marginBottom: "20px" }}>
                <FaPhoneAlt className="purple" style={{ marginRight: "10px" }} />
                <strong>{t("contact_phone")}</strong>
                <p style={{ marginLeft: "24px", marginBottom: 0 }}>{PHONE}</p>
              </div>
              <div className="contact-info-item" style={{ marginBottom: "20px" }}>
                <AiOutlineMail className="purple" style={{ marginRight: "10px" }} />
                <strong>{t("contact_email_label")}</strong>
                <p style={{ marginLeft: "24px", marginBottom: 0 }}>{EMAIL}</p>
              </div>
              <div className="contact-info-item">
                <FaMapMarkerAlt className="purple" style={{ marginRight: "10px" }} />
                <strong>{t("contact_location")}</strong>
                <p style={{ marginLeft: "24px", marginBottom: 0 }}>{t("contact_location_value")}</p>
              </div>
            </Col>

            {/* Form */}
            <Col md={6}>
              {status === "success" && (
                <Alert variant="success" onClose={() => setStatus("idle")} dismissible>
                  {t("contact_success")}
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger" onClose={() => setStatus("idle")} dismissible>
                  {t("contact_error")}
                </Alert>
              )}

              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "var(--text-primary)" }}>{t("contact_name")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="from_name"
                    placeholder={t("contact_ph_name")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "var(--text-primary)" }}>{t("contact_email")}</Form.Label>
                  <Form.Control
                    type="email"
                    name="from_email"
                    placeholder={t("contact_ph_email")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "var(--text-primary)" }}>{t("contact_subject")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder={t("contact_ph_subject")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "var(--text-primary)" }}>{t("contact_message")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder={t("contact_ph_message")}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? t("contact_sending") : t("contact_send")}
                </Button>
              </Form>
            </Col>
          </Row>

          {/* Social links — fin de page */}
          <Row style={{ paddingTop: "50px", paddingBottom: "10px" }}>
            <Col md={12} className="home-about-social">
              <h1>{t("home_findme")}</h1>
              <p>
                {t("home_contact_invite")}{" "}
                <span className="purple">{t("home_contact_invite_purple")}</span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="Phone"
                  >
                    <FaPhoneAlt />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.section>
  );
}

export default Contact;
