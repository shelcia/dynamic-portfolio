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
              <div class="form-group">
                <label for="email">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  id="email"
                />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  id="pwd"
                />
              </div>
              <div class="form-group form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
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
