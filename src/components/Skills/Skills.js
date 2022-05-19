import React from "react";

//BootStrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
//style
import "./Skills.scss";

const Skills = () => {
  return (
    <Container fluid className=" Skills">
      <Row className="pt-5 gy-5">
        <Col xs={12} className="Skills_upText">
          <h1>Web Development skills</h1>
        </Col>
        <Col
          lg={{ span: 5, offset: 2 }}
          md={{ span: 9, offset: 2 }}
          xs={12}
          id="Skills"
        >
          <Container>
            <p>
              If you’re looking for a creative developer who knows how to build
              things that people love, look no further
            </p>
            <p>
              Pour a cup of tea, and let me tell you all about my skill sets for
              web development.
            </p>
          </Container>
        </Col>
        <Col lg={3}>
          <Container className="d-flex flex-column">
            <a
              className="p-3 btn btn-dark  Skills_btn"
              href="https://docs.google.com/document/d/1Fc7jn9HGnB6pDHDO0snCIQeUU7JJnMJW/edit?usp=sharing&ouid=117373099643185244319&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              Learn More {`>`}
            </a>
          </Container>
        </Col>
        <Col md={12}>
          <Container className="mt-5">
            <Row className="gy-5 align-items-center text-center">
              <Col md={3} xs={4}>
                <img
                  src="https://img.icons8.com/ios-filled/100/000000/javascript.png"
                  alt="javascript"
                />
              </Col>
              <Col md={3} xs={4}>
                <img
                  src="https://img.icons8.com/ios-filled/100/000000/html.png"
                  alt="html"
                />
              </Col>
              <Col md={3} xs={4}>
                <img
                  src="https://img.icons8.com/ios-filled/100/000000/css.png"
                  alt="css"
                />
              </Col>
              <Col md={3} xs={4}>
                <img
                  src="https://img.icons8.com/ios-filled/100/000000/react-native.png"
                  alt="react"
                />
              </Col>
              <Col md={6} xs={4}>
                <img
                  src="https://img.icons8.com/windows/96/000000/nodejs.png"
                  alt="nodejs"
                />
              </Col>
              <Col md={6} xs={4}>
                <img
                  src="https://img.icons8.com/windows/96/000000/ruby-on-rails.png"
                  alt="ruby-on-rails"
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} className="my-5 Skills_downText">
          <h1>Web Development skills</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
