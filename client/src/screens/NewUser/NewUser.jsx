import React from "react";
import "./NewUser.css";
import NewUserForm from "../../components/NewUserForm/NewUserForm.jsx";
import { useState } from "react";

function NewUser() {
  const [errorMessageUser, setErrorMessage] = useState(false);
  const [messageUser, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState("");
  return (
    <div className="new-user-page">
      {errorMessageUser ? (
        <div id="nu-invalid-user">{messageUser}</div>
      ) : (
        <div id="nu-invalid-user-none"></div>
      )}
      <NewUserForm
        setErrorMessage={setErrorMessage}
        setMessage={setMessage}
        messageUser={messageUser}
      />
    </div>
  );
}

export default NewUser;
