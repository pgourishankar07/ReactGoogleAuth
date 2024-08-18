import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children, restricted }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
