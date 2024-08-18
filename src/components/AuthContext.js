import { jwtDecode } from "jwt-decode";
import React from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const loginWithGoogle = (response) => {
    const token = response.credential; // JWT token
    const decoded = jwtDecode(token);
    const userInfo = {
      name: decoded.name || "User", // Adjust according to the JWT claims
      email: decoded.email,
      // Add other fields as needed
    };
    setUser(userInfo);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
