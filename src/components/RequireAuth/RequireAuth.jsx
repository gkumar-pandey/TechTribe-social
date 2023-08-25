import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return <div>{isLoggedIn ? children : <Navigate to={"/login"} />}</div>;
};

export default RequireAuth;
