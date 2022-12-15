import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import "./AllURLS.css";
import { useState } from "react";

function AllURLS() {
  const [newUrl, setNewUrl] = useState(null);

  return (
    <div className="aurls-container">
      <div className="aurls-create">
        <div className="aurls-cta">
          <div className="aurls-text">
            Hi Tyler, complete the form to create a shortened URL!
          </div>
        </div>
        <div className="aurls-form-container">
          {/* {newUrl ? (
            <NewURLDetails newUrl={newUrl} />
          ) : (
            <CreateURLForm setNewUrl={setNewUrl} />
          )} */}
          <NewURLDetails newUrl={newUrl} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AllURLS;
