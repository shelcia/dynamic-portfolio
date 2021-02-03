import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Skills = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";

  return (
    <React.Fragment>
      <div className={`container-fluid ${className}`} id="skills">
        <div className="row px-5 py-5 flex-column">
          <h1 className="display-3"> Skills </h1>
          <ul className="mt-3">
            {portfolioDetails &&
              portfolioDetails.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
