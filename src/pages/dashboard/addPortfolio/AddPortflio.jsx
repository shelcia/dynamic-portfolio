/* eslint-disable indent */
import React, { useContext } from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Pattern2Default } from "../../../components/common/CustomPatterns";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";
import { PortfoliosContext } from "../../../context/PortfoliosContext";
import { apiCommon } from "../../../services/models/CommonModel";

const AddPortfolio = () => {
  return (
    <React.Fragment>
      <section
        className="section section-hero section-shaped pt-2"
        style={{ minHeight: "100vh" }}
      >
        <Pattern2Default />
        <Container>
          <Row className="px-2 pt-5 flex-column">
            <Card
              className="background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "90vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-primary">Add Portfolio</h4>
                <Link to="/dashboard">
                  <Button variant="info">Go Back</Button>
                </Link>
              </div>
              <Template />
            </Card>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AddPortfolio;

const Template = () => {
  const { template } = useParams();

  // console.log(template);

  const [, setPortfolios] = useContext(PortfoliosContext);

  const getPortfolios = () => {
    // eslint-disable-next-line no-undef
    const userId = localStorage.getItem("dynamic-id");
    apiCommon.getSingle(userId, undefined, "portfolios", true).then((res) => {
      // console.log("Portfolio", res);
      if (res.status === "200") {
        setPortfolios(res.message);
      }
    });
  };

  switch (template) {
    case "template1":
      return <Template1 getPortfolios={getPortfolios} />;
    case "template2":
      return <Template2 getPortfolios={getPortfolios} />;
    case "template3":
      return <Template3 getPortfolios={getPortfolios} />;
    case "template4":
      return <div>Template4 onGoing</div>;
    default:
      return <div>Nothing</div>;
  }
};
