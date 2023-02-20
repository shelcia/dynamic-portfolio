import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { FaBehance } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/argon.css";
import "../../styles/style.css";

const HomeLayout = () => {
 
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
          <Navbar.Collapse id="responsive-navbar-nav" style={{ marginTop: "60px" }}>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="btn btn-neutral" to="/login">
                <span className="nav-link-inner--text">Login</span>
              </Link>
              <Link className="btn btn-neutral btn-icon" to="/signup">
                <span className="nav-link-inner--text">Signup</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />



      <footer className="footer">
        <Container>
          <Row className="row-grid align-items-center mb-5">
            <Col lg={6}>
              <h3 className="text-primary font-weight-light mb-2">
                This is an open source project
              </h3>
              <h4 className="mb-0 font-weight-light">
                Pages inspired from{"  "}
                <a href="https://www.creative-tim.com/product/argon-design-system">
                  argon system
                </a>
                {"  "}
                by{"  "}
                <a href="https://www.creative-tim.com">Creative Tim</a>
              </h4>
            </Col>
            <Col lg={6} className="text-lg-end btn-wrapper">
              <a
                href="https://github.com/shelcia/dynamic-portfolio"
                target="_blank"
                rel="noreferrer"
                className="tooltip-custom me-2"
              >
                <span className="tooltiptext">Contribute on Github</span>
                <button
                  className="btn btn-icon-only btn-github rounded-circle"
                  aria-labelledby="github"
                >
                  <span className="btn-inner--icon btn-fab btn-icon">
                    <FiGithub />
                  </span>
                </button>
              </a>
              <a
                href="https://www.behance.net/shelcia/projects"
                target="_blank"
                rel="noreferrer"
                className="tooltip-custom"
              >
                <span className="tooltiptext">Lookup on Behance</span>
                <button
                  className="btn btn-icon-only btn-facebook rounded-circle"
                  aria-labelledby="behance"
                >
                  <span className="btn-inner--icon btn-fab btn-icon">
                    <FaBehance />
                  </span>
                </button>
              </a>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <div className="copyright">
                &copy; 2022{" "}
                <a
                  href="https://shelcia-dev.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shelcia
                </a>
                .
              </div>
            </Col>
            <Col md={6}>
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="!#" className="nav-link" target="_blank">
                    License
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>      
    </React.Fragment>
  );
};

export default HomeLayout;
