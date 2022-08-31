import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Topbar = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "text-light" : "text-dark";
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-transparent"
        style={{ zIndex: 1000, height: "14vh" }}
      >
        <Container fluid>
          <Navbar.Brand>{portfolioDetails?.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navbar-list">
              {["Projects", "Skills", "Experience"].map((nav, idx) => (
                <Nav.Link
                  key={idx}
                  href={`#${nav.toLowerCase()}`}
                  className={className}
                >
                  {nav}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Topbar;
