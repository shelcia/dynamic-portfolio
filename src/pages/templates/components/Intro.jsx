import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Intro = ({ portfolioDetails, match }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";
  return (
    <React.Fragment>
      <div
        className={`container-fluid ${className}`}
        style={{ height: "80vh" }}
      >
        <div className="row h-100 px-5">
          <div className="col-sm-6 d-flex flex-column h-100 justify-content-center">
            <h1 className="display-2">Hola Amigo !!</h1>
            <h1>{portfolioDetails.headerTitle}</h1>
            <p className="mt-1">{portfolioDetails.about}</p>
          </div>
          <div className="col-sm-6 d-flex justify-content-center align-items-center">
            <img
              src={`${process.env.REACT_APP_API_LINK}common/portfolio/image/${match.params.id}`}
              width="350px%"
              height="350px"
              style={{
                objectFit: "cover",
                borderRadius: "50ex",
                boxShadow: "3px 3px 3px red",
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
