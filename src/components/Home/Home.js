import React from "react";

//BootStrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./Home.scss";

const Home = () => {
  return (
    <Container className="home" id="home">
      <Row className="gy-5 mt-3 my-5">
        <Col xs={12} className="mb-5 home_topText">
          <h1>
            Some people want it to happen, some wish it would happen, others
            make it happen
          </h1>
        </Col>
        <Col className="d-flex flex-column ">
          <Container className="home_midText mt-5">
            <p>
              When it comes to workouts.
              <span> Don't work harder, work smarter.</span> Check out how I do
              it.
            </p>
          </Container>
          <Container className="my-3 d-flex justify-content-center">
            <a
              className="btn btn-outline-secondary home_downBtn"
              href="#"
              role="button"
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/down--v1.png" />
            </a>
          </Container>
        </Col>
      </Row>
      <Row className="gy-3 my-3">
        <Col xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Identify our Goal</h3>
            <p className="py-2">
              We give our partners the opportunity to be part of the design
              process (a rarely seen opportunity in the industry).
            </p>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Talk Strategy</h3>
            <p className="py-2">
              We like to explore uncommon ideas, with a no right or wrong
              mentalit
            </p>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Correct our Forms</h3>
            <p className="py-2">
              We validate ideas before we commit to them, thus saving money and
              avoiding surprises.
            </p>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Get Results</h3>
            <p className="py-2">
              We want to remove ambiguity from the design process to create
              better results at the end of the project.
            </p>
          </Container>
        </Col>
        <Col>
          <Container className="my-3 d-flex flex-column justify-content-center home_GITBtn">
            <a className="btn btn-outline-secondary" href="#" role="button">
              Get in Touch
            </a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
