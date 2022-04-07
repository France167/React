import React from 'react'
import {useLocation, Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../contexts/AuthContext";

function RequireAuth() {
    const {auth} = useAuthContext();
    const location = useLocation();
  return auth ? (
   <Outlet/>
  ) : (
      <Navigate to="/login" state={{from: location}} replace />
  )
}

export default RequireAuth