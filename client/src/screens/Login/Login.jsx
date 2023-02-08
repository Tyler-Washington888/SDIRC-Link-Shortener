import React from "react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { useState } from "react";

function Login({ setUser, setRefresh }) {
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <div className="login-page">
      {errorMessage ? (
        <div className="invalid-user">***INVALID USERNAME OR PASSWORD**</div>
      ) : (
        <div className="invalid-user-none"></div>
      )}
      <LoginForm
        setErrorMessage={setErrorMessage}
        setUser={setUser}
        setRefresh={setRefresh}
      />
    </div>
  );
}

export default Login;
