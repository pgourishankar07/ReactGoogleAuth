import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children, restricted }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
