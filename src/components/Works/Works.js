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
      <Container fluid className="text-center Works_top">
        <Row>
          <Col xs={12}>
            <h1>MY -</h1>
          </Col>
          <Col xs={12}>
            <h1>Work</h1>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={4} xs={12} className="d-flex flex-column">
          <div className="AboutMe_img">
            <img
              src="https://media0.giphy.com/media/UycS8eZJxPpvO8Ecks/giphy.gif?cid=790b761199f10c99cb84089593a433d1114aa4e5f024a19e&rid=giphy.gif&ct=g"
              alt=""
            />
          </div>
          <Col className="align-item-center Works_info">
            <Col md={6} xs={12}>
              <h2 className="pt-3 mb-0 ">Half Note</h2>
              <h5>Front-end</h5>
            </Col>
            <Col md={6} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://shenqi1996.github.io/Half_Note/"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                View {`>`}
              </a>
            </Col>
          </Col>
        </Col>
        <Col md={{ span: 5, offset: 1 }} xs={12} className="d-flex flex-column">
          <div className="AboutMe_img">
            <img
              src="https://user-images.githubusercontent.com/75746588/122280482-3cd71e00-ceb7-11eb-8255-d67dcaed112c.gif"
              alt=""
            />
          </div>
          <Col className="align-item-center Works_info">
            <Col md={6} xs={12}>
              <h2 className="pt-3 mb-0 ">GrillLit</h2>
              <h5>Full-Stack</h5>
            </Col>
            <Col md={6} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://grilllit.herokuapp.com/#/"
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
          lg={{ span: 6, offset: 3 }}
          md={{ span: 9, offset: 1 }}
          xs={12}
          className="d-flex flex-column Works_lastInf"
        >
          <div className="AboutMe_img"></div>
          <img
            src="https://media4.giphy.com/media/poSiGOgWlvmYHkUFPD/giphy.gif?cid=790b76116b10d90dcf149a1b55d111f2e97852aafd81a42a&rid=giphy.gif&ct=g"
            alt=""
          />
          <div className="AboutMe_img"></div>
          <Col className="align-item-center Works_info">
            <Col md={8} xs={12}>
              <h2 className="pt-3 mb-0 ">PixelPerfect</h2>
              <h5>Full-Stack</h5>
            </Col>
            <Col md={4} xs={12} className="d-flex flex-column mt-3">
              <a
                className="btn btn-outline-secondary Works_btn"
                href="https://pixelperfectsam.herokuapp.com/#/"
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
            className="btn btn-outline-secondary Works_btn_last"
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
