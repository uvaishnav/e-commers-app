import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../service/AuthService";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  // State variables for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Navigation hook
  const navigate = useNavigate();

  // Accessing user and role from AuthContext
  const { setUser, setRole } = useContext(AuthContext);

  // Function to handle login
  const login = async (username, password) => {
    try {
      // Call handleLogin function to authenticate user
      const { user, error } = await handleLogin(username, password);

      if (user) {
        // Set user and role in AuthContext
        setUser(user.username);
        setRole(user.role);

        // Navigate based on user role
        if (user.role === "user") {
          navigate("/user-product");
        } else if (user.role === "admin") {
          navigate("/admin-product");
        } else {
          // Invalid role
          alert("Invalid Role");
          setUser(null);
          setRole(null);
          navigate("/login");
        }
      } else {
        // Error occurred during login
        alert(error);
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  );
};

export default LoginPage;