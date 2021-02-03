import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { skills } from "../../templates/context/SkillsContext";

const SkillSelect = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [skill, setSkill] = useState("");

  useEffect(() => {
    const filterSkills = () => {
      if (skill === "") {
        setFiltered([]);
        return;
      }
      const filtered = skills.filter(
        (skills) => skills.name.toLowerCase().indexOf(skill.toLowerCase()) === 0
      );
      setFiltered(filtered);
    };
    filterSkills();
  }, [skill]);

  const addSkill = (skill) => {
    if (skill in selectedSkills) {
      toast.error("You cannot select the skill you already chose xD");
      return;
    }
    setSelectedSkills([...selectedSkills, skill.name]);
  };
  const delSkill = (skill) => {
    const newSkillsets = selectedSkills.filter((skills) => skills !== skill);
    setSelectedSkills(newSkillsets);
  };

  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="skills">Skills:</label>
        <div className="text-light">
          {selectedSkills.map((skill, index) => (
            <span className="badge badge-success px-2 py-1 mr-2" key={index}>
              {skill}
              <i
                className="fas fa-times pointer-cursor ml-2"
                onClick={() => delSkill(skill)}
              />
            </span>
          ))}
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Start typing out the skills and click to pick them"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <ul className="list-group shadow-lg">
          {filtered !== [] &&
            filtered.map((skill, index) => (
              <li
                key={index}
                className="list-group-item bg-dark pointer-cursor"
                onClick={() => addSkill(skill)}
              >
                {skill.name}
              </li>
            ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SkillSelect;
