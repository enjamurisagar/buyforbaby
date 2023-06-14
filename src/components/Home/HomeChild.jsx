import React from "react";
import "./HomeChild.css";
//img
import img from "../../assets/home.png";

const HomeChild = () => {
  return (
    <div className="home-child-main">
      <img src={img} alt="imageOfChild" />
    </div>
  );
};

export default HomeChild;
