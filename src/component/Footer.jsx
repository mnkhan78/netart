import React from "react";
import "./style.css";
import fb from "../assets/fb.webp";
import website from "../assets/web.png";
import call from "../assets/call.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="#" className="social-media-link">
          <img className="icon-img" src={call} alt="icon-img" />
          <span
            style={{
              fontSize: "small",
            }}
          >
            Toll free 1800 200 1234
          </span>
        </a>
        <a href="#" className="social-media-link">
          <img className="icon-img" src={fb} alt="icon-img" />
          <span
            style={{
              fontSize: "small",
            }}
          >
            www.facebook.com/cripumps
          </span>
        </a>
        <a href="#" className="social-media-link">
          <img className="icon-img" src={website} alt="icon-img" />
          <span
            style={{
              fontSize: "small",
            }}
          >
            www.crigroup.com
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
