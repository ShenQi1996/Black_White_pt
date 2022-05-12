import React from "react";

//BootStrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./Home.scss";

const Home = () => {
  return (
    <Container className="home" id="Home">
      <Row className="py-5 gy-5">
        <Col md={12} xs={12} className="home_topText">
          <h1>
            Some people want it to happen, some wish it would happen, others
            make it happen
          </h1>
        </Col>
        <Col md={8} className="d-flex flex-column ">
          <Container className="home_midText my-5">
            <p>
              When it comes to workouts.
              <span> Don't work harder, work smarter.</span> Check out how I do
              it.
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
            <h3>Let's Identify our Goals</h3>
            <p className="py-2">
              Setting goals gives you vision and motivation in life. They help
              you organize your time and resources to make the most out of your
              life.
            </p>
          </Container>
        </Col>
        <Col md={8} xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Talk Strategy</h3>
            <p className="py-2">
              After identifying what aspects of life you want to set goals for,
              you need to establish a time frame that works with each goal.
            </p>
          </Container>
        </Col>
        <Col md={8} xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Correct our Forms</h3>
            <p className="py-2">
              Proper form helps you work out more efficiently so you can use
              your energy for the extra push rather than wasted movements.
            </p>
          </Container>
        </Col>
        <Col md={8} xs={12}>
          <Container className="home_stepsBox">
            <h3>Let's Get Results</h3>
            <p className="py-2">
              Improper form may mean you are targeting unintended muscles or
              muscle groups. The better your form the better your results
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
  );
};

export default Home;
