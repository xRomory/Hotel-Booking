import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) return;

        const response = await fetch(
          "http://127.0.0.1:8000/api/users/customer/",
          {
            method: "GET",
            headers: {
              Authorization: `Token ${authToken}`,
              "Content-Type": "application/json",
            },
            credentials: "include", // Ensures cookies are sent
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const login = (data) => {
    setUser(data.customer);
    localStorage.setItem("authToken", data.token); // Ensure token is stored
    localStorage.setItem("user", JSON.stringify(data.customer)); 
};

  const logout = async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/users/logout/", {
        method: "POST",
        credentials: "include", // Ensure session logout
      });

      setUser(null);
      localStorage.removeItem("authToken"); // Clear stored user]
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
