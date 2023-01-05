import React from "react";
import { updateLink } from "../../services/links";

function UpdateURL({ updateURL, setUpdatedURL, setUpdateURL, setRefresh }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateURL((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const cancel = () => {
    setUpdateURL(null);
    setUpdateURL(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedLink = await updateLink(updateURL._id, {
      urlCode: updateURL.urlCode,
    });

    if (updatedLink) {
      setUpdatedURL({
        longURL: updateURL.longURL,
        oldShortURL: updateURL.shortURL,
        newShortURL: updatedLink.shortURL,
      });
      setUpdateURL(null);
      setRefresh((prevState) => !prevState);
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
              name="urlCode"
              value={updateURL.urlCode}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        <div>
          <button>Update</button>
        </div>
      </div>
    </form>
  );
}

export default UpdateURL;
