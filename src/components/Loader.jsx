import React from "react";
import HashLoader from "react-spinners/HashLoader";

const ReactLoader = ({ content }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center">
        <HashLoader size={100} color="green" />
        <p className="mt-3">{content}</p>
      </div>
    </React.Fragment>
  );
};

export default ReactLoader;
