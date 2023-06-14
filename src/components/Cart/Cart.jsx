import React from "react";
import "./Cart.css";

//icons
import { FaShoppingCart } from "react-icons/fa";

//framer motion
import { motion } from "framer-motion";

//globals data
import { useStateContext } from "../../context/StateContext";

//icons
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";

//urlFor
import { urlFor } from "../../lib/client";

import { useNavigate } from "react-router-dom";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const closeCart = () => {
    setIsCartOpen((old) => !old);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  console.log(isCartOpen);

  //global
  const {
    cartItems,
    totalPrice,
    totalQuantities,
    // qty,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  console.log(cartItems);

  const navigate = useNavigate();
  const goToShopping = () => {
    setIsCartOpen(false);
    navigate("/store");
  };

  return (
    <motion.div
      animate={isCartOpen ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0 }}
      className="cart-main"
    >
      <div className="cart-empty-left"></div>
      <div className="cart-main-container">
        <div className="cart-head">
          <div className="cart-l">
            <h1 className="cart-name">
              Your Bag ( {totalQuantities}
              {totalQuantities > 1 ? " items" : " item"})
            </h1>
          </div>
          <div className="cart-r">
            <button type="button" onClick={closeCart}>
              Close
            </button>
          </div>
        </div>

        <div className="cart-body">
          {totalQuantities < 1 && (
            <div className="go-shopping">
              <div className="go-shopping-icon">
                <FaShoppingCart size={75} />
              </div>
              <h1>Oops your bag is Empty</h1>
              <div className="cart-btn">
                <button className="go-shopping-btn" onClick={goToShopping}>
                  Go to Shopping
                </button>
              </div>
            </div>
          )}
          {cartItems?.map((item, id) => (
            <div className="cart-container" key={id}>
              <div className="cart-img">
                <img src={urlFor(item?.image)} alt="rg" />
              </div>
              <div className="cart-data">
                <div className="cart-data-l">
                  <h1 className="cart-item-name">{item?.name}</h1>
                  <div className="cart-item-qty-wrapper">
                    <span
                      className="cart-minus"
                      onClick={() => toggleCartItemQuantity(item._id, "dec")}
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span
                      className="cart-plus"
                      onClick={() => toggleCartItemQuantity(item._id, "inc")}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <h1 className="cart-item-price">
                    <BsCurrencyRupee size={15} />
                    {item.price} / item
                  </h1>
                </div>
                <div className="cart-data-r">
                  <button
                    type="button"
                    className="cart-remove-btn"
                    onClick={() => onRemove(item)}
                  >
                    <FaTimesCircle />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {totalQuantities > 0 && (
            <div className="cart-bottom">
              <div className="total-price">
                <h1>Sub Total : </h1>
                <p>
                  <BsCurrencyRupee size={15} />
                  {totalPrice}
                </p>
              </div>
              <div className="checkout">
                <button className="cart-checkout-btn">Check Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
