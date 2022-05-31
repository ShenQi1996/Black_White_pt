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
      <Col md={12} xs={12} className="my-5 home_topText">
        <h1>
          Some people want it to happen, some wish it would happen, others make
          it happen
        </h1>
      </Col>
      <Row>
        <Col xl={10} md={8} className="d-flex flex-column mt-5">
          <Container className="home_midText">
            <p>
              When it comes to Web-Development.
              <span> Don't work harder, work smarter.</span> Check out how I do
              it.{" "}
              <a
                href="https://docs.google.com/document/d/1Fc7jn9HGnB6pDHDO0snCIQeUU7JJnMJW/edit?usp=sharing&ouid=117373099643185244319&rtpof=true&sd=true"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.icons8.com/officel/40/ffffff/open-resume.png"
                  alt="resume"
                />
                <span className="home_midText_small">resume</span>
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
        <Col md={9} xs={12}>
          <Container className="home_stepsBox" id="Steps">
            <h3>Information Gathering</h3>
            <p className="py-2">
              I seek to understand your business and unpack the project goals in
              this phase.
            </p>
          </Container>
        </Col>
        <Col md={9} xs={12}>
          <Container className="home_stepsBox">
            <h3>Strategy</h3>
            <p className="py-2">
              Once I understand the project goals. We will work together to
              brainstorm and scope out a plan.
            </p>
          </Container>
        </Col>
        <Col md={9} xs={12}>
          <Container className="home_stepsBox">
            <h3>Design</h3>
            <p className="py-2">
              Using all the data and research to create each visual components.
            </p>
          </Container>
        </Col>
        <Col md={9} xs={12}>
          <Container className="home_stepsBox">
            <h3>Deliver</h3>
            <p className="py-2">
              I will use my developer skills and designer skills to bring the
              project to life.
            </p>
          </Container>
        </Col>
        <Col
          md={{ span: 5, offset: 2 }}
          className="my-5 d-flex flex-column justify-content-center"
        >
          <a
            className="btn btn-outline-secondary home_GITBtn_big"
            href="https://calendly.com/qisam/meetingwithsam"
            rel="noreferrer"
            role="button"
            target="_blank"
          >
            Get in Touch
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
