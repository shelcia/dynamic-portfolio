import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pattern3Default } from "../../components/common/CustomPatterns";

const NotFoundPage = () => {
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
                    <h1 className="text-white display-1">404 Not Found</h1>
                    <h2 className="display-4 font-weight-normal text-white">
                      We couldn&#39;t find the page you are looking for.
                    </h2>
                    <div className="btn-wrapper mt-4">
                      <Link
                        to="/"
                        className="btn btn-success btn-icon mt-3 mb-sm-0"
                      >
                        <span className="btn-inner--text">Return Home</span>
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
        <br />
        <br />
      </section>
    </React.Fragment>
  );
};

export default NotFoundPage;
