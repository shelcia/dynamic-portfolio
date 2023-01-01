import React, { useContext, useState, useEffect } from "react";
import { Container, Nav, Navbar, CloseButton } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Topbar = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "text-light" : "text-dark";
  const variantType = darkTheme ? "dark" : "light";
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant={`${variantType}`}
        className="bg-transparent"
        style={{ zIndex: 1000, height: "14vh" }}
      >
        <Container fluid>
          <Navbar.Brand className="text-white">{portfolioDetails?.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={isMobile ? "pt-2" : ""}
          >
            <Nav className="me-auto"></Nav>
            <Nav className="navbar-list">
              {isMobile && (
                <Nav.Link className="d-flex justify-content-end" href="#">
                  <CloseButton />
                </Nav.Link>
              )}
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
