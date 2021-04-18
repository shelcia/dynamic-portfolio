import React from "react";

const Header = () => {
  return (
    <React.Fragment>
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
          <div className="row justify-content-between align-items-center mt-4">
            <div className="col-lg-6 text-right">
              <button className="btn btn-primary rounded">
                Explore
                <span className="ml-2">
                  <i className="ni ni-spaceship" />
                </span>
              </button>
            </div>
            <div className="col-lg-6">
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
    </React.Fragment>
  );
};

export default Header;
