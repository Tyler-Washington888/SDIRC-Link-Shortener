import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import NewURLDetails from "../../components/NewURLDetails/NewURLDetails.jsx";
import URLSTable from "../../components/URLSTable/URLSTable";
import "./AllURLS.css";
import { useState } from "react";

function AllURLS({ links, setRefresh }) {
  const [newUrl, setNewUrl] = useState(null);

  return (
    <div className="aurls-container">
      <div className="aurls-create">
        <div className="aurls-cta">
          {newUrl ? (
            <div className="aurls-text">
              Tyler, your link was shortened and is ready for use.
            </div>
          ) : (
            <div className="aurls-text">
              Hi Tyler, complete the form to create a shortened URL!
            </div>
          )}
        </div>
        <div className="aurls-form-container">
          {newUrl ? (
            <NewURLDetails newUrl={newUrl} setNewUrl={setNewUrl} />
          ) : (
            <CreateURLForm setNewUrl={setNewUrl} setRefresh={setRefresh} />
          )}
        </div>
      </div>
      <div className="aurls-table-container">
        <URLSTable links={links} />
      </div>
    </div>
  );
}

export default AllURLS;
