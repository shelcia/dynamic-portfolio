import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-3 shape-default">
            <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
          </div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h1 className="text-white display-1">
                      Dynamic Portfolio Builder
                    </h1>
                    <h2 className="display-4 font-weight-normal text-white">
                      Build you portfolio website within seconds
                    </h2>
                    <div className="btn-wrapper mt-4">
                      <Link
                        to="/signup"
                        className="btn btn-success btn-icon mt-3 mb-sm-0"
                      >
                        <span className="btn-inner--text">Get Started</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div className="section features-1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <span className="badge badge-primary badge-pill mb-3">
                  templates
                </span>
                <h3 className="display-3">Few Templates Available</h3>
                <p className="lead">I am still working on it</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
