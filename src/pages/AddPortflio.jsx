import React from "react";

const AddPortfolio = () => {
  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="pwd"
                />
              </div>
              <div className="form-group form-check">
                <label className="form-check-label">
                  <input className="form-check-input" type="checkbox" />{" "}
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-6">hi</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPortfolio;
