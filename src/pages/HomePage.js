import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default HomePage;