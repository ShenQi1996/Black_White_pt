import React from "react";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//style
import "./Contact.scss";

const Contact = () => {
  return (
    <Container className="my-5 Contact">
      <Row className="gy-3">
        <Col xs={12} className="Contact_upText">
          <h1>Say - </h1>
        </Col>
        <Col xs={12} className="Contact_downText">
          <h1>Hello</h1>
        </Col>
        <Col xs={12}>
          <Container className="Contact_workhour">
            <h2 className="my-4">
              <span>-</span> Let's train togther
            </h2>
            <p>Work Hours : Tues to Fri from 5 pm to 7 pm</p>
            <p>Park Slop Blink Fitness, Brooklyn, New York</p>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="pb-3 Contact_workhour">
            <h2 className="my-4">
              <span>-</span> Let's have a chat
            </h2>
            <p>qisam1989@gmail.com</p>
            <a href="/">Calender</a>
          </Container>
        </Col>
        <Col xs={12}>
          <Container className="pt-3 d-flex justify-content-center">
            <h6>@ 2022 BY SQ.fit</h6>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
