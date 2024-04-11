import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
const Topbar = () => {
  return (
    <div className="nav-main">
      <div className="nav-container">
        <Link to="./Welcome">
          <FontAwesomeIcon icon={faBars} size="2x" color="white" />
        </Link>
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

        <div className="avt-btn">
          <Link to="/cartitems">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2x"
              color="white"
              style={{ marginRight: "40px" }}
            />
          </Link>
          <Link to="/Signin">
            <FontAwesomeIcon icon={faUserPlus} size="2x" color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
