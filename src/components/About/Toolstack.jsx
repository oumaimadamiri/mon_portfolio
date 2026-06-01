import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
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
      {[
        { src: vsCode,   alt: "VS Code",  label: "VS Code"  },
        { src: github,   alt: "GitHub",   label: "GitHub"   },
        { src: git,      alt: "Git",      label: "Git"      },
        { src: docker,   alt: "Docker",   label: "Docker"   },
        { src: postman,  alt: "Postman",  label: "Postman"  },
        { src: matlab,   alt: "MATLAB",   label: "MATLAB"   },
        { src: simulink, alt: "Simulink", label: "Simulink" },
        { src: proteus,  alt: "Proteus",  label: "Proteus"  },
      ].map((tool, i) => (
        <Col xs={4} md={2} key={i}>
          <motion.div
            className="tech-icons"
            whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
          >
            <img src={tool.src} alt={tool.alt} className="tech-icon-images" />
            <div className="tech-icons-text">{tool.label}</div>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;