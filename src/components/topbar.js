import React from "react";
import "./topbar.css";
import Avatar from "./avatar";
const Topbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-container">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/about">
          About
        </a>
        <a className="nav-link" href="/navbar">
          Navbar
        </a>
        <a className="nav-link" href="/link">
          Link
        </a>
        <a className="nav-link" href="/dropdown">
          Dropdown
        </a>
        <Avatar
          src={require("./assets/yousuf.jpg")}
          alt="yousuf"
          className="img"
        />
      </div>
    </div>
  );
};

export default Topbar;
