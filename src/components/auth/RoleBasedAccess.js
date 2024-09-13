import React,{useContext} from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

const RoleBasedAccess = ({ children, allowedRoles }) => {
    const { user, role } = useContext(AuthContext);

    if (allowedRoles.includes(role)) {
        return children;
    }
    else if(!user){
        return <Navigate to="/login"/>;
    }
    else {
        return <Navigate to="/" />;
    }
}

export default RoleBasedAccess;


