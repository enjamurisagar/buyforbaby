import React, { useEffect, useState } from "react";
import "./StoreSingleProduct.css";

//params
import { useParams, Link } from "react-router-dom";
//client & urlFor
import { client, urlFor } from "../../lib/client";

//spinner
import { Circles } from "react-loader-spinner";
//icons
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//marquee
import Marquee from "react-fast-marquee";

//toast
// import toast, { Toaster } from "react-hot-toast";

//global fnctions i.e., StateContext
import { useStateContext } from "../../context/StateContext";

const StoreSingleProduct = () => {
  //params is being connected from app.js
  //route path = /store/:category/:productname
  const { category, productname } = useParams();
  console.log(category, productname);

  const [singleStoreProduct, setSingleStoreProduct] = useState([]);
  //loader
  const [loader, setLoader] = useState(true);

  //get the data according to the params
  useEffect(() => {
    const query = `*[_type == "${category}" && slug.current == "${productname}"]`;
    setLoader(true);
    client
      .fetch(query)
      .then((res) => {
        setSingleStoreProduct(res);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [productname, category]);

  //may-also-like
  const [mayLikeData, setMayLikeData] = useState([]);
  useEffect(() => {
    const query = `*[_type == "${category}" && slug.current != "${productname}"]`;
    client
      .fetch(query)
      .then((res) => {
        setMayLikeData(res);
      })
      .catch((err) => console.log(err));
  }, [category, productname]);
  console.log(mayLikeData);

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
  //toaster

  //global functions
  const { incQty, decQty, qty, onAdd } = useStateContext();

  return (
    <div className="store-single-product-main">
      {loader && (
        <div className="store-single-spinner">
          <Circles
            height="80"
            width="80"
            color="lightblue"
            ariaLabel="circles-loading"
          />
        </div>
      )}
      <div className="store-single-container">
        {singleStoreProduct?.map((item, idx) => (
          <div className="store-single-card" key={idx}>
            <div className="img">
              <img src={urlFor(item.image)} alt="wv" />
            </div>
            <div className="store-single-data">
              <h1 className="name">{item.name}</h1>
              <p className="details">
                <span>
                  <b>Details:</b>
                </span>
                <br />
                {item.desc}
              </p>
              <p className="store-single-price">
                <BsCurrencyRupee />
                {item.price}
              </p>
              <div className="store-single-qty-wrapper">
                <span className="store-single-minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="store-single-plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </div>
              <button
                className="store-single-btn"
                onClick={() => onAdd(item, qty)}
              >
                Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="you-may-like-name">You May Also Like</h2>
      <Marquee pauseOnHover className="may-like-marquee">
        {mayLikeData?.map((item, i) => (
          <div className="may-like-container" key={i}>
            <div className="may-like-img">
              <Link to={`/store/${item.cat}`}>
                <img src={urlFor(item.image)} alt="may-also-like-img" />
              </Link>
            </div>
            <div className="may-like-data">
              <h3 className="name">{item.name}</h3>
              <div className="may-like-price">
                <p>
                  <BsCurrencyRupee />
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default StoreSingleProduct;
