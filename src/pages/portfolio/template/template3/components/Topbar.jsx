import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Topbar = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  //   const className = darkTheme ? "text-light" : "text-dark";
  const textTheme = darkTheme ? "text-white" : "text-dark";
  const iconTheme = darkTheme
    ? "text-white icon--dark-3"
    : "text-dark icon--light-3";

  return (
    <React.Fragment>
      <Row className="pt-4 px-4">
        <Col md="4">
          {portfolioDetails?.behanceRssLink && (
            <a href="#behance" className={`${textTheme} me-3`}>
              Behance
            </a>
          )}
          {portfolioDetails?.mediumRssLink && (
            <a href="#medium" className={`${textTheme}`}>
              Medium
            </a>
          )}
        </Col>
        <Col md="4" className="text-center">
          <h1 className={`text-uppercase fs-6 fw-lighter ${textTheme}`}>
            {portfolioDetails?.name}
          </h1>
        </Col>
        <Col md="4" className="text-end">
          {portfolioDetails.socialLinks?.map((social) => (
            <a
              href={social.link}
              key={social.id}
              className={`me-3 ${iconTheme}`}
            >
              <IconProvider icon={social.name} />
            </a>
          ))}
        </Col>
      </Row>

      {/* <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="bg-transparent"
        style={{ zIndex: 1000, height: "14vh" }}
      >
        <Container fluid>
          <Navbar.Collapse id="responsive-navbar-nav">
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
          <Navbar.Brand>{portfolioDetails?.name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {portfolioDetails.socialLinks?.map((social) => (
              <a
                href={social.link}
                key={social.id}
                className={`me-3 ${textTheme}`}
              >
                <IconProvider icon={social.name} />
              </a>
            ))}
            {/* <Nav className="me-auto"></Nav>
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
            </Nav> */}
      {/* </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </React.Fragment>
  );
};

export default Topbar;
