import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProjectModal = () => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-white" : "bg-white";
  return (
    <React.Fragment>
      <div className="modal fade" id="projectModal">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className={`modal-content ${className}`}>
            <div className="modal-header border border-0">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">Modal body..</div>

            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectModal;
