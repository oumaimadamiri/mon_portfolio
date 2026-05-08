// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { SiNextdotjs, SiSolidity } from "react-icons/si";
// import { FaRust } from "react-icons/fa";
// import C from "../../Assets/TechIcons/C++.svg";
// import Javascript from "../../Assets/TechIcons/Javascript.svg";
// import Node from "../../Assets/TechIcons/Node.svg";
// import ReactIcon from "../../Assets/TechIcons/React.svg";
// import Java from "../../Assets/TechIcons/Java.svg";
// import Python from "../../Assets/TechIcons/Python.svg";
// import Typescript from "../../Assets/TechIcons/Typescript.svg";
// import Git from "../../Assets/TechIcons/Git.svg";
// import Firebase from "../../Assets/TechIcons/Firebase.svg";
// import Redis from "../../Assets/TechIcons/Redis.svg";
// import Docker from "../../Assets/TechIcons/Docker.svg";
// import Mongo from "../../Assets/TechIcons/Mongo.svg";
// import SQL from "../../Assets/TechIcons/SQL.svg";
// import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
// import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
// import Postman from "../../Assets/TechIcons/Postman.svg";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={C} alt="C++" />
//         <div className="tech-icons-text">C++</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Javascript} alt="javascript" />
//         <div className="tech-icons-text">Javascript</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Typescript} alt="typescript" />
//         <div className="tech-icons-text">Typescript</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Node} alt="node" />
//         <div className="tech-icons-text">Node.Js</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={ReactIcon} alt="react" />
//         <div className="tech-icons-text">React.Js</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Mongo} alt="mongoDb" />
//         <div className="tech-icons-text">Mongo DB</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Git} alt="git" />
//         <div className="tech-icons-text">Git</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Redis} alt="redis" />
//         <div className="tech-icons-text">Redis</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Docker} alt="docker" />
//         <div className="tech-icons-text">Docker</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Kubernates} alt="kubernetes" />
//         <div className="tech-icons-text">Kubernetes</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={SQL} alt="SQL" />
//         <div className="tech-icons-text">Postgresql</div>
//       </Col>

//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Python} alt="Python" />
//         <div className="tech-icons-text">Python</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Java} alt="haskell" />
//         <div className="tech-icons-text">Java</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Tailwind} alt="tailwind" />
//         <div className="tech-icons-text">Tailwind CSS</div>
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <img src={Postman} alt="Postman" />
//         <div className="tech-icons-text">Postman</div>
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;


import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRaspberrypi,
  SiArduino,
  SiEspressif,
  SiFastapi,
  SiDjango,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { BsWifi } from "react-icons/bs";
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

function Techstack() {
  return (
    <>
      {/* ── Section Software & Web ── */}
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
        🖥️ <span className="purple">Software</span> & Web
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
          <Col xs={4} md={2} className="tech-icons" key={i}>
            <img src={tech.src} alt={tech.alt} />
            <div className="tech-icons-text">{tech.label}</div>
          </Col>
        ))}

        {/* FastAPI & Django via react-icons */}
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi size={50} color="#05998b" />
          <div className="tech-icons-text">FastAPI</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango size={50} color="#092e20" />
          <div className="tech-icons-text">Django</div>
        </Col>
      </Row>

      {/* ── Section IoT & Embedded ── */}
      <h2 style={{ color: "white", textAlign: "center", margin: "20px 0" }}>
        🔌 <span className="purple">IoT</span> & Embedded
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={C} alt="C/C++" />
          <div className="tech-icons-text">C / C++</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiEspressif size={50} color="#e7352c" />
          <div className="tech-icons-text">ESP32</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRaspberrypi size={50} color="#c51a4a" />
          <div className="tech-icons-text">Raspberry Pi</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiArduino size={50} color="#00979d" />
          <div className="tech-icons-text">Arduino</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsWifi size={50} color="#c770f0" />
          <div className="tech-icons-text">MQTT</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaMicrochip size={50} color="#c770f0" />
          <div className="tech-icons-text">Modbus / I2C</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaMicrochip size={50} color="#aaa" />
          <div className="tech-icons-text">RFID / NFC</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;