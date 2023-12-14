import React, { useContext, useEffect, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TemplateContext } from "../../context/TemplateContext";
import { Pattern3Default } from "../../components/common/CustomPatterns";
const HomePage = () => {
  return (
    <React.Fragment>
      <section className="wrapper">
        <div className="section section-hero section-shaped">
          <Pattern3Default />
          <div className="page-header">
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col lg={6} className="text-center">
                    <h1 className="text-white display-1">
                      Dynamic Portfolio Builder
                    </h1>
                    <h2 className="display-4 font-weight-normal text-white">
                      Build your Single Page Portfolio website within 5 minutes
                    </h2>
                    <div className="btn-wrapper mt-4">
                      <Link
                        to="/signup"
                        className="btn btn-success btn-icon mt-3 mb-sm-0"
                      >
                        <span className="btn-inner--text">Get Started</span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div className="section features-1">
          <Container>
            <Row>
              <Col md={8} className="mx-auto text-center">
                <span className="badge badge-primary badge-pill mb-3">
                  templates
                </span>
                <h3 className="display-3">Few Templates Available</h3>
                <p className="lead">I am still working on it</p>
              </Col>
            </Row>
            <TemplateCarousel />
          </Container>
        </div>
        <br />
        <br />
      </section>
    </React.Fragment>
  );
};

export default HomePage;

const TemplateCarousel = () => {
  const [templates] = useContext(TemplateContext);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % templates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {templates.map((template, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={template.img} alt="...." />
          <Carousel.Caption>
            <h3 className="text-white">{template.title}</h3>
            <p className="text-light">{template.caption} </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
