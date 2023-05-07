import "./CSS/card.css";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className="card">
      <h2>Solar System</h2>
      <p>Search for the mysteries of our Solar System</p>
      <Link to="/Home">
        <button className="splashbutton">Let's Go</button>
      </Link>
    </div>
  );
};

export default Card;
