import React from "react";

//BootStrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./LandingPage.scss";
const LandingPage = ({ setLandingPage }) => {
  const handlelandingpage = () => {
    setLandingPage(true);
  };

  return (
    <Container fluid className="p-3 LandingPage">
      <Row className="p-3">
        <Col xs={12}>
          <h1 onClick={handlelandingpage} className="LandingPage_logo">
            SQ.fit -
          </h1>
        </Col>
        <Col className="gy-2 LandingPage_content">
          <a onClick={handlelandingpage} href="#">
            Let's Get Started it!{" "}
          </a>
          or,
          <a onClick={handlelandingpage} href="#">
            {" "}
            Get to know me,{" "}
          </a>
          find out
          <a onClick={handlelandingpage} href="#">
            {" "}
            how I like to train,{" "}
          </a>
          and
          <a onClick={handlelandingpage} href="#">
            {" "}
            what workout regimen{" "}
          </a>
          would best fits you.
        </Col>
      </Row>
      <Row xs={4} className="mx-1 pt-2 LandingPage_footer">
        <Col md={9} xs={12}>
          <h4>
            Get in touch: <a href="/"> calender</a>
          </h4>
        </Col>
        <Col md={2} xs={5} className="pb-2 d-flex justify-content-start">
          <a target="_blank" href="/">
            <img
              src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a target="_blank" href="/">
            <img
              src="https://img.icons8.com/dotty/80/ffffff/github.png"
              alt="Github"
            />
          </a>
          <a target="_blank" href="/">
            <img
              src="https://img.icons8.com/pastel-glyph/64/ffffff/website--v1.png"
              alt="Personal Website"
            />
          </a>
        </Col>
        <Col md={1} xs={12} className="">
          <h6>@ 2022</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
