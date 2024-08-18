import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const onSuccess = (response) => {
    // Assuming you handle the Google login here
    loginWithGoogle(response);
    navigate("/");
  };

  const onError = () => {
    console.error("Login Failed");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <GoogleOAuthProvider clientId="337691363377-g81o8q5f29aat94sd0805pae7p8qr0pm.apps.googleusercontent.com">
        <GoogleLogin onSuccess={onSuccess} onError={onError} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default LoginPage;
