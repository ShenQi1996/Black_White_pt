import "./App.scss";
import { useState } from "react";
//Components
import LandingPage from "./components/Landing_Page/LandingPage";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
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
          <AboutMe />
          <Skills />
          <Contact />
          <footer className="my-5" id="footer">
            <Container className="my-3 d-flex justify-content-center">
              <h6>@ 2022 BY SQ.fit</h6>
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
