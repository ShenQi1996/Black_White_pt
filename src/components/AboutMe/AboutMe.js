import React from "react";
import profile from "../../images/pro1.jpg";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

//style
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <Container className="py-5 AboutMe">
      <Row className="gy-2">
        <Col xs={12}>
          <h1>About</h1>
        </Col>
        <Col xs={12} className="text-end">
          <h1>- Me</h1>
        </Col>
        <Col xs={12} className="d-flex flex-column p-4">
          <img src={profile} alt="Sam Qi" />
        </Col>
        <Col xs={12}>
          <Container className="AboutMe_info">
            <h2>Shen(Sam) Qi</h2>
            <h5>Certified Personal Trainer</h5>
            <p>
              A strategic Lead Visual Designer with 10+ years of experience in
              digital, creative and design agencies across the United States,
              Australia and Mexico.{" "}
            </p>
            <p>
              Oliver has lead teams to the highest standards working with a
              range of high-profile companies across multiple industries
            </p>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="my-5 d-flex justify-content-evenly AboutMe_btn">
            <a target="_blank" href="/">
              <img
                src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
                alt="Linkedin"
              />
            </a>
            <a target="_blank" href="/">
              <img
                src="https://img.icons8.com/dotty/80/ffffff/github.png"
                alt="Github"
              />
            </a>
            <a target="_blank" href="/">
              <img
                src="https://img.icons8.com/pastel-glyph/64/ffffff/website--v1.png"
                alt="Personal Website"
              />
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
