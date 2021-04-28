import React from "react";
import { Link } from "react-router-dom";

const Topbar = ({ auth = false }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-dark shadow-box">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b>ILLAKA.</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-primary"
            aria-controls="navbar-primary"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-primary">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  ILLAKA.
                  {/* <a href="/">
                    <img
                      src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/brand/blue.png"
                      alt=""
                    />
                  </a> */}
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar-primary"
                    aria-controls="navbar-primary"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="!#"
                  id="navbar-primary_dropdown_1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Templates
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbar-primary_dropdown_1"
                >
                  <a className="dropdown-item" href="!#">
                    Action
                  </a>
                  <a className="dropdown-item" href="!#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="!#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              {!auth && (
                <li className="nav-item">
                  <Link className="nav-link pt-0" to="/login">
                    <button className="btn btn-primary">
                      <i className="ni ni-single-02 mr-2" />
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
