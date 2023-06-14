import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Cart from "../Cart/Cart";

//global
import { useStateContext } from "../../context/StateContext";
import { googleLogout } from "@react-oauth/google";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Header = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { totalQuantities, user, setUser } = useStateContext();

  const navigate = useNavigate();
  const logOut = () => {
    googleLogout();
    setUser([]);
    toast.success("Logout Successfull");
    navigate("/");
  };

  return (
    <div className={props.changeBG ? "change-nav-bg" : "nav-main"}>
      <div className="nav">
        <div className="nav-l">
          <Link to="/">BuyForBaby</Link>
        </div>
        <div className="nav-r">
          <Link to="/search" className="a">
            <FiSearch className="mag-glass" />
          </Link>
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/store">
            Store
          </Link>
          {/* <Link className="a" to="/about">
            About Us
          </Link> */}
          <Link className={user.name?.length ? "hide-login" : "a"} to="/login">
            Login
          </Link>
          <Link className="a" onClick={() => setIsCartOpen(!isCartOpen)}>
            <AiOutlineShoppingCart />
            <span className="cart-qty">{totalQuantities}</span>
          </Link>
          {/* <button
            className={user.name?.length ? "a" : "hide-login"}
            onClick={logOut}
          >
            Logout
          </button> */}
          <div
            className={user.name?.length ? "header-dropdown" : "hide-drop-down"}
          >
            <div className="drop-down-img">
              <img src={user.image} alt="rgv" />
            </div>
            <div className="drop-down-content">
              <div className="drop-down-username">
                <h6 className="drop-down-item">Hi {user.name}</h6>
              </div>
              <div className="btn-container" onClick={logOut}>
                <button className={user.name?.length ? "logout" : "hide-login"}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div>
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
