import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
import ProjectModal from "./ProjectModal";

const Projects = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const bgTheme = darkTheme ? "bg-dark text-white" : "bg-white";
  const titleTheme = darkTheme ? "text-white" : "text-dark";
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <React.Fragment>
      <div className={`container-fluid ${bgTheme}`} id="projects">
        <div className="row px-5 py-5 flex-column">
          <h1 className={`display-3 ${titleTheme}`}> Projects </h1>
          <div className="row mt-4">
            {portfolioDetails.projects?.map((project, index) => (
              <div className="col-md-4" key={index + 1}>
                <div
                  className={`card border border-0 rounded-0 shadow pointer-cursor bg-blue-light`}
                  style={{ height: "200px" }}
                  onClick={() => {
                    setSelectedProject(index);
                    setShow(true);
                  }}
                >
                  <div className="card-body d-flex h-100 justify-content-center align-items-center">
                    <h1 className="card-text text-light">{project.title}</h1>
                  </div>
                </div>
              </div>
            ))}
            {portfolioDetails.projects && (
              <ProjectModal
                selectedProject={selectedProject}
                title={portfolioDetails?.projects[selectedProject]?.title}
                desc={portfolioDetails?.projects[selectedProject]?.desc}
                link={portfolioDetails?.projects[selectedProject]?.link}
                theme={portfolioDetails.theme}
                show={show}
                setShow={setShow}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
