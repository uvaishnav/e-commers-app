// Essential Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserProductPage from "./pages/UserProductPage";

// Components
import Header from "./components/common/Header";

//contexts
import { AuthProvider } from "./context/AuthContext";

//Router Access
import RoleBasedAccess from "./components/auth/RoleBasedAccess";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user-product" element={
            <RoleBasedAccess allowedRoles={["user"]}>
              <UserProductPage />
            </RoleBasedAccess>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
