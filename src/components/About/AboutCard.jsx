import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour ! Je suis{" "}
            <span className="purple">Oumaima Damiri</span>, ingénieure
            originaire d'<span className="purple">El Jadida, Maroc</span>.
            <br />
            <br />
            Mon parcours hybride —{" "}
            <span className="purple">DUT Génie Électrique</span> puis{" "}
            <span className="purple">
              Master Ingénierie des Systèmes Intelligents
            </span>{" "}
            (option Génie Logiciel) à la Faculté des Sciences Ain Chock,
            Casablanca — m'a permis de développer une double expertise rare :{" "}
            <span className="purple">systèmes embarqués & IoT</span> d'un
            côté, <span className="purple">développement Full-Stack</span>{" "}
            Web & Mobile de l'autre.
            <br />
            <br />
            Je suis à l'aise aussi bien avec un microcontrôleur{" "}
            <span className="purple">ESP32</span> qu'avec une application{" "}
            <span className="purple">React Native</span> ou un backend{" "}
            <span className="purple">Spring Boot / FastAPI</span> — du capteur jusqu'à l'interface utilisateur.
            <br />
            <br />
            En dehors du code, ce qui me passionne :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Veille technologique IoT & IA 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Projets électroniques DIY & prototypage ⚡
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploration de nouvelles architectures logicielles 🏗️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyages & découverte de nouvelles cultures 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Du microcontrôleur à l'application — relier le monde physique au monde
            logiciel."
          </p>
          <footer className="blockquote-footer">Oumaima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;