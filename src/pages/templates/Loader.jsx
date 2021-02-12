import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <React.Fragment>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh", width: "100%" }}
      >
        <HashLoader size={200} color="green" />
        <p className="mt-3">Loading Portfolio.....</p>
      </div>
    </React.Fragment>
  );
};

export default Loader;
