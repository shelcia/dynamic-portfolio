import React, { useContext, useEffect, useState } from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { Navbar, Nav, Container } from "react-bootstrap";

const Topbar = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  //   const className = darkTheme ? "text-light" : "text-dark";
  const textTheme = darkTheme ? "text-white" : "text-dark";
  const iconTheme = darkTheme
    ? "text-white icon--dark-3"
    : "text-dark icon--light-3";

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", () => {
      setIsLargeScreen(window.innerWidth > 768);
    });
  }, []);

  return (
    <React.Fragment>
      {isLargeScreen ? (
        <Row className="pt-4 px-4">
        <Col md="4" className="menu">
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
        <Col md="4" className="text-center user-name">
          <h1 className={`text-uppercase fs-6 fw-lighter ${textTheme}`}>
            {portfolioDetails?.name}
          </h1>
        </Col>
        <Col md="4" className="socials">
          {portfolioDetails?.socialLinks?.map((social) => (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>{social.name}</Tooltip>}
              key={social.id}
            >
              <a
                href={social.link}
                className={`me-3 ${iconTheme}`}
                target="_blank"
                rel="noreferrer"
              >
                <IconProvider icon={social.name} />
              </a>
            </OverlayTrigger>
          ))}
        </Col>
      </Row>
      ) : (
        <Navbar collapseOnSelect expand="lg" variant={darkTheme ? "dark" : "light"} bg="transparent" > 
          <Container fluid>
            <Navbar.Brand href="#home">{portfolioDetails?.name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {portfolioDetails?.behanceRssLink && (
                  <Nav.Link href="#behance" className={`${textTheme} me-3`}>
                    Behance
                  </Nav.Link>
                )}
                {portfolioDetails?.mediumRssLink && (
                  <Nav.Link href="#medium" className={`${textTheme}`}>
                    Medium
                  </Nav.Link>
                )}
              </Nav>
              <Nav className="socials">
                {portfolioDetails.socialLinks?.map((social) => (
                  <Nav.Link
                    href={social.link}
                    key={social.id}
                    className={`me-3 ${textTheme}`}
                    target="_blank"
                  >
                    <IconProvider icon={social.name} />
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

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
