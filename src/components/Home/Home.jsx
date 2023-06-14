import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

//components
import HomeChild from "./HomeChild";
import Offers from "./Offers";
import HomeSticky from "./HomeSticky";
import HomeCategory from "./HomeCategory";
import HomeSticky1 from "./HomeSticky1";
import HomePartners from "./HomePartners";
const Home = () => {
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="home-main">
      <HomeChild /> {/**child background image ***/}
      <div className="home-container">
        <div className="left">
          <h3>Get your Kid's need</h3>
          <p>where quality and discount matters</p>
        </div>
        <div className="right">
          <Link className="home-btn" to="/store">
            Shop here
          </Link>
        </div>
      </div>
      <Offers />
      <HomeSticky />
      <HomeCategory />
      <HomeSticky1 />
      <HomePartners />
    </div>
  );
};

export default Home;
