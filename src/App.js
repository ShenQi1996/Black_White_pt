import "./App.scss";
import { useState } from "react";
//Components
import LandingPage from "./components/Landing_Page/LandingPage";
import Home from "./components/Home/Home";

//Style
import "./App.scss";

function App() {
  const [landingPage, setLandingPage] = useState(false);
  return (
    <div className="app">
      {landingPage ? <Home /> : <LandingPage setLandingPage={setLandingPage} />}
    </div>
  );
}

export default App;
