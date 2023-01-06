import React from "react";

function UpdatedURLDetails({ updatedURL, setUpdatedURL }) {
  const handleClick = () => {
    setUpdatedURL(null);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label>
          <div>
            <div>Image</div>
            <div>Long URL</div>
          </div>
          <div>
            <div>{updatedURL.longUrl}</div>
          </div>
        </label>
        <label>
          <div>
            <div>Image</div>
            <div>Old short URL</div>
          </div>
          <div>
            <div>{updatedURL.oldShortURL}</div>
          </div>
        </label>
        <label>
          <div>
            <div>Image</div>
            <div>SDIRC.tiny URL</div>
          </div>
          <div>
            <div>{updatedURL.newShortURL}</div>
          </div>
        </label>
        <div onClick={handleClick}>
          <button>New URL</button>
        </div>
      </div>
    </form>
  );
}

export default UpdatedURLDetails;
