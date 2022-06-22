import React from "react";
import { Link, useParams } from "react-router-dom";
import Template1 from "./templates/Template1";

const AddPortfolio = () => {
  return (
    <React.Fragment>
      <div
        className="section section-hero section-shaped pt-2"
        style={{ minHeight: "100vh" }}
      >
        <div className="shape shape-style-2 shape-default">
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

        <div className="container">
          <div className="row px-2 pt-5 flex-column">
            <div
              className="card background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "90vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-primary">Add Portfolio</h4>
                <Link to="/dashboard">
                  <button type="button" className="btn btn-info">
                    Go Back
                  </button>
                </Link>
              </div>
              <Template />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPortfolio;

const Template = () => {
  const { template } = useParams();

  console.log(template);

  switch (template) {
    case "template1":
      return <Template1 />;
    case "template2":
      return <div>Template2 onGoing</div>;
    case "template3":
      return <div>Template3 onGoing</div>;
    default:
      return <div>Nothing</div>;
  }
};
