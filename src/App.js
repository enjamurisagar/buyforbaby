import React from "react";
import "./App.css";
//Routers
import { Routes, Route } from "react-router-dom";

//components
import {
  Home,
  Store,
  Cart,
  Login,
  Footer,
  OfferDetail,
  StoreCategory,
  StoreSingleProduct,
} from "./components";

import { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
function App() {
  const [changeBG, setChangeBG] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 100) setChangeBG(true);
    else setChangeBG(false);
  };
  window.addEventListener("scroll", changeNavColor);
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  //cart
  // const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="app-main">
      <Header changeBG={changeBG} />
      {/* <div className={isCartOpen ? "dcart" : ""}>bkj</div> */}

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path={`/product/:slug`} element={<OfferDetail />} />

        <Route path="/store" element={<Store />} />
        <Route path={`/store/:slug`} element={<StoreCategory />} />
        <Route
          path={`/store/:category/:productname`}
          element={<StoreSingleProduct />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
