import { Link } from "react-router-dom";
import SolarSystem from "./SolarSystem";
import "./CSS/nav.css";
import icon from "./Images/Icon.jpg";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={icon} alt="Icon" class="iconimage" />
      <h4 class="tagline">
        Explore the Universe Within AstroZone: Your One-Stop Space Destination!
      </h4>
      <Link to="/SolarSystem">Solar System</Link>
      <Link to="/SolarSystem">Dates</Link>
      <Link to="/SolarSystem">Meet Them</Link>
    </div>
  );
};

export default NavBar;
