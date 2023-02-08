import React from "react";
import "./NewURLDetails.css";
import { Link } from "react-router-dom";

function NewURLDetails({ newUrl, setNewUrl }) {
  const handleClick = () => {
    setNewUrl((prevState) => !prevState);
  };

  return (
    <form
      className="nd"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="nd-content-container">
        <label>
          <div className="nd-logo-title">
            <img
              className="nd-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671033315/SDIRC-Link-Shortener/images%20and%20icons/link_h4a4g8.png"
              alt="link logo"
            />
            <div>Long URL</div>
          </div>
          <div className="nd-longURL-container">
            <div className="nd-text">{newUrl.longUrl}</div>
          </div>
        </label>
        <label>
          <div className="nd-logo-title">
            <img
              className="nd-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671120874/SDIRC-Link-Shortener/images%20and%20icons/magic-hat_nae1kf.png"
              alt="link logo"
            />
            <div>SDIRC.tiny URL</div>
          </div>
          <div className="nd-longURL-container">
            <div className="nd-text">{newUrl.shortUrl}</div>
          </div>
        </label>
        <div onClick={handleClick} className="nd-button-container">
          <button className="nd-new-url-button">New URL </button>
        </div>
      </div>
    </form>
  );
}

export default NewURLDetails;
