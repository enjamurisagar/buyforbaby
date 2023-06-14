import React, { useEffect, useState } from "react";
import "./OfferDetail.css";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/client";
//icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
//spinner
import { Circles } from "react-loader-spinner";

//global

import { useStateContext } from "../../context/StateContext";

const OfferDetail = () => {
  const [singleOffer, setSingleOffer] = useState([]);

  //loader
  const [loading, setLoading] = useState(false);
  //data
  const { slug } = useParams();

  useEffect(() => {
    const query = `*[_type == "offers" && slug.current == "${slug}"]`;
    setLoading(true);
    client
      .fetch(query)
      .then((data) => {
        setSingleOffer(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, [slug]);

  const { decQty, incQty, qty, onAdd } = useStateContext();
  return (
    <div className="offer-detail-main">
      {loading && (
        <div className="loader">
          <Circles
            height="80"
            width="80"
            color="lightblue"
            ariaLabel="circles-loading"
          />
        </div>
      )}
      {singleOffer.map((item, id) => (
        <div className="offer-detail-container" key={id}>
          <div className="offer-detail-l">
            <img
              className="offer-detail-img"
              src={urlFor(item.image)}
              alt="wef"
            />
          </div>
          <div className="offer-detail-r">
            <h1 className="offer-detail-name">{item.name}</h1>
            <div className="qty">
              <p className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </p>
              <p>{qty}</p>
              <p className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </p>
            </div>
            <div className="home-offer-btn">
              <button
                type="button"
                className="home-offer-button"
                onClick={() => onAdd(item, qty)}
              >
                Add to Bag
              </button>
            </div>
            <p className="offer-detail-desc">{item.desc} ...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferDetail;
