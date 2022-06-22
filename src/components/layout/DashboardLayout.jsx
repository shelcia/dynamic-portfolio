import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
                <Link className="btn btn-neutral" to="/">
                  <span className="nav-link-inner--text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      {/* <footer className="footer bg-transparent">
        <div className="container bg-transparent">
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2020{" "}
                <a href="!#" target="_blank">
                  Shelcia
                </a>
                .
              </div>
            </div>
            <div className="col-md-6">
              <button
                target="_blank"
                href="https://github.com/shelcia/dynamic-portfolio"
                rel="nofollow"
                className="btn btn-icon-only btn-github rounded-circle"
                data-toggle="tooltip"
                data-original-title="Contribute on Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github"></i>
                </span>
              </button>
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
      </footer> */}
    </React.Fragment>
  );
};

export default DashboardLayout;
