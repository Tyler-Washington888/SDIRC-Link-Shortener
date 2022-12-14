import React from "react";
import CreateURLForm from "../../components/CreateURLForm/CreateURLForm";
import "./AllURLS.css";

function AllURLS() {
  return (
    <div className="aurls-container">
      <div className="aurls-create">
        <div className="aurls-cta">
          <div className="aurls-text">
            Hi Tyler, complete the form to create a shortened URL!
          </div>
        </div>
        <div className="aurls-form-container">
          <CreateURLForm />
        </div>
      </div>
    </div>
  );
}

export default AllURLS;
