import React from "react";

//BootStrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./Home.scss";

const Home = () => {
  return (
    <Container fluid className="home" id="Home">
      <Col md={12} xs={12} className="mt-5 home_topText">
        <h1>
          Some people want it to happen, some wish it would happen, others make
          it happen
        </h1>
      </Col>
      <Container>
        <Row className="py-5 gy-5">
          <Col md={8} className="d-flex flex-column ">
            <Container className="home_midText my-5">
              <p>
                When it comes to Web-Development.
                <span> Don't work harder, work smarter.</span> Check out how I
                do it.{" "}
                <a
                  href="https://docs.google.com/document/d/1Fc7jn9HGnB6pDHDO0snCIQeUU7JJnMJW/edit?usp=sharing&ouid=117373099643185244319&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/officel/40/ffffff/open-resume.png"
                    alt="resume"
                  />
                </a>
              </p>
            </Container>
            <Container className="my-3 d-flex justify-content-center">
              <a
                className="btn btn-outline-secondary home_downBtn"
                href="#Steps"
                role="button"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/down--v1.png"
                  alt="Show Steps"
                />
              </a>
            </Container>
          </Col>
        </Row>
        <Row className="gy-3 my-3">
          <Col md={8} xs={12}>
            <Container className="home_stepsBox" id="Steps">
              <h3>Information Gathering</h3>
              <p className="py-2">
                I seek to understand your business and unpack the project goals
                in this phase.
              </p>
            </Container>
          </Col>
          <Col md={8} xs={12}>
            <Container className="home_stepsBox">
              <h3>Strategy</h3>
              <p className="py-2">
                Once I understand the business and the project goals. We will
                work together to brainstorm and scope out a plan.
              </p>
            </Container>
          </Col>
          <Col md={8} xs={12}>
            <Container className="home_stepsBox">
              <h3>Design</h3>
              <p className="py-2">
                After we have defined the scope of the work, your product takes
                shape by translating all the data and research into visual
                components.
              </p>
            </Container>
          </Col>
          <Col md={8} xs={12}>
            <Container className="home_stepsBox">
              <h3>Deliver</h3>
              <p className="py-2">
                I will use my developer skills and designer skills to bring the
                project to life.
              </p>
            </Container>
          </Col>
          <Col md={8}>
            <Container className="my-3 d-flex flex-column justify-content-center home_GITBtn">
              <a
                className="btn btn-outline-secondary"
                href="https://calendly.com/qisam/meetingwithsam"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                Get in Touch
              </a>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
