import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { LOCALHOST_URL } from "../../../../../services/api";
import Topbar from "./TopBar";
// import { social } from "../context/TypoColor";

const Intro = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const bg = darkTheme ? "bg-dark" : "bg-white";

  // const findLogo = (name) => {
  //   const classLogo = social.filter((item) => item.name === name);
  //   // console.log(classLogo);
  //   return classLogo[0].class;
  // };

  const theme = darkTheme ? "dark" : "light";

  const { id } = useParams();

  return (
    <React.Fragment>
      <Topbar portfolioDetails={portfolioDetails} />
      <Row
        style={{ minHeight: "80vh", marginTop: "-10vh" }}
        className={`${bg}`}
      >
        <Col
          md={7}
          className={`d-flex flex-column justify-content-center bg-${portfolioDetails.theme}-${theme} px-5`}
          style={{ minHeight: "80vh" }}
        >
          <div className="mt-5">
            <p className="text-white mb-1">
              Hi! I am <b className="fw-bold">{portfolioDetails.name}</b>
            </p>
            <p className="text-white">{portfolioDetails.headerTitle}</p>
            <p className="text-white">{portfolioDetails.about}</p>
            <div className="d-flex">
              {portfolioDetails.socialLinks?.map((social) => (
                <a
                  href={social.link}
                  key={social.id}
                  className="me-3 text-white"
                >
                  <IconProvider icon={social.name} />
                </a>
              ))}
            </div>
            <div className="text-center">
              {portfolioDetails?.resumeLink && <Button>Download Resume</Button>}
            </div>
          </div>
        </Col>
        <Col className="d-flex align-items-center img-align" md={5}>
          <div className="mt-5">
            <img
              src={`${LOCALHOST_URL}/common/portfolio/image/${id}`}
              width="350px"
              height="350px"
              className={`profile-${theme}`}
              alt=""
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Intro;
