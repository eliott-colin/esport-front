import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (storedToken) {
      setToken(storedToken);
      if (storedRole) {
        try {
          setRole(JSON.parse(storedRole));
        } catch (e) {
          console.error("Failed to parse stored user:", e);
        }
      }
    }
    setIsLoading(false);
  }, []);

  // On login: set Context state and write to localStorage
  const login = (authToken, role = null) => {
    setToken(authToken);
    setRole(role);
    localStorage.setItem("token", authToken);
    if (role) {
      localStorage.setItem("role", JSON.stringify(role));
    }
  };

  // On logout: clear Context and localStorage
  const logout = () => {
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!token;

  const value = {
    role,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
