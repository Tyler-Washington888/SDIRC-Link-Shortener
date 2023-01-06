import React from "react";
import { updateLink } from "../../services/links";
import { useState } from "react";

function UpdateURL({ updateURL, setUpdatedURL, setUpdateURL, setRefresh }) {
  const [formData, setFormData] = useState({ newUrlCode: " " });

  const { newUrlCode } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedLink = await updateLink(updateURL.id, formData);
    if (updatedLink) {
      setRefresh((prevState) => !prevState);

      setUpdatedURL({
        longURL: updateURL.longURL,
        oldShortURL: updateURL.shortURL,
        newShortURL: updatedLink.shortURL,
      });

      setUpdateURL(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <div>
            <div>Image</div>
            {/* <div>{updateURL.longURL}</div> */}
          </div>
          <div>
            <div></div>
          </div>
        </label>
        <label>
          <div>
            <div>Image</div>
            <div></div>
          </div>
          <div>
            <div>{updateURL.shortURL}</div>
          </div>
        </label>
        <label>
          <div>
            <div>Image</div>
            <div>New URL Name</div>
          </div>
          <div>
            <div>https://sdirc</div>
            <input
              type="text"
              name="newUrlCode"
              value={newUrlCode}
              onChange={handleChange}
            />
          </div>
        </label>
        <br></br>
        <div>
          <button>Update</button>
        </div>
      </div>
    </form>
  );
}

export default UpdateURL;
