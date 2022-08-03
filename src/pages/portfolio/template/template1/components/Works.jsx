import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

const Works = ({ portfolioDetails }) => {
  // const [darkTheme] = useContext(ThemeContext);
  // const className = darkTheme ? "bg-dark text-light" : "bg-light";

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
      <div
        className={`container-fluid bg-${portfolioDetails.theme}`}
        id="works"
      >
        <div className="row px-5 py-5">
          <h1 className="display-3"> Works </h1>
        </div>

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <ul className="timeline">
              {portfolioDetails.exp?.map((port, index) => (
                <li
                  // className={`timeline-item bg-white rounded ml-3 p-4 shadow ${className}`}
                  key={index}
                >
                  <div className="timeline-arrow"></div>
                  <h1 className="mb-2">{port.name}</h1>
                  <span className="h5">
                    <i className="far fa-clock mr-2"></i>
                    {port.start ? convertDate(port.start) : ""} -{" "}
                    {port.end && !port.current ? convertDate(port.end) : ""}
                    {port.current && "Present"}
                  </span>
                  <p className="text-small mt-3 font-weight-light">
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
