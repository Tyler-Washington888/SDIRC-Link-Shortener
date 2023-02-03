import React from "react";
import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { useState } from "react";

function Login({ setUser }) {
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <div className="login-page">
      {errorMessage ? <div>Invalid username or password</div> : <></>}
      <LoginForm setErrorMessage={setErrorMessage} setUser={setUser} />
    </div>
  );
}

export default Login;
