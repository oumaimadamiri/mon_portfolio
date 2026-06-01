import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiRaspberrypi,
  SiArduino,
  SiEspressif,
  SiFastapi,
  SiDjango,
} from "react-icons/si";
import C          from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node       from "../../Assets/TechIcons/Node.svg";
import ReactIcon  from "../../Assets/TechIcons/React.svg";
import Java       from "../../Assets/TechIcons/Java.svg";
import Python     from "../../Assets/TechIcons/Python.svg";
import Git        from "../../Assets/TechIcons/Git.svg";
import Redis      from "../../Assets/TechIcons/Redis.svg";
import Docker     from "../../Assets/TechIcons/Docker.svg";
import SQL        from "../../Assets/TechIcons/SQL.svg";
import Tailwind   from "../../Assets/TechIcons/Tailwind.svg";
import Postman    from "../../Assets/TechIcons/Postman.svg";
import modbus from "../../Assets/TechIcons/modbus.png";
import rfid    from "../../Assets/TechIcons/rfid.svg";
import NFC from "../../Assets/TechIcons/NFC.svg";
import mqtt from "../../Assets/TechIcons/mqtt.png";
import { useLang } from "../context/LanguageContext";

function Techstack() {
  const { t } = useLang();

  return (
    <>
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
        🖥️ <span className="purple">{t("techstack_software_title")}</span>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        {[
          { src: ReactIcon,  alt: "React",        label: "React.js"    },
          { src: ReactIcon,  alt: "React Native", label: "React Native"},
          { src: Javascript, alt: "JavaScript",   label: "JavaScript"  },
          { src: Node,       alt: "Node.js",      label: "Node.js"     },
          { src: Java,       alt: "Java",         label: "Spring Boot" },
          { src: Python,     alt: "Python",       label: "Python"      },
          { src: Tailwind,   alt: "Tailwind",     label: "Tailwind CSS"},
          { src: SQL,        alt: "SQL",          label: "PostgreSQL"  },
          { src: Redis,      alt: "Redis",        label: "Redis"       },
          { src: Docker,     alt: "Docker",       label: "Docker"      },
          { src: Git,        alt: "Git",          label: "Git"         },
          { src: Postman,    alt: "Postman",      label: "Postman"     },
        ].map((tech, i) => (
          <Col xs={4} md={2} key={i}>
            <motion.div
              className="tech-icons"
              whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
            >
              <img src={tech.src} alt={tech.alt} />
              <div className="tech-icons-text">{tech.label}</div>
            </motion.div>
          </Col>
        ))}

        <Col xs={4} md={2}>
          <motion.div className="tech-icons" whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}>
            <SiFastapi size={25} color="#05998b" />
            <div className="tech-icons-text">FastAPI</div>
          </motion.div>
        </Col>
        <Col xs={4} md={2}>
          <motion.div className="tech-icons" whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}>
            <SiDjango size={25} color="#092e20" />
            <div className="tech-icons-text">Django</div>
          </motion.div>
        </Col>
      </Row>

      <h2 style={{ color: "white", textAlign: "center", margin: "20px 0" }}>
        🔌 <span className="purple">{t("techstack_iot_title")}</span>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {[
          { content: <img src={C} alt="C/C++" />, label: "C / C++" },
          { content: <SiEspressif size={25} color="#e7352c" />, label: "ESP32" },
          { content: <SiRaspberrypi size={25} color="#c51a4a" />, label: "Raspberry Pi" },
          { content: <SiArduino size={25} color="#00979d" />, label: "Arduino" },
          { content: <img src={mqtt} alt="mqtt" className="tech-icon-images" />, label: "MQTT" },
          { content: <img src={modbus} alt="modbus" className="tech-icon-images" />, label: "Modbus" },
          { content: <img src={rfid} alt="rfid" className="tech-icon-images" />, label: "RFID" },
          { content: <img src={NFC} alt="NFC" className="tech-icon-images" />, label: "NFC" },
        ].map((item, i) => (
          <Col xs={4} md={2} key={i}>
            <motion.div
              className="tech-icons"
              whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 300 } }}
            >
              {item.content}
              <div className="tech-icons-text">{item.label}</div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Techstack;
