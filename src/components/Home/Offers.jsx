import React, { useState, useEffect } from "react";
import "./Offers.css";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";
//pics

//get data from realtime db
import { client, urlFor } from "../../lib/client";

//icons
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";

const Offers = (props) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const query = '*[_type == "offers"] | order(_createdAt desc)';
    client
      .fetch(query)
      .then((res) => {
        console.log(res);
        setOffers(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="slide-main">
      <h1 className="main-name">Best Collections You Should Try </h1>
      <div className="offers-main">
        {offers.map((item, id) => (
          <Link
            to={`/product/${item.slug.current}`}
            className="offers-main-link"
          >
            <div className="offers-container" key={id}>
              <div className="offer-img">
                <img
                  className="offer-img"
                  src={urlFor(item.image)}
                  alt="ecf"
                  width={300}
                />
              </div>
              <i>
                <h1 className="offer-name">{item.name}</h1>
              </i>
              <div className="offers-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <BsStarHalf />
              </div>
              <div className="rating">
                Ratings:
                <p>{item.rating}</p>
                {/* <p>Slug: {item.slug.current}</p> */}
              </div>
              <p className="offer-description">{item.desc}</p>
              {/* <p>{item._id}</p> */}
              <div className="offer-btn">
                <button className="offer-cart">Cart</button>
                <AiOutlineArrowRight className="offer-right-arrow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Offers;
