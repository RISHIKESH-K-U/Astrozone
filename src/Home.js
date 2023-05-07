import Home1 from "./Home1";
import Home2 from "./Home2";
import NavBar from "./NavBar";
import "./CSS/home.css";
import Home0 from "./Home0";
import Home4 from "./Home4";

const Home = () => {
  return (
    <div className="homep">
      <NavBar />;
      <Home4 />
      <Home1 />
      <Home2 />
      <Home0 />
      <div className="footer">
        <h4>Contact</h4>
        <h4>About</h4>
        <h4>Terms and Conditions</h4>
      </div>
    </div>
  );
};

export default Home;
