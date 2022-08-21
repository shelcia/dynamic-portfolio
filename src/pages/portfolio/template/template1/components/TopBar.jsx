import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Topbar = ({ portfolioDetails }) => {
  // console.log(portfolioDetails);
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "text-light" : "text-dark";
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-transparent"
        style={{ zIndex: 1000, height: "10vh" }}
      >
        <Container className="ms-0 me-0">
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
      {/* <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-transparent position-absolute w-100 justify-content-between"
        style={{ zIndex: 1000 }}
      >
        <Container className="position-relative ms-0 me-0">
          <Navbar.Brand>{portfolioDetails?.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: "100%" }}>
              {["Projects", "Skills", "Experience"].map((nav, idx) => (
                <Nav.Link
                  key={idx}
                  href={`#${nav.toLowerCase()}`}
                  className="text-dark"
                >
                  {nav}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </React.Fragment>
  );
};

export default Topbar;
