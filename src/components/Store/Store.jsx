import React from "react";
import "./Store.css";

// import { Link } from "react-router-dom";

//sub-components
import StoreNav from "./StoreNav";

//gif
import storeGif from "../../assets/store_gif.gif";

const Store = () => {
  return (
    <div className="store-main">
      <div className="store-navbar">
        <StoreNav />
      </div>
      <div className="empty">
        <img src={storeGif} alt="" />
      </div>
    </div>
  );
};

export default Store;
