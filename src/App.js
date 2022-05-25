import "./App.scss";
import { useState } from "react";
//Components
import LandingPage from "./components/Landing_Page/LandingPage";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

//Bootstrap
import Container from "react-bootstrap/Container";
//Style
import "./App.scss";

function App() {
  const [landingPage, setLandingPage] = useState(false);
  return (
    <div className="app">
      {landingPage ? (
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
      )}
    </div>
  );
}

export default App;
