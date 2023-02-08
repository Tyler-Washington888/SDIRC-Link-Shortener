import React from "react";
import "./NewUserForm.css";
import { createUser } from "../../services/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewUserForm({
  setErrorMessage,
  setMessage,
  messageUser,
}) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateUser = async () => {
    setErrorMessage(false);
    const newUser = await createUser(userData);
    if (typeof newUser !== "string") {
      setMessage(`${newUser.username} was created!`);
      setErrorMessage(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      console.log(messageUser);
      setMessage("**User could not be created**");
      setErrorMessage(true);
    }
  };

  return (
    <form
      className="nu-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateUser();
      }}
    >
      <label className="nu-label-div">
        <div className="nu-label-title">Username</div>
        <input
          className="nu-label-input"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label className="nu-label-div">
        <div className="nu-label-title">Email</div>
        <input
          className="nu-label-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <label className="nu-label-div">
        <div className="nu-label-title">Password</div>
        <input
          className="nu-label-input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br></br>
      <div className="nu-button-div">
        <button className="nu-button">Sign Up</button>
      </div>
    </form>
  );
}
