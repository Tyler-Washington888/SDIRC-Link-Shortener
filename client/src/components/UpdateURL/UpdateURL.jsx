import React from "react";
import { updateLink } from "../../services/links";
import { useState } from "react";
import "./UpdateURL.css";
import {
  checkEmptyStringsUpdate,
  resetStylesUpdate,
} from "../../utils/emptyStringsUpdate";
import {
  checkIsValidURLUpdate,
  handleServerErrorsUpdate,
} from "../../utils/validURLUpdate";

function UpdateURL({
  setErrorMessage,
  updateURL,
  setUpdatedURL,
  setUpdateURL,
  setRefresh,
}) {
  const [formData, setFormData] = useState({ newUrlCode: "" });

  const { newUrlCode } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    resetStylesUpdate();
    setErrorMessage(null);

    let checkEmpty = checkEmptyStringsUpdate(newUrlCode, setErrorMessage);
    if (checkEmpty) {
      return;
    }

    let checkValid = checkIsValidURLUpdate(newUrlCode, setErrorMessage);
    if (checkValid) {
      return;
    }

    const updatedLink = await updateLink(updateURL.id, formData);
    if (typeof updatedLink !== "string") {
      setUpdatedURL({
        longURL: updateURL.longURL,
        oldShortURL: updateURL.shortURL,
        newShortURL: newUrlCode,
      });

      setUpdateURL(null);
      setRefresh((prevState) => !prevState);
    } else {
      handleServerErrorsUpdate(updatedLink, setErrorMessage);
    }
  };

  return (
    <form
      className="update-url"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="update-content-container">
        <label>
          <div className="update-logo-title">
            <img
              className="update-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671033315/SDIRC-Link-Shortener/images%20and%20icons/link_h4a4g8.png"
              alt="link logo"
            />
            <div>Long URL</div>
          </div>
          <div className="update-longURL-container">
            <div className="update-text">{updateURL.longURL}</div>
          </div>
        </label>
        <br />
        <label>
          <div className="update-logo-title">
            <img
              className="update-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671120874/SDIRC-Link-Shortener/images%20and%20icons/magic-hat_nae1kf.png"
              alt="link logo"
            />
            <div>Current Short URL</div>
          </div>
          <div className="update-longURL-container">
            <div className="update-text">{updateURL.shortURL}</div>
          </div>
        </label>
        <br />
        <label>
          <div className="update-logo-title">
            <img
              className="update-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671034407/SDIRC-Link-Shortener/images%20and%20icons/new_rvnngw.png"
              alt="link logo"
            />
            <div>New URL Name</div>
          </div>
          <div className="update-newUrl-container">
            <div className="update-domain">https://sdirc/</div>
            <input
              className="update-newURL-input"
              type="text"
              name="newUrlCode"
              value={newUrlCode}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <di className="update-button-container" v>
          <button className="update-button">Update</button>
        </di>
      </div>
    </form>
  );
}

export default UpdateURL;
