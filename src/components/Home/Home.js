import React from "react";

//BootStrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
//style
import "./Home.scss";

const Home = () => {
  return (
    <Container className="home" id="home">
      <Row className="gy-5 my-3">
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
          <Container className="mt-5 d-flex justify-content-center">
            <Button variant="outline-secondary" className="home_downBtn">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/down--v1.png" />
            </Button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>About me</Col>
        <Col xs={12}>Education</Col>
        <Col xs={12}>Years of Training</Col>
        <Col xs={12}>Qualification</Col>
      </Row>
    </Container>
  );
};

export default Home;
