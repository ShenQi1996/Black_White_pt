import React from "react";

//BootStrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
//style
import "./ITrain.scss";

const ITrain = () => {
  return (
    <Container fluid className="ITrain">
      <Row className="pt-5 gy-5">
        <Col xs={12} className="ITrain_upText">
          <h1>How I like to train</h1>
        </Col>
        <Col md={{ span: 9, offset: 2 }} xs={12}>
          <Container>
            <p>
              Let's talk about how I like to train. I mainly focus on form and
              use lightweight and slow-tempo excuses. We can focus more on
              getting the right muscle to contract by using the lighter-weight
              and slow tempo.
            </p>
          </Container>
        </Col>
        <Col md={{ span: 8, offset: 2 }}>
          <Container className="d-flex flex-column" id="ITrain" name="ITrain">
            <a
              className="p-3 mx-5 btn btn-dark  ITrain_btn"
              href="https://vahvafitness.com/slow-tempo-workout/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              Learn More {`>`}
            </a>
          </Container>
        </Col>
        <Col xs={12} className="my-5 ITrain_downText">
          <h1>How I like to train</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default ITrain;
