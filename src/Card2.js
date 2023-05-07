import "./CSS/card.css";
import { Link } from "react-router-dom";
const Card2 = () => {
  return (
    <div className="card">
      <h2>Astronauts</h2>
      <p>Blast off into the shoes of the space explorers</p>
      <Link to="/Home">
        <button className="splashbutton">Let's Go</button>
      </Link>
    </div>
  );
};

export default Card2;
