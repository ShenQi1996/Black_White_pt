import React from "react";
import profile from "../../images/pro1.jpg";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//style
import "./AboutMe.scss";

const AboutMe = () => {
  AOS.init();
  return (
    <Container className="my-5 AboutMe">
      <Row className="gy-2">
        <Col
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          lg={{ span: 8, offset: 1 }}
          md={12}
          xs={12}
        >
          <h1>About</h1>
        </Col>
        <Col xs={12} className="text-end AboutMe_small">
          <h1>- Me</h1>
        </Col>
        <Col
          lg={{ span: 5, offset: 3 }}
          md={{ span: 7, offset: 2 }}
          xs={12}
          className="d-flex flex-column p-4"
        >
          <img src={profile} alt="Sam Qi" />
        </Col>
        <Col md={3} className="AboutMe_big">
          <span>- Me</span>
        </Col>
        <Col lg={7} md={{ span: 9, offset: 2 }} xs={12}>
          <Container className="AboutMe_info" id="AboutMe">
            <h2>Shen(Sam) Qi</h2>
            <h5>Certified Personal Trainer</h5>
            <p>
              Hi, My name is Sam Qi, a certified personal trainer with Blink
              Fitness at Park Slope. I am here to help you learn to enjoy your
              gym time and progress toward your goals.
            </p>
            <p>
              To help you get on the right track with your fitness journey, I am
              here to offer you a free personal training start-up assessment
              session.
            </p>
          </Container>
        </Col>
        <Col md={{ span: 6, offset: 3 }} xs={12}>
          <Container className="my-5 d-flex justify-content-evenly AboutMe_btn">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shenqi1993/"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
                alt="Linkedin"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/sammysocial_qi/?hl=en"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                alt="IG"
              />
            </a>
            <a
              target="_blank"
              href="https://calendly.com/qisam/meetingwithsam"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/calendar.png"
                alt="Calendly"
              />
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;