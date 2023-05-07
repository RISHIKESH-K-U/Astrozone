import "./CSS/card.css";
import { Link } from "react-router-dom";
const Card1 = () => {
  return (
    <div className="card">
      <h2>Dates</h2>
      <p>A small click by you , a giant leap into the past</p>
      <Link to="/Home">
        <button className="splashbutton">Let's Go</button>
      </Link>
    </div>
  );
};

export default Card1;
