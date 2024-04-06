import React from "react";
import "./topbar.css";
import Avatar from "./avatar";
const Topbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-container">
        <a className="nav-link" href="/Laptops">
          Laptops
        </a>
        <a className="nav-link" href="/Fragrances">
          Fragrances
        </a>
        <a className="nav-link" href="/Skincare">
          Skincare
        </a>
        <a className="nav-link" href="/Groceries">
          Groceries
        </a>
        <a className="nav-link" href="/Smartphones">
          Smartphones
        </a>

        <Avatar
          src={require("../assets/yousuf.jpg")}
          alt="yousuf"
          className="topbar-img"
        />
      </div>
    </div>
  );
};

export default Topbar;
