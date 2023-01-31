import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import "./MyURLS.css";
import { useState } from "react";
import MyURLSTable from "../../components/MyURLSTable/MyURLSTable";
import UpdateURL from "../../components/UpdateURL/UpdateURL";
import UpdatedURLDetails from "../../components/UpdatedURLDetails/UpdatedURLDetails";
import "./MyURLS.css";

function MyURLS({ myLinks, setRefresh, setMyLinks }) {
  const [newUrl, setNewUrl] = useState(null);
  const [mySortedLinks, setMySortedLinks] = useState(null);
  const [updateURL, setUpdateURL] = useState(null);
  const [updatedURL, setUpdatedURL] = useState(null);
  const [sortByClicks, setSortByClicks] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className="murls-container">
      {updateURL || updatedURL ? (
        <div className="murls-create update-margin">
          <div className="murls-cta">
            {updateURL && !updatedURL ? (
              <div className="murls-text">
                Hi Tyler, complete the form to update the custom name for your
                URL!
              </div>
            ) : (
              <div className="murls-text">
                Tyler, your link has been renamed and is ready for use.
              </div>
            )}
            {errorMessage ? (
              <div className="murls-errorContainer ">
                <h1 className="murls-error-header">**ERROR CREATING URL**</h1>
                <div className="murls-error-message">{errorMessage}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="murls-form-container">
            {updateURL && !updatedURL ? (
              <UpdateURL
                setUpdateURL={setUpdateURL}
                updateURL={updateURL}
                setUpdatedURL={setUpdatedURL}
                setRefresh={setRefresh}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <UpdatedURLDetails
                updatedURL={updatedURL}
                setUpdatedURL={setUpdatedURL}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="murls-create">
          <div className="murls-cta">
            {newUrl ? (
              <div className="murls-text">
                Tyler, your link was shortened and is ready for use.
              </div>
            ) : (
              <div className="murls-text">
                Hi Tyler, complete the form to create a shortened URL!
              </div>
            )}
            {errorMessage ? (
              <div className="murls-errorContainer ">
                <h1 className="murls-error-header">**ERROR CREATING URL**</h1>
                <div className="murls-error-message">{errorMessage}</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="murls-form-container">
            {newUrl ? (
              <NewURLDetails newUrl={newUrl} setNewUrl={setNewUrl} />
            ) : (
              <CreateURLForm
                setNewUrl={setNewUrl}
                setErrorMessage={setErrorMessage}
                setRefresh={setRefresh}
              />
            )}
          </div>
        </div>
      )}
      <div className="mid-page-banner"></div>
      <div className="murls-table-container">
        {mySortedLinks ? (
          <MyURLSTable
            setMyLinks={setMyLinks}
            myLinks={mySortedLinks}
            setUpdateURL={setUpdateURL}
            setUpdatedURL={setUpdatedURL}
            setErrorMessage={setErrorMessage}
          />
        ) : (
          <MyURLSTable
            sortByClicks={sortByClicks}
            setMyLinks={setMyLinks}
            myLinks={myLinks}
            setUpdateURL={setUpdateURL}
            setUpdatedURL={setUpdatedURL}
            setErrorMessage={setErrorMessage}
          />
        )}
      </div>
    </div>
  );
}

export default MyURLS;
