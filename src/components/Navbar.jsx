import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar bg-dark">
        <Link className="navbar-brand py-2 text-primary" to="/">
          Dynamic Portflio.
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">Logout</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
