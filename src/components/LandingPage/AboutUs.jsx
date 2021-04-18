import React from "react";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="section section-lg bg-dark pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5 mb-lg-7">
            <div className="col-sm-6 d-flex justify-content-center align-items-left flex-column">
              <h1
                className="display-1-lg text-tertiary"
                style={{ fontSize: "10rem" }}
              >
                9
              </h1>
              <p className="lead">No of Portfolios made with Illaka</p>
            </div>
            <div className="col-sm-6 text-light d-flex justify-content-center align-items-left flex-column">
              <h2>Features</h2>
              <hr />
              <ul>
                <li className="bg-dark mb-2">Upto 5 Portfolios per User</li>
                <li className="bg-dark mb-2">Editable as user wishes</li>
                <li className="bg-dark mb-2">Downloadable Portfolios</li>
              </ul>
              <div>
                <button className="btn btn-tertiary rounded mt-4">
                  Explore Templates
                  <span className="ml-2">
                    <i className="ni ni-spaceship" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
