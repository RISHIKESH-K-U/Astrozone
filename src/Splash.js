import video from "./Videos/space_video.mp4";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./CSS/splash.css";

function Splash() {
  return (
    <div className="splash">
      <div className="bgvideo">
        <video id="background-video" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="splashentry">
        <h2 className="splashmsg">WELCOME TO ASTROZONE !!!</h2>
        <Link to="/Home">
          <button className="splashbutton">WELCOME</button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
