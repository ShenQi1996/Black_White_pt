import React from "react";

//BootStrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

//Style
import "./Works.scss";

function Works() {
  return (
    <Container className="Works">
      <Row className="gy-5">
        <Col xs={12}>
          <h1> My -</h1>
        </Col>
        <Col xs={12}>
          <h1>Works</h1>
        </Col>
        <Col xs={12}>Porject1</Col>
        <Col xs={12}>Porject2</Col>
        <Col xs={12}>Porject3</Col>
        <Col xs={12}>Porject4</Col>
        <Col xs={12}>Porject5</Col>
        <Col xs={12}>button</Col>
      </Row>
    </Container>
  );
}

export default Works;
