import React, { useContext } from "react";
import { useParams } from "react-router";
import { LOCALHOST_URL } from "../../../../../services/api";
// import { ThemeContext } from "../context/ThemeContext";
// import { social } from "../context/TypoColor";

const Intro = ({ portfolioDetails }) => {
  // const [darkTheme] = useContext(ThemeContext);
  // const className = darkTheme ? "bg-dark text-light" : "bg-light";

  // const findLogo = (name) => {
  //   const classLogo = social.filter((item) => item.name === name);
  //   // console.log(classLogo);
  //   return classLogo[0].class;
  // };

  const theme = "light";

  const { id } = useParams();

  return (
    <React.Fragment>
      {/* <div
        className={`container-fluid ${className}`}
        style={{ minHeight: "80vh" }}
      > */}
      <div className="row" style={{ minHeight: "80vh" }}>
        <div
          className={`col-md-7 d-flex flex-column justify-content-center bg-${portfolioDetails.theme}-${theme} px-5`}
          style={{ minHeight: "80vh" }}
        >
          <p className={`text-${theme} mb-1`}>
            Hi! I am <b className="fw-bold">{portfolioDetails.name}</b>
          </p>
          <p className={`text-${theme}`}>{portfolioDetails.headerTitle}</p>
          <p className={`text-${theme}`}>{portfolioDetails.about}</p>
          <div className="d-flex">
            {/* {portfolioDetails.socialLinks?.map((social) => (
              <a href={social.link} key={social.id}>
                <i
                  className={
                    social.name ? `${findLogo(social.name)} social` : ""
                  }
                />
              </a>
            ))} */}
          </div>
        </div>
        <div className="col-md-5 d-flex align-items-center img-align">
          <img
            src={`${LOCALHOST_URL}/common/portfolio/image/${id}`}
            width="350px"
            height="350px"
            className={`profile-${theme}`}
            alt=""
          />
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Intro;
