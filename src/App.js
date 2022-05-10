import "./App.scss";
import { useState } from "react";
//Components
import LandingPage from "./components/Landing_Page/LandingPage";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import ITrain from "./components/ITrain/ITrain";
import Contact from "./components/Contact/Contact";
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
          <ITrain />
          <Contact />
        </>
      ) : (
        <LandingPage setLandingPage={setLandingPage} />
      )}
    </div>
  );
}

export default App;
