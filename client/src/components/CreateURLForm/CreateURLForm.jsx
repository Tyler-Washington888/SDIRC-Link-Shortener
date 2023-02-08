import { createLink } from "../../services/links";
import "./CreateURLForm.css";
import { useState } from "react";
import {
  checkEmptyStrings,
  emptyStringMessages,
  resetStyles,
} from "../../utils/emptyStrings";
import { checkIsValidURL, handleServerErrors } from "../../utils/validURL";

function CreateURLForm({ setErrorMessage, setNewUrl, setRefresh, user }) {
  const [formData, setFormData] = useState({
    longUrl: "",
    urlCode: "",
    email: user?.email,
  });
  const { longUrl, urlCode, email } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateForm = async () => {
    resetStyles();
    setErrorMessage(null);

    let checkEmpty = checkEmptyStrings(
      longUrl,
      urlCode,
      setErrorMessage,
      emptyStringMessages[0],
      emptyStringMessages[1],
      emptyStringMessages[2]
    );

    if (checkEmpty) {
      return;
    }

    let checkValid = checkIsValidURL(urlCode, setErrorMessage);
    if (checkValid) {
      return;
    }

    const newUrl = await createLink(formData);
    if (typeof newUrl !== "string") {
      setErrorMessage(null);
      setFormData(() => ({
        longUrl: "",
        urlCode: "",
        email,
      }));

      setNewUrl({
        longUrl: newUrl.longUrl,
        shortUrl: newUrl.shortUrl,
      });
    } else {
      handleServerErrors(newUrl, setErrorMessage);
    }
  };

  return (
    <form
      className="cf"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateForm();
      }}
    >
      <div className="cf-content-container">
        <label>
          <div className="cf-logo-title">
            <img
              className="cf-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671033315/SDIRC-Link-Shortener/images%20and%20icons/link_h4a4g8.png"
              alt="link logo"
            />
            <div>Long URL</div>
          </div>
          <input
            className="cf-longURL-input"
            id="longURL-box"
            type="text"
            name="longUrl"
            value={longUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <div className="cf-logo-title">
            <img
              className="cf-link-logo nurlname-box"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671034407/SDIRC-Link-Shortener/images%20and%20icons/new_rvnngw.png"
              alt="link logo"
            />
            <div>New URL Name</div>
          </div>
          <div className="cf-newUrl-container">
            <div className="cf-domain">https://sdirc/</div>
            <input
              className="cf-newURL-input"
              id="newURL-box"
              type="text"
              name="urlCode"
              value={urlCode}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <div className="cf-button-container">
          <button className="cf-button">Shorten</button>
        </div>
      </div>
    </form>
  );
}

export default CreateURLForm;
