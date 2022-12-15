import React from "react";
import "./NewURLDetails.css";

function NewURLDetails({ newUrl }) {
  const handleClick = () => {};
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
            <div className="nd-longURL">
              heyggggggggggggggggggggggggggggggggggggggggggggggg
            </div>
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
            <div className="nd-longURL">
              yoo99999999999999999999999999999999999999999999
            </div>
          </div>
        </label>
        <div className="nd-button-container">
          <div className="nd-tall-butts">
            <button className="nd-each-tall-butt butt-one">
              <img
                className="tall-butt-logo"
                alt="open logo"
                src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671123568/SDIRC-Link-Shortener/images%20and%20icons/forward_bovpmu.png"
              ></img>
              <div>Open</div>
            </button>
            <button className="nd-each-tall-butt butt-two">
              <img
                className="tall-butt-logo"
                alt="email logo"
                src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671124050/SDIRC-Link-Shortener/images%20and%20icons/mail_1_le8x2k.png"
              ></img>
              <div>Email</div>
            </button>
            <button className="nd-each-tall-butt butt-three">
              <img
                className="tall-butt-logo"
                alt="copy logo"
                src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671124154/SDIRC-Link-Shortener/images%20and%20icons/copy_th0h4q.png"
              ></img>
              <div>Copy</div>
            </button>
          </div>
          <div className="nd-long-butt">
            <button className="nd-new-url-button">New URL</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewURLDetails;
