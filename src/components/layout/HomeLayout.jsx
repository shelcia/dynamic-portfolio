import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/argon.css";
import "../../styles/style.css";
import { FaBehance } from "react-icons/fa";

const HomeLayout = () => {
  return (
    <React.Fragment>
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2"
      >
        <div className="container">
          <Link className="navbar-brand mr-lg-5" to="/">
            D.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_global"
            aria-controls="navbar_global"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <Link className="navbar-brand mr-lg-5" to="/">
                    D.
                  </Link>
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <Link className="btn btn-neutral" to="/login">
                  <span className="nav-link-inner--text">Login</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-neutral btn-icon" to="/signup">
                  <span className="nav-link-inner--text">Signup</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="footer">
        <div className="container">
          <div className="row row-grid align-items-center mb-5">
            <div className="col-lg-6">
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
            </div>
            <div className="col-lg-6 text-lg-end btn-wrapper">
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
            </div>
          </div>
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2022{" "}
                <a href="www.shelcia-dev.me" target="_blank">
                  Shelcia
                </a>
                .
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a href="!#" className="nav-link" target="_blank">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default HomeLayout;
