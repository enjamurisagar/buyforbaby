import React, { useEffect, useState } from "react";
import "./StoreCategory.css";

//UseParams
import { useParams, Link } from "react-router-dom";

//clients
import { client, urlFor } from "../../lib/client";

//spinner
import Spinner from "../Spinner";
//icons
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

import StoreNav from "./StoreNav";

//global
import { useStateContext } from "../../context/StateContext";

const StoreCategory = () => {
  const { slug } = useParams();
  console.log(slug);

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const query = `*[_type == "${slug}"]`;
    setLoader(true);
    client
      .fetch(query)
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  console.log(data);

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  const { onAdd } = useStateContext();

  return (
    <div className="store-category-main">
      <div className="store-nav-bar">
        <StoreNav />
      </div>

      <div className="cats-data">
        {loader && <Spinner />}
        {data?.map((item, i) => (
          <div className="cat-container" key={i}>
            <div className="cat-img">
              <Link to={`/store/${item.cat}/${item.slug.current}`}>
                <img src={urlFor(item.image)} alt="cat-img" />
              </Link>
            </div>
            <div className="cat-data">
              <p className="cat-data-name">{item.name}</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <BsStarHalf />
              </div>
              <p className="cat-data-desc">{item.desc}</p>
              {item.reviews && (
                <p className="cat-data-reviews">
                  Reviews we got till :- {item.reviews}
                </p>
              )}
              <p className="cat-data-price">
                <BsCurrencyRupee />
                {item.price}
              </p>
              <p className="original-price">{item.originalprice}</p>
              {item.discount && <p>{item.discount}% OFF</p>}
              {item.sizeto && (
                <div className="size">
                  <p>{item.sizefrom}-</p>
                  <p>{item.sizeto}Y</p>
                </div>
              )}

              <div className="cat-cart-btn">
                <button className="cat-btn" onClick={() => onAdd(item, 1)}>
                  Bag
                </button>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCategory;
