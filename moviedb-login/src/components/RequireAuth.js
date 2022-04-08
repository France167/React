import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import React from "react";

function RequireAuth() {
  const { auth } = useAuthContext();
  const location = useLocation();
  console.log(auth);
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
