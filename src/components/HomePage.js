import React from "react";
import { useAuth } from "./AuthContext";
import logo from "../logo.svg";
import "../App.css";

export const HomePage = () => {
  const { logout, user } = useAuth();
  console.log("User object:", user); // Log the user object
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, {user.name}!</h1>{" "}
        {/* Adjust based on what info you have */}
        <button onClick={handleLogout}>Logout</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
