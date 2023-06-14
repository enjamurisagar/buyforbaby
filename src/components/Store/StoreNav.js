import React, { useState } from "react";
import "./StoreNav.css";

//router-link
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

//icons
import { RiArrowDropDownLine } from "react-icons/ri";

const StoreNav = () => {
  const [isDropDownOpen, setDropDown] = useState(true);
  const [clothingDropDown, setClothingDropDown] = useState(false);

  return (
    <div className="store-nav-main">
      <div className="store-navs">
        <div
          className="kids-products"
          onClick={() => setDropDown(!isDropDownOpen)}
        >
          <p>Kids Products</p>
          <p>
            <RiArrowDropDownLine />
          </p>
        </div>
        {isDropDownOpen && (
          <div className="links">
            <NavLink to="/store/babydiapers">Baby Diapers</NavLink>
            <NavLink to="/store/babywipes">Baby Wipes</NavLink>
            <NavLink to="/store/babycreams">Baby Creams</NavLink>
            <NavLink to="/store/babybathers">Baby Bathers</NavLink>
            <NavLink to="/store/grooming">Grooming</NavLink>
            <NavLink to="/store/soapsandshampoos">Soaps and Shampoos</NavLink>
            <NavLink to="/store/feedingbottles">Feeding Bottles</NavLink>
            <NavLink to="/store/teethersandsmoothers">
              Teethers and Smoothers
            </NavLink>
          </div>
        )}
        <div
          className="kids-clothes"
          onClick={() => setClothingDropDown(!clothingDropDown)}
        >
          <p>Kids Clothes</p>
          <p>
            <RiArrowDropDownLine />
          </p>
        </div>
        {clothingDropDown && (
          <div className="links">
            <NavLink to="/store/bathtime">Bath Time</NavLink>
            <NavLink to="/store/caps">Caps</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreNav;
