import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Toggle from "./Toggle";

const Topbar = () => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme
    ? "navbar navbar-expand-md bg-dark navbar-dark"
    : "navbar navbar-expand-md bg-light navbar-light";
  return (
    <React.Fragment>
      <nav className={className}>
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
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                Works
              </a>
            </li>
            <li className="nav-item ml-4">
              <Toggle />
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
