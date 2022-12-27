import React, { useContext, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";
import ProjectModal from "./ProjectModal";

const Projects = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);

  const bgTheme = darkTheme ? "bg-dark text-light" : "bg-white";
  const theme = darkTheme ? "dark" : "light";
  const titleTheme = darkTheme ? "text-white" : "text-dark";

  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <React.Fragment>
      <Container fluid className={`${bgTheme}`} id="projects">
        <h1 className={`display-3 ${titleTheme} px-3 py-5`}> Projects </h1>
        <Row className="mt-4 px-3">
          {portfolioDetails?.projects?.map((project, index) => (
            <Col key={index + 1} md={4}>
              <Card
                style={{ height: "200px" }}
                onClick={() => {
                  setSelectedProject(index);
                  setShow(true);
                }}
                className={`border border-0 rounded-0 shadow pointer-cursor bg-blue-${theme}`}
              >
                <Card.Body className="d-flex h-100 justify-content-center align-items-center">
                  <h1 className="text-light">{project.title}</h1>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {portfolioDetails?.projects && (
            <ProjectModal
              selectedProject={selectedProject}
              title={portfolioDetails.projects[selectedProject]?.title}
              desc={portfolioDetails.projects[selectedProject]?.desc}
              link={portfolioDetails.projects[selectedProject]?.link}
              theme={portfolioDetails.theme}
              show={show}
              setShow={setShow}
              pageTheme={darkTheme}
            />
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
