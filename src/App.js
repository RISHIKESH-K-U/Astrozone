import "./App.css";
import Splash from "./Splash";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SolarSystem from "./SolarSystem";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SolarSystem" element={<SolarSystem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
