import "./App.scss";
// import { useState } from "react";
//Components
// import LandingPage from "./components/Landing_Page/LandingPage";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

//React scroll motion
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  MoveIn,
} from "react-scroll-motion";

//Bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//Style
import "./App.scss";

function App() {
  // const [landingPage, setLandingPage] = useState(false);
  return (
    <div className="app">
      <div className="big_screen">
        <ScrollContainer>
          <ScrollPage page={0}>
            <Home />
          </ScrollPage>
          <Container>
            <Col
              md={{ span: 6, offset: 2 }}
              className="my-5 d-flex flex-column justify-content-center"
            >
              <a
                className="btn btn-outline-secondary app_GITBtn"
                href="https://calendly.com/qisam/meetingwithsam"
                rel="noreferrer"
                role="button"
                target="_blank"
              >
                Get in Touch
              </a>
            </Col>
          </Container>
          <ScrollPage page={1}>
            <Container fluid className="pt-5 text-center">
              <Row>
                <Animator animation={MoveIn(1000, 0)}>
                  <Col xs={12}>
                    <h1 className="big_text">MY -</h1>
                  </Col>
                </Animator>
                <Animator animation={MoveIn(-1000, 0)}>
                  <Col xs={12}>
                    <h1 className="big_text">Work</h1>
                  </Col>
                </Animator>
              </Row>
            </Container>
          </ScrollPage>
          <Works />
          <AboutMe />
          <Skills />
          <Contact />
          <footer className="my-5">
            <Container className="my-3 d-flex justify-content-center">
              <h6 id="footer">@ 2022 BY SQ.web</h6>
            </Container>
          </footer>
        </ScrollContainer>
      </div>
      <div className="small_screen">
        <Home />
        <Works />
        <AboutMe />
        <Skills />
        <Contact />
        <footer className="my-5">
          <Container className="my-3 d-flex justify-content-center">
            <h6 id="footer">@ 2022 BY SQ.web</h6>
          </Container>
        </footer>
      </div>
      {/* {landingPage ? (
        <>
        <Home />
        <Works />
        <AboutMe />
        <Skills />
        <Contact />
        <footer className="my-5">
          <Container className="my-3 d-flex justify-content-center">
            <h6 id="footer">@ 2022 BY SQ.web</h6>
          </Container>
        </footer>
        </>
      ) : (
        <LandingPage setLandingPage={setLandingPage} />
      )} */}
    </div>
  );
}

export default App;
