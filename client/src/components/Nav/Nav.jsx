import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const onClick = () => {
    console.log("this wont work until I add an user object");
  };

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
        <div className="nav-user-logout">
          <div className="nav-text-user">Tyler Washington</div>
          <div className="nav-all-my-logout">
            <Link className="nav-text-right" to="/">
              All URLS
            </Link>
            <Link className="left-margin nav-text-right" to="/my-urls">
              My URLS
            </Link>
            <div className="left-margin nav-text-right" oncClick={onClick}>
              Log Out
            </div>
          </div>
        </div>
      </div>
      <div className="aurls-banner"></div>
    </div>
  );
}

export default Nav;
