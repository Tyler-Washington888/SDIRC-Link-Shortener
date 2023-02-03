import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav({ user }) {
  const onClick = () => {
    console.log("this wont work until I add an user object");
  };

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <NavLink className="nav-logo-text">
          <img
            className="nav-logo"
            src="https://res.cloudinary.com/daefwvbfj/image/upload/v1670863788/SDIRC-Link-Shortener/images%20and%20icons/SDIRC_2020_Logo_kys8j1.png"
            alt="School District Logo"
          ></img>
          <div className="nav-text">SDIRC.tiny</div>
        </NavLink>
        <div className="nav-user-logout">
          <div className="nav-text-user">{user.username}</div>
          <div className="nav-all-my-logout">
            <NavLink
              className="nav-text-right"
              to="/"
              exact
              activeClassName="color: red"
            >
              All URLS
            </NavLink>
            <NavLink className="left-margin nav-text-right" exact to="/my-urls">
              My URLS
            </NavLink>
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
