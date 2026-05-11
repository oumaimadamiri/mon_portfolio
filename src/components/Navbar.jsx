import React, { useState } from "react";
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

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, lang, toggleLang } = useLang();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

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

            {/* ← Contact maintenant une vraie page interne */}
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" onClick={() => updateExpanded(false)}>
                <AiOutlineMail style={{ marginBottom: "2px" }} /> {t("nav_contact")}
              </Nav.Link>
            </Nav.Item>

          </Nav>

          {/* ── Bouton switch langue FR / EN ── */}
          <div style={{ display: "flex", alignItems: "center", marginLeft: "12px" }}>
            <button
              onClick={toggleLang}
              title={lang === "fr" ? "Switch to English" : "Passer en français"}
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
              {lang === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;