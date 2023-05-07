import { Link } from "react-router-dom";
import SolarSystem from "./SolarSystem";
import "./CSS/nav.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/SolarSystem">Solar System</Link>
      <Link to="/SolarSystem">Dates</Link>
      <Link to="/SolarSystem">Meet Them</Link>
    </div>
  );
};

export default NavBar;
