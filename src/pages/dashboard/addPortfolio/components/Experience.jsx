import React from "react";
import { FaMinus } from "react-icons/fa";
import { CustomSimpleInput } from "../../../../components/common/CustomInputs";

const Experience = ({ experiences, setExperiences }) => {
  const handleInputs = (e, id) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        const updatedExperience = {
          ...experience,
          [e.target.name]: e.target.value,
        };
        return updatedExperience;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };
  const handleCheck = (e, id) => {
    const val = e.target.value === "true" ? false : true;
    const newExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        const updatedExperience = {
          ...experience,
          current: val,
        };
        return updatedExperience;
      }
      return experience;
    });
    setExperiences(newExperiences);
  };
  const addExperience = (e) => {
    e.preventDefault();
    const newExperience = [
      ...experiences,
      {
        id: Date.now(),
        name: "",
        desc: "",
        start: "",
        end: "",
        current: false,
      },
    ];
    setExperiences(newExperience);
  };
  const delExperience = (e, id) => {
    e.preventDefault();
    const newExperience = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(newExperience);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="skills" className="lead">
          Experience
        </label>
        {experiences.map((experience, index) => (
          <div key={index} className="mt-2">
            <CustomSimpleInput
              label="Company/Institute Name"
              name="name"
              value={experience.name}
              placeholder="Amazon"
              onChange={(e) => handleInputs(e, experience.id)}
            />
            {/* <label htmlFor="name">Company/Institute Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Amazon"
              value={experience.title}
              onChange={(e) => handleInputs(e, experience.id)}
              required
            /> */}
            <CustomSimpleInput
              label="Description"
              name="desc"
              value={experience.desc}
              placeholder="lorem ipsum"
              onChange={(e) => handleInputs(e, experience.id)}
            />
            {/* <label htmlFor="title">Description</label>
            <input
              type="text"
              name="desc"
              className="form-control mb-3"
              placeholder="lorem ipsum"
              value={experience.desc}
              onChange={(e) => handleInputs(e, experience.id)}
              required
            /> */}
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="start">Start Date</label>
                <div className="input-group">
                  <input
                    type="date"
                    name="start"
                    className="form-control mb-3"
                    placeholder="22-02-2016"
                    value={experience.start}
                    onChange={(e) => handleInputs(e, experience.id)}
                    required
                  />
                </div>
              </div>
              {!experience.current && (
                <div className="col-sm-6">
                  <label htmlFor="end">End Date</label>
                  <div className="input-group">
                    <input
                      type="date"
                      name="end"
                      className="form-control mb-3"
                      placeholder="22-02-2016"
                      value={experience.end}
                      onChange={(e) => handleInputs(e, experience.id)}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="current"
                  value={experience.current}
                  onChange={(e) => handleCheck(e, experience.id)}
                />
                Currently Working
              </label>
            </div>

            <div className="text-right w-100">
              {index !== 0 && (
                <button
                  className="btn btn-danger py-1 px-3 mr-2"
                  type="button"
                  onClick={(e) => delExperience(e, experience.id)}
                  title="Delete Experience"
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
            title="Add Experience"
            onClick={(e) => addExperience(e)}
          >
            Add Experience
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
