import React, { Fragment, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom"; // component props interface
import Login from "../pages/auth/Login";

const AuthGuard = ({ children }) => {
  const isAuthenticate = () => {
    return localStorage.getItem("dynamic-token") &&
      localStorage.getItem("dynamic-activated")
      ? true
      : false;
  };

  function useAuth() {
    // console.log(isAuthenticate(), isExpired);
    if (!isAuthenticate()) {
      return true;
    } else {
      return true;
    }
    // return isAuthenticate() && !isExpired;
  }

  const navigate = useNavigate();

  const isAuthenticated = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  // console.log({ isAuthenticated, requestedLocation, pathname });

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    navigate("login");
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
