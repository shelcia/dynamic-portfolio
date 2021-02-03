import React from "react";

const Projects = ({ projects, setProjects }) => {
  const handleInputs = (e, index) => {
    const newProjects = projects.map((project) => {
      if (project.id === index + 1) {
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
  const addProject = (e, index) => {
    e.preventDefault();
    const newProject = [
      ...projects,
      {
        id: index + 2,
        title: "",
        desc: "",
        link: "",
      },
    ];
    setProjects(newProject);
  };
  const delProject = (e, index) => {
    e.preventDefault();
    const newProject = projects.filter((project) => project.id !== index + 1);
    setProjects(newProject);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="skills" className="h3">
          Projects
        </label>
        {projects.map((project, index) => (
          <div key={index} className="mt-2">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              name="title"
              className="form-control mb-3"
              placeholder="Attendance Management"
              value={project.title}
              onChange={(e) => handleInputs(e, index)}
              required
            />
            <label htmlFor="title">Description</label>
            <input
              type="text"
              name="desc"
              className="form-control mb-3"
              placeholder="lorem ipsum"
              value={project.desc}
              onChange={(e) => handleInputs(e, index)}
              required
            />
            <label htmlFor="title">Project Link</label>
            <input
              type="text"
              name="link"
              className="form-control mb-3"
              placeholder="https://github.com/shelcia/dynamic-portflio"
              value={project.link}
              onChange={(e) => handleInputs(e, index)}
            />
            <div className="text-right w-100">
              {index !== 0 && (
                <button className="btn normal py-1 px-3 mr-2">
                  <i
                    className="fas fa-minus"
                    style={{ fontSize: "25px" }}
                    onClick={(e) => delProject(e, index)}
                    title="Delete Project"
                  />
                </button>
              )}
              <button className="btn normal py-1 px-3">
                <i
                  className="fas fa-plus"
                  style={{ fontSize: "25px" }}
                  onClick={(e) => addProject(e, index)}
                  title="Add Project"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Projects;
