import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink className="nav-link" to="#projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#works">
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Resume
              </NavLink>
            </li>
            <li>
              <Toggle />
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Topbar;
