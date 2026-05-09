import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMicrochip } from "react-icons/fa";
import { BsGrid3X3Gap } from "react-icons/bs";
import vsCode  from "../../Assets/TechIcons/vscode.svg";
import git     from "../../Assets/TechIcons/Git.svg";
import docker  from "../../Assets/TechIcons/Docker.svg";
import postman from "../../Assets/TechIcons/Postman.svg";
import matlab   from "../../Assets/TechIcons/matlab.svg";
import simulink from "../../Assets/TechIcons/simulink.png"; // ← PNG
import proteus  from "../../Assets/TechIcons/proteus.png";  // ← PNG
import github from "../../Assets/TechIcons/github.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* ── IDEs & Éditeurs ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={github} alt="github" className="tech-icon-images" />
        <div className="tech-icons-text">Github</div>
      </Col>

      {/* ── Versioning & DevOps ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* ── Simulation & Électronique ── */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={matlab} alt="MATLAB" className="tech-icon-images" />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={simulink} alt="Simulink" className="tech-icon-images" />
        <div className="tech-icons-text">Simulink</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={proteus} alt="Proteus" className="tech-icon-images" />
        <div className="tech-icons-text">Proteus</div>
      </Col>

    </Row>
  );
}

export default Toolstack;