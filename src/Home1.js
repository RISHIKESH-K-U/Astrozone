import "./CSS/home.css";
import Card from "./Card";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Home1 = () => {
  return (
    <div className="home1">
      <h2>
        EXPLORE THE UNIVERSE, FIND NEW PLANETS, MEET NEW EXPLORERS AND READ
        ABOUT IMPORTANT DATES IN HISTORY
        <div className="cardholder">
          <Card />
          <Card1 />
          <Card2 />
        </div>
      </h2>
    </div>
  );
};

export default Home1;
