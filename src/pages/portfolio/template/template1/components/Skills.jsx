import React, { useContext } from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";
// import { skills } from "../context/SkillsContext.jsx";

const Skills = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-light" : "bg-white";
  const titleTheme = darkTheme ? "text-white" : "text-dark";
  const theme = darkTheme ? "dark" : "light";

  // console.log(portfolioDetails.skills);
  let col1, col2, col3;

  if (Object.keys(portfolioDetails).length !== 0) {
    col1 = portfolioDetails.skills?.slice(
      0,
      portfolioDetails.skills.length / 3 + 1
    );
    col2 = portfolioDetails.skills?.slice(
      portfolioDetails.skills.length / 3 + 1,
      (portfolioDetails.skills.length * 2) / 3 + 1
    );
    col3 = portfolioDetails.skills?.slice(
      (portfolioDetails.skills.length * 2) / 3 + 1,
      portfolioDetails.skills.length
    );
  }

  return (
    <React.Fragment>
      <Container fluid className={`${className} pb-5`} id="skills">
        <h1 className={`display-3 ${titleTheme} px-3 py-5 text-center`}>
          Skills
        </h1>
        <Row>
          {[col1, col2, col3].map((col, idx) => (
            <Col md={4} key={idx}>
              <ListGroup variant="flush" className="mt-1">
                {portfolioDetails &&
                  col?.map((skill, index) => (
                    <ListGroup.Item key={index} className={`${className}`}>
                      <div
                        className={`skills-border-${portfolioDetails.theme}-${theme}`}
                      >
                        <span>{skill}</span>
                      </div>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Skills;
