import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Signup from "./Signup";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <React.Fragment>
      <ToastContainer />
      <div
        className="container-fluid background home"
        style={{ height: "100vh" }}
      >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow-lg">
          <Link className="navbar-brand py-2" to="/">
            Dynamic Portflio.
          </Link>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-7">
              <h1> Demo </h1>
            </div>
            <div className="col-sm-5">
              {isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Signup setIsLogin={setIsLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
