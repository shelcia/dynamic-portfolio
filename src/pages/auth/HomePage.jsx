import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Topbar from "../../components/Topbar";
// import Login from "./Login";
// import Signup from "./Signup";

const HomePage = () => {
  // const [isLogin, setIsLogin] = useState(true);

  return (
    <React.Fragment>
      <ToastContainer />
      <Topbar />
      <header className="section section-lg bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="display-2 text-center mb-5 text-light">
                The tool which allows you to create Dynamic Portfolio with no
                Coding
              </h3>
              <p className="text-center">
                Bonus: Free Hosting on Netlify and it is OPEN SOURCE{" "}
              </p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center mb-5 mb-lg-7 mt-4">
            <div className="col-lg-6 order-lg-2 text-right">
              <button className="btn btn-primary rounded">
                Explore
                <span className="ml-2">
                  <i className="ni ni-spaceship" />
                </span>
              </button>
            </div>
            <div className="col-lg-6 order-lg-2">
              <button className="btn btn-info rounded">
                Github
                <span className="ml-2">
                  <i className="fab fa-github" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="section section-lg bg-dark">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5 mb-lg-7 mt-4">
            <div className="col-lg-6 order-lg-2 text-right">hi</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
