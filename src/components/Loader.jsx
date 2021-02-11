import React from "react";
import HashLoader from "react-spinners/HashLoader";

const ReactLoader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <HashLoader size={100} color="green" />
      </div>
    </React.Fragment>
  );
};

export default ReactLoader;
