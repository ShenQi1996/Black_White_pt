import React from "react";

//image
import project1 from "../../images/project1.png";

//BootStrap
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

//Style
import "./Works.scss";

function Works() {
  return (
    <Container className="Works">
      <Row className="gy-5 gx-">
        <Col xs={12} className="text-center">
          <Col xs={12}>
            <h1> My -</h1>
          </Col>
          <Col xs={12}>
            <h1>Work</h1>
          </Col>
        </Col>
        <Col md={5} xs={12} className="d-flex flex-column">
          <img
            src="https://user-images.githubusercontent.com/75746588/122280482-3cd71e00-ceb7-11eb-8255-d67dcaed112c.gif"
            alt=""
          />
          <Col className="align-item-center Works_info">
            <Col md={6} xs={12}>
              <h2 className="pt-3 mb-0 ">Hello</h2>
              <h5>Name of the project</h5>
            </Col>
            <Col md={6} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://calendly.com/qisam/meetingwithsam"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                View {`>`}
              </a>
            </Col>
          </Col>
        </Col>
        <Col md={{ span: 6, offset: 1 }} xs={12} className="d-flex flex-column">
          <img
            src="https://user-images.githubusercontent.com/75746588/122280482-3cd71e00-ceb7-11eb-8255-d67dcaed112c.gif"
            alt=""
          />
          <Col className="align-item-center Works_info">
            <Col md={6} xs={12}>
              <h2 className="pt-3 mb-0 ">Hello</h2>
              <h5>Name of the project</h5>
            </Col>
            <Col md={6} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://calendly.com/qisam/meetingwithsam"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                View {`>`}
              </a>
            </Col>
          </Col>
        </Col>
        <Col md={12} xs={12} className="d-flex flex-column Works_lastInf">
          <img src={project1} alt="" />
          <Col className="align-item-center Works_info">
            <Col md={8} xs={12}>
              <h2 className="pt-3 mb-0 ">Hello</h2>
              <h5>Name of the project</h5>
            </Col>
            <Col md={4} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://calendly.com/qisam/meetingwithsam"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                View {`>`}
              </a>
            </Col>
          </Col>
        </Col>
        <Col
          md={{ span: 4, offset: 4 }}
          xs={12}
          className="d-flex flex-column mb-5"
        >
          <a
            className="btn btn-outline-secondary Works_btn"
            href="https://github.com/ShenQi1996?tab=repositories"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            View more Projects {`>`}
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Works;
