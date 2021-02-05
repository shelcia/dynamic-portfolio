import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Works = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";

  const convertDate = (date) => {
    const dates = new Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(dates);
    return formattedDate;
  };

  return (
    <React.Fragment>
      <div className={`container-fluid bg-${portfolioDetails.theme}`}>
        <div className="row px-5 py-5">
          <h1 className="display-3"> Works </h1>
        </div>

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <ul className="timeline">
              {portfolioDetails.exp.map((port, index) => (
                <li
                  className={`timeline-item bg-white rounded ml-3 p-4 shadow ${className}`}
                  key={index}
                >
                  <div className="timeline-arrow"></div>
                  <h2 className="h5 mb-0">{port.name}</h2>
                  <span className="small text-gray">
                    <i className="far fa-clock mr-1"></i>
                    {port.start ? convertDate(port.start) : ""} -{" "}
                    {port.end ? convertDate(port.end) : ""}
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    {port.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
