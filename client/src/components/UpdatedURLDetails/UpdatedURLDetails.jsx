import React from "react";
import "./UpdatedURLDetails.css";

function UpdatedURLDetails({ updatedURL, setUpdatedURL }) {
  const handleClick = () => {
    setUpdatedURL(null);
  };

  return (
    <form
      className="updated-url"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="updated-content-container">
        <label>
          <div className="updated-logo-title">
            <img
              className="updated-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671033315/SDIRC-Link-Shortener/images%20and%20icons/link_h4a4g8.png"
              alt="link logo"
            />
            <div>Long URL</div>
          </div>
          <div className="updated-longURL-container">
            <div className="updated-text">{updatedURL.longURL}</div>
          </div>
        </label>
        <br />
        <label>
          <div className="updated-logo-title">
            <img
              className="updated-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671120874/SDIRC-Link-Shortener/images%20and%20icons/magic-hat_nae1kf.png"
              alt="link logo"
            />
            <div>Old short URL</div>
          </div>
          <div className="updated-longURL-container">
            <div className="updated-text">{updatedURL.oldShortURL}</div>
          </div>
        </label>
        <br />
        <label>
          <div className="updated-logo-title">
            <img
              className="updated-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671034407/SDIRC-Link-Shortener/images%20and%20icons/new_rvnngw.png"
              alt="link logo"
            />
            <div>SDIRC.tiny URL</div>
          </div>
          <div className="updated-longURL-container">
            <div className="updated-text">{updatedURL.newShortURL}</div>
          </div>
        </label>
        <br />
        <div className="updated-button-container" onClick={handleClick}>
          <button className="updated-button">New URL</button>
        </div>
      </div>
    </form>
  );
}

export default UpdatedURLDetails;
