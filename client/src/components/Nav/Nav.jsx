import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <div className="nav-content">
        <Link className="nav-logo-text" to="/">
          <img
            className="nav-logo"
            src="https://res.cloudinary.com/daefwvbfj/image/upload/v1670863788/SDIRC-Link-Shortener/images%20and%20icons/SDIRC_2020_Logo_kys8j1.png"
            alt="School District Logo"
          ></img>
          <div className="nav-text">SDIRC.tiny</div>
        </Link>
      </div>
      <div className="aurls-banner"></div>
    </div>
  );
}

export default Nav;
