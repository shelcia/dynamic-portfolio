import React from "react";

const Topbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <a className="navbar-brand" href="/">
          Shelcia
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
