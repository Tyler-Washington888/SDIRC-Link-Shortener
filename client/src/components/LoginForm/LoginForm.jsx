import React from "react";
import { useState } from "react";
import "./LoginForm.css";
import { loginUser } from "../../services/auth";

function LoginForm({ setErrorMessage, setUser }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const correctCred = await loginUser(userData);
    if (typeof correctCred !== "string") {
      setUser(correctCred);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <div className="login-logo-title-div">
        <div>Image</div>
        <div>SDIRC.Tiny</div>
      </div>
      <br></br>
      <label className="login-label-div">
        <div className="login-label-title">Email</div>
        <input
          className="login-label-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label className="login-label-div">
        <div className="login-label-title">Password</div>
        <input
          className="login-label-input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <div className="login-button-div">
        <button className="login-button">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
