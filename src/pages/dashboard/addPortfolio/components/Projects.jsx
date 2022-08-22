import React from "react";
import { FaMinus } from "react-icons/fa";
import { CustomSimpleInput } from "../../../../components/common/CustomInputs";

const Projects = ({ projects, setProjects }) => {
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
          <div key={index} className="mt-2">
            <CustomSimpleInput
              label="Project Title"
              name="title"
              value={project.title}
              placeholder="Attendance Management"
              onChange={(e) => handleInputs(e, project.id)}
            />
            <CustomSimpleInput
              label="Description"
              name="desc"
              value={project.desc}
              placeholder="lorem ipsum"
              onChange={(e) => handleInputs(e, project.id)}
            />
            <CustomSimpleInput
              label="Project Link"
              name="link"
              value={project.link}
              placeholder="https://github.com/shelcia/dynamic-portflio"
              onChange={(e) => handleInputs(e, project.id)}
            />
            <div className="text-right w-100">
              {index !== 0 && (
                <button
                  className="btn btn-danger py-1 px-3 mb-2"
                  type="button"
                  onClick={(e) => delProject(e, project.id)}
                  title="Delete Project"
                >
                  <FaMinus />
                </button>
              )}
            </div>
          </div>
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
};

export default Projects;
