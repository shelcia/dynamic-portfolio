import React from "react";
import ExperienceForm from "./ExperienceForm";

const Experience = ({
    experiences,
    setExperiences,
    experienceFormToBeValidate,
    setExperienceFormToBeValidate,
}) =>{
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
        if (experienceFormToBeValidate.size) {
          setExperienceFormToBeValidate(new Map())
        }
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
            <ExperienceForm key ={experience.id}
            delExperience={delExperience}
            experience={experience}
            handleInputs={handleInputs}
            handleCheck={handleCheck}
            experienceFormToBeValidate={experienceFormToBeValidate}
            index={index}
            />
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
}

export default Experience;
