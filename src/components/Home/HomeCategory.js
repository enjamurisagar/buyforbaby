import React from "react";
import "./HomeCategory.css";

import homeCatImg from "../../assets/home-cat.jpg";

import { AiOutlineCaretRight } from "react-icons/ai";

//images
import diapers from "../../assets/home-cats/diapers.jpg";
import wipes from "../../assets/home-cats/wipes.jpg";
import rash from "../../assets/home-cats/diaper-rash-cream.jpg";
import soaps from "../../assets/home-cats/soaps-shampoos.png";
import creams from "../../assets/home-cats/creams.jpg";
import bathers from "../../assets/home-cats/bathers.jpg";
import grooming from "../../assets/home-cats/grooming.jpg";
import dishes from "../../assets/home-cats/dishes.jpg";
import feedBottles from "../../assets/home-cats/feeding-bootle.jpg";
import teethers from "../../assets/home-cats/teethers.jpg";

//routing
import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <div className="home-cat-main">
      <div className="home-cat-container">
        <div className="home-cat-img">
          <img src={homeCatImg} alt="HomeCatImg" />
        </div>
        <h4 className="cat-head">Categories you can expect ...</h4>
        <div className="cats">
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={diapers} alt="" />
            </div>
            <Link to="/store/babydiapers">
              <p>
                Baby Diapers
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={wipes} alt="" />
            </div>{" "}
            <Link to="/store/babywipes">
              <p>
                Baby Wipes
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={rash} alt="" />
            </div>{" "}
            <Link to="/store/babycreams">
              <p>
                Diaper Rash Cream
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={soaps} alt="" />
            </div>{" "}
            <Link to="/store/soapsandshampoos">
              <p>
                Soaps, Shampoos+
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={creams} alt="" />
            </div>{" "}
            <Link to="/store/babycreams">
              <p>
                Baby Creams
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={bathers} alt="" />
            </div>{" "}
            <Link to="/store/babybathers">
              <p>
                Baby Bathers
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={grooming} alt="" />
            </div>{" "}
            <Link to="/store/grooming">
              <p>
                Grooming
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={dishes} alt="" />
            </div>{" "}
            <Link to="/store/">
              <p>
                Dishes & Utensils
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={feedBottles} alt="" />
            </div>
            <Link to="/store/feedingbottles">
              <p>
                Feeding Bottles
                <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
          <div className="cat-wrapper">
            <div className="cat-img">
              <img src={teethers} alt="" />
            </div>{" "}
            <Link to="/store/teethersandsmoothers">
              <p>
                Teethers & Smoothers <AiOutlineCaretRight />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
