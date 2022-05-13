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
    <Container fluid className="fadeAway p-3 LandingPage">
      <Row className="p-3 LandingPage_RowTop">
        <Col xs={12}>
          <h1 className="LandingPage_logo">SQ.fit -</h1>
        </Col>
        <Col xl={9} className="gy-2 LandingPage_content">
          <a onClick={handlelandingpage} href="#Home">
            Let's Get Started it!{" "}
          </a>
          or,
          <a onClick={handlelandingpage} href="#AboutMe">
            {" "}
            Get to know me,{" "}
          </a>
          find out
          <a onClick={handlelandingpage} href="#ITrain">
            {" "}
            how I like to train,{" "}
          </a>
          and
          <a onClick={handlelandingpage} href="#footer">
            {" "}
            what workout regimen{" "}
          </a>
          would best fits you.
        </Col>
      </Row>
      <Row xs={4} className="mx-1 pt-2 LandingPage_footer">
        <Col md={10} xs={12}>
          <h4>
            Get in touch:{" "}
            <a
              href="mailto:qisam1989@gmail.com?subject=personal_training"
              target="_blank"
              rel="noreferrer"
            >
              qisam1989@gmail.com
            </a>
          </h4>
        </Col>
        <Col md={12} xs={5} className="pb-2 d-flex justify-content-start">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shenqi1993/"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios/50/ffffff/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sammysocial_qi/?hl=en"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
              alt="IG"
            />
          </a>
          <a
            target="_blank"
            href="https://calendly.com/qisam/meetingwithsam"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/calendar.png"
              alt="Calendly"
            />
          </a>
        </Col>
        <Col md={12} xs={12} className="">
          <h4>@ 2022 SQ.fit</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
