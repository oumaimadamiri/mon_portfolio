import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home.png";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { useLang } from "../context/LanguageContext";
import { PHONE, EMAIL, SOCIAL } from "../../constants";
import SEO from "../SEO";
import { fadeUp, useMotionSafe } from "../motionPresets";

function Home() {
  const { t } = useLang();
  const safe = useMotionSafe();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <SEO path="/" />
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                {...safe(fadeUp(0))}
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                {t("home_greeting")}{" "}
                <span className="wave" role="img" aria-label={t("hand_wave_aria")}>
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1 {...safe(fadeUp(0.1))} className="heading-name">
                {t("home_iam")}
                <strong className="main-name"> Oumaima DAMIRI</strong>
              </motion.h1>

              <motion.p {...safe(fadeUp(0.15))} className="hero-tagline">
                <span className="hero-pill purple-pill">{t("hero_pill_software")}</span>
                <motion.span
                  className="hero-bridge"
                  animate={{ x: [0, 6, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  ↔
                </motion.span>
                <span className="hero-pill blue-pill">{t("hero_pill_iot")}</span>
              </motion.p>

              <motion.p
                className="hero-signature"
                initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
              >
                {t("hero_signature")}
              </motion.p>

              <motion.div {...safe(fadeUp(0.2))} style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </motion.div>

              <motion.div {...safe(fadeUp(0.28))} className="hero-cta-group">
                <Link to="/project" className="hero-cta hero-cta-primary">
                  {t("home_cta_projects")}
                </Link>
                <Link to="/resume" className="hero-cta hero-cta-secondary">
                  {t("home_cta_resume")}
                </Link>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                {...safe(fadeUp(0.3))}
                src={homeLogo}
                alt={t("home_image_alt")}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
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
    </motion.main>
  );
}

export default Home;
