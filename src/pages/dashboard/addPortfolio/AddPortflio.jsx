import React, { useRef, useState } from "react";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import SkillSelect from "./SkillsSelect";

const AddPortfolio = () => {
  const [file, setFile] = useState(null);
  const name = useRef("");
  const headerTitle = useRef("");
  const about = useRef("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "",
      desc: "",
      link: "",
    },
  ]);
  const [experiences, setExperience] = useState([
    {
      id: 1,
      name: "",
      desc: "",
      start: "",
      end: "",
      current: false,
    },
  ]);

  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <div className="row px-2 pt-5 flex-column">
            <div
              className="card bg-dark py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "90vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="display-3 text-primary">Add Portfolio</h2>
                <button type="button" className="btn normal">
                  Go Back
                </button>
              </div>
              <hr style={{ borderColor: "#fff5" }} />
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="h3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    ref={name}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd" className="h3">
                    Header Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full stack developer"
                    ref={headerTitle}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="about" className="h3">
                    About
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="I am freelancer aka coolest guy"
                    ref={about}
                    required
                  />
                </div>
                <Profile setFile={setFile} file={file} />
                <SkillSelect
                  selectedSkills={selectedSkills}
                  setSelectedSkills={setSelectedSkills}
                />
                <Projects projects={projects} setProjects={setProjects} />
                <Experience
                  experiences={experiences}
                  setExperience={setExperience}
                />
                <div className="text-right mt-5 mb-4">
                  <button type="submit" className="btn normal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPortfolio;
