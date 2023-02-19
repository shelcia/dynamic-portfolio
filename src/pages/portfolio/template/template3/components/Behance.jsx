/* eslint-disable quotes */
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Behance = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const textTheme = darkTheme ? "text-white" : "text-dark";

  const [designs, setDesigns] = useState([]);

  useEffect(() => {
    const url = portfolioDetails?.behanceRssLink;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        if (results.status === "ok") {
          setDesigns(results.items);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    fetchData();
  }, [portfolioDetails?.behanceRssLink]);

  // console.log(designs[0]?.content.split('src="')[1].split('"><br>')[0]);

  return (
    <React.Fragment>
      <Row className="mx-0 behance-cards px-4" id="behance">
        {designs &&
          designs.map((project, index) => (
            <Col
              md="4"
              className="mb-3 px-1 py-0"
              data-aos="zoom-in"
              key={index}
            >
              <a href={project.link} target={"_blank"} rel="noreferrer">
                <Card className="project-card border-0">
                  <Card.Img
                    src={
                      project?.content?.split('src="')[1]?.split('"><br>')[0]
                    }
                    alt="Card image"
                    height={200}
                    width={"100%"}
                    style={{ objectFit: "cover" }}
                  />

                  <Card.ImgOverlay
                    style={{
                      backgroundColor: darkTheme
                        ? "rgb(0,0,0,0.25)"
                        : "rgb(255,255,255,0.5)",
                    }}
                  >
                    <Card.Title className={textTheme}>
                      {project.title}
                    </Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </a>
            </Col>
          ))}
      </Row>
    </React.Fragment>
  );
};

export default Behance;
