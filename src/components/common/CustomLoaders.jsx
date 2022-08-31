import React from "react";
import { LineWave } from "react-loader-spinner";

export const ComponentLoader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <LineWave color="#5e72e4" />
      </div>
    </React.Fragment>
  );
};

export const PageLoader = ({ content }) => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh", width: "100%" }}
      >
        <LineWave height="300" width="300" color="#5e72e4" />
        <p className="mt-3 lead">Loading {content}.....</p>
      </div>
    </React.Fragment>
  );
};
