import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

const ProjectModal = ({ title, desc, link, theme }) => {
  // const [darkTheme] = useContext(ThemeContext);
  // const className = darkTheme ? "bg-dark text-white" : "bg-white";
  return (
    <React.Fragment>
      <div className="modal fade" id="projectModal">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          {/* <div className={`modal-content ${className}`}> */}
          <div className="modal-header border border-0">
            <h2 className="modal-title">{title}</h2>
            <button
              type="button"
              className={`close text-${theme}`}
              data-dismiss="modal"
              style={{
                textShadow: "none",
                outline: "none",
                fontSize: "2rem",
              }}
            >
              &times;
            </button>
          </div>

          <div className="modal-body">
            <p>{desc}</p>
            {link && (
              <a href={link} target="blank">
                {link}
              </a>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default ProjectModal;
