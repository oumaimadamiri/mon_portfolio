import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// ➡️  PHOTO : dépose ton image dans src/Assets/ sous le nom "profile.jpg"
//   (format carré recommandé, ≥ 500×500 px, JPG ou PNG)
//   puis remplace la ligne ci-dessous par :
//   import myImg from "../../Assets/profile.jpg";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useLang } from "../context/LanguageContext";

function Home2() {
  const { t, lang } = useLang();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home2_title1")}{" "}
              <span className="purple">{t("home2_title2")}</span>
            </h1>
            <p className="home-about-body">
              {t("home2_p1")}
              <br />
              <br />
              {t("home2_p2")}
              <br />
              <br />
              <i>
                <b className="purple">{t("home2_highlights")} </b>
              </i>
              {t("home2_p3")}
              <br />
              <br />
              {t("home2_interests")}
              <br />
              <b className="purple"> {t("home2_i1")}</b>{", "}
              <i>
                <b className="purple">{t("home2_i2")}</b>
                {" "}{lang === "en" ? "and" : "et"}{" "}
                <b className="purple">{t("home2_i3")}</b>.
              </i>
              <br />
              {t("home2_open")}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt glareEnable={false} tiltMaxAngleX={8} tiltMaxAngleY={8}>
              <div className="profile-ring-wrapper">
                <img
                  src={myImg}
                  className="img-fluid profile-photo"
                  alt={t("home2_avatar_alt")}
                />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
