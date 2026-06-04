import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useLang } from "./context/LanguageContext";

const FlagFR = () => (
  <svg width="20" height="14" viewBox="0 0 3 2" aria-hidden="true" style={{ borderRadius: "2px", display: "block" }}>
    <rect width="1" height="2" fill="#0055A4" />
    <rect x="1" width="1" height="2" fill="#FFFFFF" />
    <rect x="2" width="1" height="2" fill="#EF4135" />
  </svg>
);

const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 60 30" aria-hidden="true" style={{ borderRadius: "2px", display: "block" }}>
    <clipPath id="ukclip"><rect width="60" height="30" /></clipPath>
    <g clipPath="url(#ukclip)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30" stroke="#C8102E" strokeWidth="2" clipPath="polygon(0 0, 30 15, 60 0)" />
      <path d="M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, lang, toggleLang } = useLang();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex"
          style={{
            color: "#c770f0",
            fontFamily: "'Cookie', cursive",
            fontSize: "2.2em",
            fontWeight: "400",
          }}
        >
          Od.
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("nav_home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("nav_about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
                {" "}{t("nav_projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("nav_resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> {t("nav_contact")}
              </Nav.Link>
            </Nav.Item>

          </Nav>

          <div style={{ display: "flex", alignItems: "center", marginLeft: "12px" }}>
            <button
              onClick={toggleLang}
              title={t("lang_toggle_title")}
              aria-label={t("lang_toggle_title")}
              style={{
                background: "rgba(199, 112, 240, 0.12)",
                border: "1px solid rgba(199, 112, 240, 0.4)",
                borderRadius: "20px",
                color: "#c770f0",
                padding: "4px 14px",
                fontSize: "0.82rem",
                fontWeight: "600",
                cursor: "pointer",
                letterSpacing: "0.06em",
                transition: "background 0.3s, transform 0.2s",
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(199, 112, 240, 0.25)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(199, 112, 240, 0.12)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {lang === "fr" ? <><FlagGB /> EN</> : <><FlagFR /> FR</>}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
