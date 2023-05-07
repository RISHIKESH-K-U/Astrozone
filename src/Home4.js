import "./CSS/home.css";
import image from "./Images/i6.gif";

const Home4 = () => {
  return (
    <div className="homer">
      <h2>FACT OF THE DAY !!!</h2>
      <div className="home4">
        <img src={image} alt="erath image" class="earthimg" />
        <h4 class="fact">
          Did you know that the force of gravity on Earth is not the same
          everywhere, and you would weigh slightly less at the equator than at
          the poles due to the planet's rotation and the distribution of its
          mass?
        </h4>
      </div>
    </div>
  );
};

export default Home4;
