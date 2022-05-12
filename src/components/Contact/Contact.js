import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//style
import "./Contact.scss";

const Contact = () => {
  return (
    <Container className="Contact" id="Contact">
      <Row className="gy-3">
        <Col md={1} xs={12} className="pt-5 Contact_upText">
          <h1>Say - </h1>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          md={11}
          xs={12}
          className="Contact_downText"
        >
          <h1>Hello</h1>
        </Col>
        <Col md={{ span: 7, offset: 5 }} xs={12}>
          <Container className="Contact_workhour">
            <h3 className="my-4">
              <span>-</span> Let's train togther
            </h3>
            <p>Work Hours : Tues to Fri from 5 pm to 7 pm</p>
            <p>Park Slop Blink Fitness, Brooklyn, New York</p>
          </Container>
        </Col>
        <Col md={{ span: 7, offset: 5 }} xs={12}>
          <Container className="pb-3 Contact_workhour">
            <h3 className="my-4">
              <span>-</span> Let's have a chat
            </h3>
            <a
              href="mailto:qisam1989@gmail.com?subject=personal_training"
              target="_blank"
              rel="noreferrer"
            >
              <p>qisam1989@gmail.com</p>
            </a>
          </Container>
        </Col>
        <Col md={{ span: 7, offset: 5 }} xs={12}>
          <Container className=" Contact_workhour">
            <h3 className="my-4">
              <span>-</span> Let's have a Connect
            </h3>
            <Container className="pb-4 d-flex justify-content-evenly AboutMe_btn">
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
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
