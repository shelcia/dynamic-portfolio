import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { skills } from "../context/SkillsContext.jsx";

const Skills = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";
  // console.log(portfolioDetails.skills);
  if (portfolioDetails !== {}) {
    var col1 = portfolioDetails.skills.slice(
      0,
      portfolioDetails.skills.length / 2
    );
    var col2 = portfolioDetails.skills.slice(
      portfolioDetails.skills.length / 2,
      portfolioDetails.skills.length
    );
  }

  const findLogo = (name) => {
    const classLogo = skills.filter((item) => item.name === name);
    // console.log(classLogo);
    return classLogo[0].logo;
  };

  return (
    <React.Fragment>
      <div className={`container-fluid ${className}`} id="skills">
        <div className="row px-5 py-5 flex-column">
          <h1 className="display-3"> Skills </h1>
          <div className="row">
            <div className="col-sm-6">
              <ul className="mt-3 list-group list-group-flush">
                {portfolioDetails &&
                  col1.map((skill, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${className} border border-0 text-15 `}
                    >
                      <i
                        className={`${findLogo(skill)} icons skillicons`}
                        style={{ fontFamily: "devicon !important" }}
                      ></i>{" "}
                      <span className="pl-5">{skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="mt-3 list-group list-group-flush">
                {portfolioDetails &&
                  col2.map((skill, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${className} border border-0 text-15 `}
                    >
                      <i
                        className={`${findLogo(skill)} icons skillicons`}
                        style={{ fontFamily: "devicon !important" }}
                      ></i>{" "}
                      <span className="pl-5">{skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
