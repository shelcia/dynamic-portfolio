import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ProjectModal from "./ProjectModal";

const Projects = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-white" : "bg-white";
  return (
    <React.Fragment>
      <div
        className={`container-fluid bg-${portfolioDetails.theme}`}
        id="projects"
      >
        <div className="row px-5 py-5 flex-column">
          <h1 className="display-3"> Projects </h1>
          <div className="card-columns mt-4">
            {portfolioDetails.projects.map((project, index) => (
              <div
                className={`card border border-0 rounded-0 shadow ${className} pointer-cursor`}
                key={index + 1}
                style={{ height: "200px" }}
                title="Click to know more"
                data-toggle="modal"
                data-target="#projectModal"
              >
                <div
                  className="card-body d-flex h-100 text-right"
                  style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
                >
                  <h1 className="card-text">{project.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProjectModal />
    </React.Fragment>
  );
};

export default Projects;
