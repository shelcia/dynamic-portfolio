import React from "react";
import ProjectForm from "./ProjectForm";

const Projects = ({
    projects,
    setProjects,
    projectFormToBeValidate,
    setProjectFormToBeValidate,
}) =>{
    const handleInputs = (e, id) => {
        const newProjects = projects.map((project) => {
          if (project.id === id) {
            const updatedProject = {
              ...project,
              [e.target.name]: e.target.value,
            };
            return updatedProject;
          }
          return project;
        });
    
        setProjects(newProjects);
        if (projectFormToBeValidate.size) {
            setProjectFormToBeValidate(new Map())
          }
      };
      const addProject = (e) => {
        e.preventDefault();
        const newProject = [
          ...projects,
          {
            id: Date.now(),
            title: "",
            desc: "",
            links: "",
          },
        ];
        setProjects(newProject);
      };
      const delProject = (e, id) => {
        e.preventDefault();
        const newProject = projects.filter((project) => project.id !== id);
        setProjects(newProject);
      };
      return (
        <React.Fragment>
          <div className="form-group">
            <label htmlFor="skills" className="lead">
              Projects
            </label>
            {projects.map((project, index) => (
              <ProjectForm key ={project.id}
                delProject={delProject}
                project={project}
                handleInputs={handleInputs}
                projectFormToBeValidate={projectFormToBeValidate}
                index={index}
                />
            ))}
            <div className="text-right w-100">
              <button
                className="btn btn-neutral py-1 px-3"
                type="button"
                onClick={(e) => addProject(e)}
                title="Add Project"
              >
                Add Project
              </button>
            </div>
          </div>
        </React.Fragment>
      );
}

export default Projects;