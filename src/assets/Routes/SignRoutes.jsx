import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router";

const SignRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (user) {
    return <Navigate to={"/"}></Navigate>;
  }

  return children;
};

export default SignRoutes;
