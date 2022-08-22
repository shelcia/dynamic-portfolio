import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

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
          <Navbar.Collapse id="responsive-navbar-nav">
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
              <button
                target="_blank"
                href="https://github.com/shelcia/dynamic-portfolio"
                rel="nofollow"
                className="btn btn-icon-only btn-github rounded-circle"
                data-toggle="tooltip"
                data-original-title="Contribute on Github"
              >
                <span className="btn-inner--icon btn-fab btn-icon">
                  <FiGithub />
                </span>
              </button>
              <button
                target="_blank"
                href="https://github.com/shelcia/dynamic-portfolio"
                rel="nofollow"
                className="btn btn-icon-only btn-facebook rounded-circle"
                data-toggle="tooltip"
                data-original-title="Contribute on Github"
              >
                <span className="btn-inner--icon btn-fab btn-icon">
                  <FaBehance />
                </span>
              </button>
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
