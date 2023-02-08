import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import "./MyURLS.css";
import { useState, useEffect } from "react";
import MyURLSTable from "../../components/MyURLSTable/MyURLSTable";
import UpdateURL from "../../components/UpdateURL/UpdateURL.jsx";
import UpdatedURLDetails from "../../components/UpdatedURLDetails/UpdatedURLDetails";
import "./MyURLS.css";
import { getLinks } from "../../services/links";

function MyURLS({ setRefresh, user, refresh, links }) {
  const [myLinks, setMyLinks] = useState(null);
  const [newUrl, setNewUrl] = useState(null);
  const [updateURL, setUpdateURL] = useState(null);
  const [updatedURL, setUpdatedURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      let allLinks = await getLinks();
      if (allLinks) {
        allLinks = allLinks
          .filter((link) => link.email == user?.email)
          .reverse();

        setMyLinks(allLinks);
      }
    };
    fetchLinks();
  }, [links]);

  return (
    <div className="murls-container">
      {updateURL || updatedURL ? (
        <div className="murls-create update-margin">
          <div className="murls-cta">
            {updateURL && !updatedURL ? (
              <div className="murls-text">
                Complete the form to update the custom name for your URL!
              </div>
            ) : (
              <div className="murls-text">
                Your link has been renamed and is ready for use.
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
                user={user}
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
                Your link was shortened and is ready for use.
              </div>
            ) : (
              <div className="murls-text">
                Hi, complete the form to create a shortened URL!
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
                user={user}
              />
            )}
          </div>
        </div>
      )}
      <div className="mid-page-banner"></div>
      <div className="murls-table-container">
        <MyURLSTable
          updateURL={updateURL}
          myLinks={myLinks}
          setUpdateURL={setUpdateURL}
          setUpdatedURL={setUpdatedURL}
          setErrorMessage={setErrorMessage}
        />
      </div>
    </div>
  );
}

export default MyURLS;
