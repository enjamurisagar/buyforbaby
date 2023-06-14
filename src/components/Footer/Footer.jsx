import React, { useState } from "react";
import "./Footer.css";

//icons
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
//toast
import { toast } from "react-hot-toast";

const Footer = () => {
  const [input, setInput] = useState("");

  const footButtonHandle = () => {
    if (input.length > 0) {
      setInput("");
      toast.success("Subscription Added");
    } else {
      toast.error("Enter your Email");
    }
  };

  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="foot-l">
          <h2>BuyForBaby</h2>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/enjamuri-sagar-5b0425222/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <AiFillYoutube />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.gihub.com/enjamurisagar"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="foot-mid">
          <h1>HELP</h1>
          <ul>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Secure Payments</li>
            <li>Track an order</li>
          </ul>
        </div>
        <div className="foot-r">
          <h1>Subscribe to get more updates</h1>
          <div className="footer-form">
            <div className="foot-input">
              <input
                type="email"
                required
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ex: example@example.com"
              />
            </div>
            <div className="foot-btn">
              <button className="subscribe-btn" onClick={footButtonHandle}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-last">&copy; All rights reserved @buyforbaby</div>
    </div>
  );
};

export default Footer;
