import React, { useContext, useEffect, useState } from "react";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { Navbar, Nav, Container } from "react-bootstrap";

const Topbar = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
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
      <Navbar collapseOnSelect expand="lg" variant={darkTheme ? "dark" : "light"} bg="transparent">
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
    </React.Fragment>
  );
};

export default Topbar;
