import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";
import Footer from "./Footer";

const Works = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const bgTheme = darkTheme ? "dark" : "light";
  const className = darkTheme ?"bg-dark": "bg-white";
  const textC = darkTheme ? "white" : "black";

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
      <Container
        fluid
        className={`bg-${portfolioDetails.theme}-${bgTheme}`}
        id="experience"
      >
        <Row className="px-5 py-5">
          <h1 className="display-3 text-white"> Experience </h1>
        </Row>
        <Row>
          <Col lg={7} className="mx-auto">
            <ul className="timeline">
              {portfolioDetails.exp?.map((port, index) => (
                <li
                  className={`timeline-item rounded ml-3 p-4 shadow ${className}`}
                  key={index}
                >
                  <div className="timeline-arrow"></div>
                  <h1 className={`mb-2 timeline-head text-${textC}`}>{port.name}</h1>
                  <span className="h5 text-gray">
                    {port.start ? convertDate(port.start) : ""} -{" "}
                    {port.end && !port.current ? convertDate(port.end) : ""}
                    {port.current && "Present"}
                  </span>
                  <p className="mt-3 font-weight-light text-gray">
                    {port.desc}
                  </p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Footer portfolioDetails={portfolioDetails} />
      </Container>
    </React.Fragment>
  );
};

export default Works;
