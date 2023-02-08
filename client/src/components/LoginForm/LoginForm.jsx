import React from "react";
import { useState } from "react";
import "./LoginForm.css";
import { loginUser } from "../../services/auth";
import { useNavigate } from "react-router";

function LoginForm({ setErrorMessage, setUser, setRefresh }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setErrorMessage(false);
    const correctCred = await loginUser(userData);
    if (typeof correctCred !== "string") {
      setUser(correctCred);
      setRefresh((prevState) => !prevState);
      navigate("/");
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
        <img
          className="login-logo"
          src="https://res.cloudinary.com/daefwvbfj/image/upload/v1670863788/SDIRC-Link-Shortener/images%20and%20icons/SDIRC_2020_Logo_kys8j1.png"
          alt="School District Logo"
        ></img>
        <div className="login-title">SDIRC.tiny</div>
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
