import React, { useEffect } from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import "./AllURLS.css";
import { useState } from "react";
import URLSTable from "../../components/URLSTable/URLSTable.jsx";

function AllURLS({ links, setRefresh, user }) {
  const [newUrl, setNewUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [myLinks, setMyLinks] = useState(null);

  return (
    <div className="aurls-container">
      <div className="aurls-create">
        <div className="aurls-cta">
          {newUrl ? (
            <div className="aurls-text">
              Your link was shortened and is ready for use.
            </div>
          ) : (
            <div className="aurls-text">
              Hi, complete the form to create a shortened URL!
            </div>
          )}
          {errorMessage ? (
            <div className="aurls-errorContainer ">
              <h1 className="error-header">**ERROR CREATING URL**</h1>
              <div className="error-message">{errorMessage}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="aurls-form-container">
          {newUrl ? (
            <NewURLDetails newUrl={newUrl} setNewUrl={setNewUrl} />
          ) : (
            <CreateURLForm
              setErrorMessage={setErrorMessage}
              setNewUrl={setNewUrl}
              setRefresh={setRefresh}
              user={user}
            />
          )}
        </div>
      </div>
      <div className="mid-page-banner"></div>
      <div className="aurls-table-container">
        <URLSTable links={links} />
      </div>
    </div>
  );
}

export default AllURLS;