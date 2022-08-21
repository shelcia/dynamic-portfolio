import React, { useContext } from "react";
import { ThemeContext } from "../../../../../context/ThemeContext";
// import { skills } from "../context/SkillsContext.jsx";

const Skills = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-white";
  const titleTheme = darkTheme ? "text-white" : "text-dark";

  // console.log(portfolioDetails.skills);
  if (portfolioDetails !== {}) {
    var col1 = portfolioDetails.skills?.slice(
      0,
      portfolioDetails.skills?.length / 3 + 1
    );
    var col2 = portfolioDetails.skills?.slice(
      portfolioDetails.skills?.length / 3 + 1,
      (portfolioDetails.skills?.length * 2) / 3 + 1
    );
    var col3 = portfolioDetails.skills?.slice(
      (portfolioDetails.skills?.length * 2) / 3 + 1,
      portfolioDetails.skills?.length
    );
  }

  // const findLogo = (name) => {
  //   const classLogo = skills.filter((item) => item.name === name);
  //   // console.log(classLogo);
  //   return classLogo[0].logo;
  // };

  return (
    <React.Fragment>
      <div className={`container-fluid ${className}`} id="skills">
        <div className="px-5 py-5 flex-column">
          <h1 className={`display-3 ${titleTheme} text-center`}> Skills </h1>
          <div className="row">
            {[col1, col2, col3].map((col, idx) => (
              <div className="col-md-4" key={idx}>
                <ul className="mt-1 list-group list-group-flush">
                  {portfolioDetails &&
                    col?.map((skill, index) => (
                      <li
                        key={index}
                        className={`list-group-item ${className}`}
                      >
                        <div className="skills-border-blue">
                          <span>{skill}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
