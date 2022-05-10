import React from "react";

//BootStrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
//style
import "./ITrain.scss";

const ITrain = () => {
  return (
    <Container className="ITrain">
      <Row className="gy-5 my-5">
        <Col xs={12} className="ITrain_upText">
          <h1>How I like to train</h1>
        </Col>
        <Col xs={12}>
          <Container>
            <p>
              Let's talk about how I like to train. I mainly focus on form and
              use lightweight and low temple excuses. We can focus more on
              getting the right muscle to contract by performing excuses using
              the lighter-weight and low temple.
            </p>
          </Container>
        </Col>
        <Col>
          <Container className=" d-flex flex-column">
            <a className="p-3 btn btn-dark  ITrain_btn" href="#" role="button">
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
