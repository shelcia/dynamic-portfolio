import React, { useContext } from "react";
import { Button, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams } from "react-router";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";
import { CYCLIC_BASE_URL } from "../../../../../services/api";
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
        style={{ minHeight: "80vh", marginTop: "-15vh" }}
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
                <OverlayTrigger
                  key={social.id}
                  placement="top"
                  overlay={<Tooltip>{social.name}</Tooltip>}
                >
                  <a
                    href={social.link}
                    className="me-3 text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconProvider icon={social.name} />
                  </a>
                </OverlayTrigger>
              ))}
            </div>
            <div className="text-center">
              {portfolioDetails.resumeLink && (
                <Button className="btn btn-resume-1">Download Resume</Button>
              )}
            </div>
          </div>
        </Col>
        <Col className="d-flex align-items-center img-align" md={5}>
          <div className="mt-5">
            <img
              src={`${CYCLIC_BASE_URL}/common/portfolio/image/${id}`}
              width="350px"
              height="350px"
              className={`profile-${theme}`}
              alt=""
              loading="lazy"
            />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Intro;
