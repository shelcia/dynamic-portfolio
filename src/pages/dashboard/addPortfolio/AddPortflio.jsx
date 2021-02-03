import React, { useState } from "react";
import Profile from "./Profile";
import SkillSelect from "./SkillsSelect";

const AddPortfolio = () => {
  const [file, setFile] = useState(null);

  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row px-2 pt-5 flex-column">
            <div
              className="card bg-dark py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "90vh" }}
            >
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Header Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full stack developer"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="about">About:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="I am freelancer aka coolest guy"
                    required
                  />
                </div>
                <Profile setFile={setFile} file={file} />
                <SkillSelect />
                <div className="text-right">
                  <button type="submit" className="btn normal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPortfolio;
