import React from "react";

const Experience = ({ experiences, setExperience }) => {
  console.log(experiences);
  const handleInputs = (e, index) => {
    const newExperiences = experiences.map((experience) => {
      if (experience.id === index + 1) {
        const updatedExperience = {
          ...experience,
          [e.target.name]: e.target.value,
        };
        return updatedExperience;
      }
      return experience;
    });
    setExperience(newExperiences);
  };
  const handleCheck = (e, index) => {
    console.log(e.target.value);
    const val = e.target.value === "true" ? false : true;
    const newExperiences = experiences.map((experience) => {
      if (experience.id === index + 1) {
        const updatedExperience = {
          ...experience,
          current: val,
        };
        console.log({ updatedExperience });
        return updatedExperience;
      }
      return experience;
    });
    setExperience(newExperiences);
  };
  const addExperience = (e, index) => {
    e.preventDefault();
    const newExperience = [
      ...experiences,
      {
        id: index + 2,
        title: "",
        desc: "",
        link: "",
      },
    ];
    setExperience(newExperience);
  };
  const delExperience = (e, index) => {
    e.preventDefault();
    const newExperience = experiences.filter(
      (experience) => experience.id !== index + 1
    );
    setExperience(newExperience);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="skills" className="h3">
          Experience
        </label>
        {experiences.map((experience, index) => (
          <div key={index} className="mt-2">
            <label htmlFor="name">Company/Institute Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Amazon"
              value={experience.title}
              onChange={(e) => handleInputs(e, index)}
              required
            />
            <label htmlFor="title">Description</label>
            <input
              type="text"
              name="desc"
              className="form-control mb-3"
              placeholder="lorem ipsum"
              value={experience.desc}
              onChange={(e) => handleInputs(e, index)}
              required
            />
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="start">Start Date</label>
                <input
                  type="date"
                  name="start"
                  className="form-control mb-3"
                  placeholder="22-02-2016"
                  value={experience.start}
                  onChange={(e) => handleInputs(e, index)}
                  required
                />
              </div>
              {!experience.current && (
                <div className="col-sm-6">
                  <label htmlFor="end">End Date</label>
                  <input
                    type="date"
                    name="end"
                    className="form-control mb-3"
                    placeholder="22-02-2016"
                    value={experience.end}
                    onChange={(e) => handleInputs(e, index)}
                  />
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
                  onChange={(e) => handleCheck(e, index)}
                />
                Currently Working
              </label>
            </div>

            <div className="text-right w-100">
              {index !== 0 && (
                <button className="btn normal py-1 px-3 mr-2" type="button">
                  <i
                    className="fas fa-minus"
                    style={{ fontSize: "25px" }}
                    onClick={(e) => delExperience(e, index)}
                    title="Delete Experience"
                  />
                </button>
              )}
              <button className="btn normal py-1 px-3" type="button">
                <i
                  className="fas fa-plus"
                  style={{ fontSize: "25px" }}
                  onClick={(e) => addExperience(e, index)}
                  title="Add Experience"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Experience;
