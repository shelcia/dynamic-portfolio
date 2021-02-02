import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Works = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";

  return (
    <React.Fragment>
      <div className={`container-fluid bg-${portfolioDetails.color}`}>
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
                    <i className="fa fa-clock-o mr-1"></i>
                    {port.start} -{port.end}
                  </span>
                  <p className="text-small mt-2 font-weight-light">
                    {port.desc}
                  </p>
                </li>
              ))}
              {/* <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">Title of section 1</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>21 March, 2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....
                </p>
              </li>
              <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">Title of section 2</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>5 April, 2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper.
                </p>
                <p className="text-small mt-2 font-weight-light">
                  Libero expedita explicabo eius fugiat quia aspernatur autem
                  laudantium error architecto recusandae natus sapiente sit nam
                  eaque, consectetur porro molestiae ipsam! Deleniti.
                </p>
              </li>
              <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">Title of section 3</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>18 August, 2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....
                </p>
              </li>
              <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">Title of section 4</h2>
                <span className="small text-gray">
                  <i className="fa fa-clock-o mr-1"></i>10 October, 2019
                </span>
                <p className="text-small mt-2 font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....
                </p>
                <p className="text-small mt-2 font-weight-light">
                  Voluptatibus temporibus esse illum eum aspernatur, fugiat
                  suscipit natus! Eum corporis illum nihil officiis tempore.
                  Excepturi illo natus libero sit doloremque, laborum molestias
                  rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                </p>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Works;
