import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { useLang } from "../context/LanguageContext";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const { t } = useLang();
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

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
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1 className="project-heading">
          {t("contact_title1")} <strong className="purple">{t("contact_title2")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("contact_subtitle")}</p>

        <Row className="justify-content-center" style={{ paddingBottom: "30px" }}>
          {/* Info panel */}
          <Col md={4} className="contact-info" style={{ color: "white", marginBottom: "30px" }}>
            <div className="contact-info-item" style={{ marginBottom: "20px" }}>
              <FaPhoneAlt className="purple" style={{ marginRight: "10px" }} />
              <strong>{t("contact_phone")}</strong>
              <p style={{ marginLeft: "24px", marginBottom: 0 }}>+212 632 818 023</p>
            </div>
            <div className="contact-info-item" style={{ marginBottom: "20px" }}>
              <AiOutlineMail className="purple" style={{ marginRight: "10px" }} />
              <strong>{t("contact_email_label")}</strong>
              <p style={{ marginLeft: "24px", marginBottom: 0 }}>oumaimadamiri04@gmail.com</p>
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
                <Form.Label style={{ color: "white" }}>{t("contact_name")}</Form.Label>
                <Form.Control
                  type="text"
                  name="from_name"
                  placeholder={t("contact_ph_name")}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>{t("contact_email")}</Form.Label>
                <Form.Control
                  type="email"
                  name="from_email"
                  placeholder={t("contact_ph_email")}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>{t("contact_subject")}</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder={t("contact_ph_subject")}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>{t("contact_message")}</Form.Label>
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
      </Container>
    </Container>
  );
}

export default Contact;
