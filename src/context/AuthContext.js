import React, { useState, createContext } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    // Initialize state for user and role
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    // Error handling for invalid children prop
    if (!children) {
        throw new Error("AuthProvider requires children prop");
    }

    // Return the AuthContext.Provider with the state values as context value
    return (
        <AuthContext.Provider value={{ user, setUser, role, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};