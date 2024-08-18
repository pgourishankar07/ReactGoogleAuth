import React from "react";
import { useAuth } from "./AuthContext";

export const HomePage = () => {
  const { logout, user } = useAuth();
  console.log("User object:", user); // Log the user object
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1> {/* Adjust based on what info you have */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
