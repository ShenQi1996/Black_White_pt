import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//image
import ContactPic from "../../images/contact.avif";

//style
import "./Contact.scss";

const Contact = () => {
  return (
    <Container className="Contact">
      <Row className="gy-3">
        <Col
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          md={12}
          xs={12}
          className="pt-5 Contact_upText"
        >
          <h1>Say - </h1>
        </Col>
        <Col
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          md={12}
          xs={12}
          className="Contact_downText"
        >
          <h1>Hello</h1>
        </Col>
        <Row className="align-items-center">
          <Col xl={6} md={6} className="flex-column Contact_img">
            <img src={ContactPic} alt="contact" />
          </Col>
          <Col md={6}>
            <Col xs={12}>
              <Container className="Contact_workhour">
                <h3 className="my-4">
                  <span>-</span> Let's work togther
                </h3>
                <p>Mon to Fri from 10 am to 5 pm</p>
                <p>Brooklyn, New York</p>
              </Container>
            </Col>
            <Col xs={12}>
              <Container className="pb-3 Contact_workhour" id="Contact">
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
            <Col xs={12}>
              <Container className=" Contact_workhour">
                <h3 className="my-4">
                  <span>-</span> Let's connect
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
                    href="https://github.com/ShenQi1996"
                    rel="noreferrer"
                  >
                    <img
                      src="https://img.icons8.com/ios/50/ffffff/github-2.png"
                      alt="Github"
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
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Contact;
