import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Intro = ({ portfolioDetails, match }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";
  return (
    <React.Fragment>
      <div
        className={`container-fluid ${className}`}
        style={{ minHeight: "80vh" }}
      >
        <div className="row  px-5 pt-4" style={{ minHeight: "80vh" }}>
          <div
            className="col-sm-6 d-flex flex-column justify-content-center"
            style={{ minHeight: "80vh" }}
          >
            <h1 className="display-2">Hola Amigo !!</h1>
            <h1 className={`text-${portfolioDetails.color}`}>
              {portfolioDetails.headerTitle}
            </h1>
            <p className="mt-1">{portfolioDetails.about}</p>
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center py-4">
            <img
              src={`${process.env.REACT_APP_API_LINK}common/portfolio/image/${match.params.id}`}
              width="350px%"
              height="350px"
              className={`profile-${portfolioDetails.color}`}
              style={{
                objectFit: "cover",
                borderRadius: "50ex",
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
