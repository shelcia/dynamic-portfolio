import React, { useContext } from "react";
import { useParams } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { social } from "../context/TypoColor";

const Intro = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-light";

  const findLogo = (name) => {
    const classLogo = social.filter((item) => item.name === name);
    // console.log(classLogo);
    return classLogo[0].class;
  };

  const { id } = useParams();

  return (
    <React.Fragment>
      <div
        className={`container-fluid ${className}`}
        style={{ minHeight: "80vh" }}
      >
        <div className="row  px-5 pt-4" style={{ minHeight: "80vh" }}>
          <div
            className="col-sm-7 d-flex flex-column justify-content-center"
            style={{ minHeight: "80vh" }}
          >
            <h1 className={`display-2 text-shadow-${portfolioDetails.theme}`}>
              {portfolioDetails.name}
            </h1>
            <h1 className={`text-${portfolioDetails.theme}`}>
              {portfolioDetails.headerTitle}
            </h1>
            <p className="mt-1">{portfolioDetails.about}</p>
            <div className="d-flex">
              {portfolioDetails.socialLinks.map((social) => (
                <a href={social.link} key={social.id}>
                  <i
                    className={
                      social.name ? `${findLogo(social.name)} social` : ""
                    }
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="col-sm-5 d-flex justify-content-center align-items-center py-4">
            <img
              src={`${process.env.REACT_APP_API_LINK}common/portfolio/image/${id}`}
              width="350px"
              height="350px"
              className={`profile-${portfolioDetails.theme}`}
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
