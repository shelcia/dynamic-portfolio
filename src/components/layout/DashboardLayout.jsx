import React, { Fragment, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "../../pages/auth/Login";

import "../../styles/argon.css";
import "../../styles/style.css";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-transparent navbar-light py-2"
      >
        <Container>
          <Link className="navbar-brand mr-lg-5" to="/">
            D.
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button variant="neutral" onClick={() => logout()}>
                <span className="nav-link-inner--text">Logout</span>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </React.Fragment>
  );
};

export default DashboardLayout;

export const AuthGuard = ({ children }) => {
  const isAuthenticate = () => {
    return localStorage.getItem("dynamic-token") &&
      localStorage.getItem("dynamic-activated")
      ? true
      : false;
  };

  function useAuth() {
    return isAuthenticate();
  }

  const navigate = useNavigate();

  const isAuthenticated = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    navigate("/login");
    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <Fragment>{children}</Fragment>;
};
