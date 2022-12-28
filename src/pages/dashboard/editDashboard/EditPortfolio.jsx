import React, { useContext, useEffect, useState } from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PageLoader } from "../../../components/common/CustomLoaders";
import { PortfoliosContext } from "../../../context/PortfoliosContext";
import { apiCommon } from "../../../services/models/CommonModel";
import Template1 from "../addPortfolio/templates/Template1";
import Template2 from "../addPortfolio/templates/Template2";
import Template3 from "../addPortfolio/templates/Template3";


const EditPortfolio = () => {
  const { id } = useParams();
  const [portfolioDetails, setPortfolioDetails] = useState({
    name: "",
    headerTitle: "",
    resumeLink: "",
    about: "",
  });
  const [template, setTemplate] = useState();

  
  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = () =>
      apiCommon.getSingle(id, ac.signal, "portfolio", true).then((res) => {
        if (res.status === "200") {
          setPortfolioDetails(res.message);
          setTemplate(res.message.template);

        }
      });
  if (!portfolioDetails.length) getPortfolio();
    return () => ac.abort();
  }, [id, portfolioDetails.length]);
    

  return (
    <React.Fragment>
      <section
        className="section section-hero section-shaped pt-2"
        style={{ minHeight: "100vh" }}
      >
        
          <div className="shape shape-style-1 shape-default">
            <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
          </div>
        <Container>
          <Row className="px-2 pt-5 flex-column">
            <Card
              className="background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "90vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-primary">Edit Portfolio</h4>
                <Link to="/dashboard">
                  <Button variant="info">Go Back</Button>
                </Link>
              </div>
              {!template ? (
        <PageLoader />
      ) :<Template template={template} portfolioDetails={portfolioDetails} />}
            </Card>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
export default EditPortfolio;

const Template = (props) => {
  const [, setPortfolios] = useContext(PortfoliosContext);

  const getPortfolios = () => {
    const userId = localStorage.getItem("dynamic-id");
    apiCommon.getSingle(userId, undefined, "portfolios", true).then((res) => {
      // console.log("Portfolio", res);
      if (res.status === "200") {
        setPortfolios(res.message);
      }
    });
  };

  console.log(props.template);

  switch (props.template) {
    case "template1":
      return <Template1 getPortfolios={getPortfolios} portfolioDetails={props.portfolioDetails} />;
    case "template2":
      return <Template2 getPortfolios={getPortfolios} portfolioDetails={props.portfolioDetails} />;
    case "template3":
      return <Template3 getPortfolios={getPortfolios} portfolioDetails={props.portfolioDetails} />;
    case "template4":
      return <div>Template4 onGoing</div>;
    default:
      return <div>Nothing</div>;
  }
};
