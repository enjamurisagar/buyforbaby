import React, { createContext, useContext, useState } from "react";

//toast
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const [user, setUser] = useState([]);
  console.log(user);
  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    if (checkProductInCart) {
      // const updatedCartItems = cartItems.map((cartProduct) => {
      //   if (cartProduct._id === product._id) {
      //     return setCartItems([
      //       ...cartItems,
      //       { quantity: cartProduct.quantity + 1 },
      //     ]);
      //   }
      //   // return {
      //   //   ...cartItems,
      //   //   quantity: cartProduct.quantity + 1,
      //   // };
      // });
      // console.log(updatedCartItems);
      // try {
      //   setCartItems(updatedCartItems);
      // } catch (error) {
      toast.error("Product already added to the Cart");
      // }
      // console.log("product in cart already");
    } else {
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevQuantities) => prevQuantities + quantity);
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
      // console.log("new product in cart  ");
      const item = quantity > 1 ? "items" : "item";
      toast.success(`${quantity} ${item} Added to your bag`);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevQuantities) => prevQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
    toast.error("One Item removed from your bag");
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((item) => item._id === id);

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec")
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
  };

  const incQty = () => {
    setQty((old) => old + 1);
  };
  const decQty = () => {
    if (qty === 1) setQty(1);
    else setQty((old) => old - 1);
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        qty,
        totalQuantities,
        user,

        //functions
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
