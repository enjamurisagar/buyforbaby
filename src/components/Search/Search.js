import React, { useEffect, useState } from "react";
import "./Search.css";
//icons
import { BsCurrencyRupee, BsStarHalf } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";

//client
import { client, urlFor } from "../../lib/client";
import { Link } from "react-router-dom";

import SearchGIF from "../../assets/search_gif.gif";

//global
import { useStateContext } from "../../context/StateContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const searchQuery = `*[_type == "${input}" && title match "${input}" || cat match "${input}" || desc match "${input}"]`;
    client.fetch(searchQuery).then((res) => setSearchData(res));
  }, [input]);
  console.log(searchData);

  const { onAdd } = useStateContext();
  return (
    <div className="search-main">
      <div className="search-input-container">
        <h1>Drop here</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Baby Diapers, Caps ....."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="search-data-container">
        {searchData.length ? (
          <div className="search-data-wrapper">
            {searchData?.map((item, i) => (
              <div className="cat-container" key={i}>
                <div className="cat-img">
                  <Link to={`/store/${item.cat}/${item.slug.current}`}>
                    <img src={urlFor(item.image)} alt="cat-img" />
                  </Link>
                </div>
                <div className="cat-data">
                  <p className="cat-data-name">{item.name}</p>{" "}
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
                      Add to Bag
                    </button>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="keep-searching">
            <img src={SearchGIF} alt="search-gif" width={300} />
          </div>
        )}

        {/* <div className="search-data-wrapper">
          {searchData?.map((item, i) => (
            <div className="cat-container" key={i}>
              <div className="cat-img">
                <Link to={`/store/${item.cat}/${item.slug.current}`}>
                  <img src={urlFor(item.image)} alt="cat-img" />
                </Link>
              </div>
              <div className="cat-data">
                <p className="cat-data-name">{item.name}</p>
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
                  <button className="cat-btn">Cart</button>
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Search;
