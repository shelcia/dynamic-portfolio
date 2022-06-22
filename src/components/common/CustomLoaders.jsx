import React from "react";
import { LineWave } from "react-loader-spinner";

export const ComponentLoader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <LineWave color="grey" />
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
        <LineWave color="grey" />
        <p className="mt-3">Loading {content}.....</p>
      </div>
    </React.Fragment>
  );
};
