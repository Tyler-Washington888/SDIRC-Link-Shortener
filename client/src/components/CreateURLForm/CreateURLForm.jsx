import { createLink } from "../../services/links";
import "./CreateURLForm.css";
import { useState } from "react";

function CreateURLForm({ setNewUrl, setRefresh }) {
  //   will get user.email from user object once i integrate active directory
  const user = { email: "tyler.washington.work" };
  const [formData, setFormData] = useState({
    longUrl: "",
    urlCode: "",
    email: user.email,
  });
  const { longUrl, urlCode } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateForm = async (e, formData) => {
    e.preventDefault();
    const newUrl = await createLink(formData);
    if (newUrl) {
      setFormData(() => ({
        longUrl: "",
        urlCode: "",
        email: user.email,
      }));

      setNewUrl({
        longUrl: newUrl.longUrl,
        shortUrl: newUrl.shortUrl,
      });

      setRefresh((prevState) => !prevState);
    } else {
      // console.log(newUrl.error);
    }
  };

  return (
    <form className="cf" onSubmit={handleCreateForm(formData)}>
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
              className="cf-link-logo"
              src="https://res.cloudinary.com/daefwvbfj/image/upload/v1671034407/SDIRC-Link-Shortener/images%20and%20icons/new_rvnngw.png"
              alt="link logo"
            />
            <div>New URL Name</div>
          </div>
          <div className="cf-newUrl-container">
            <div className="cf-domain">https://sdirc</div>
            <input
              className="cf-newURL-input"
              type="text"
              name="urlCode"
              value={urlCode}
              onChange={handleChange}
              required
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
