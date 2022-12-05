import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ComponentLoader } from "../../components/common/CustomLoaders";
import { apiCommon } from "../../services/models/CommonModel";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TemplateContext } from "../../context/TemplateContext";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { Pattern1Default } from "../../components/common/CustomPatterns";
import { RWebShare } from "react-web-share";

const Dashboard = () => {
  const name = localStorage.getItem("dynamic-name");
  const userId = localStorage.getItem("dynamic-id");

  const [isLoading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [show, setShow] = useState(false);

  const getPortfolio = (id, signal) =>
    apiCommon.getSingle(id, signal, "portfolios", true).then((res) => {
      console.log("Portfolio", res);
      if (res.status === "200") {
        setPortfolio(res.message);
      }
      setLoading(false);
    });

  useEffect(() => {
    const ac = new AbortController();
    if (!portfolio.length) getPortfolio(userId, ac.signal);
    return () => ac.abort();
  }, [userId, portfolio.length]);

  const delPortfolio = (id) => {
    if (
      id === "630f44611ddb0f899c66e399" ||
      id === "630f51c81ddb0f899c66e39a"
    ) {
      toast.error("You cannot portfolio of demo user !");
      return;
    }
    apiCommon.remove(id, "portfolio").then((res) => {
      // console.log(res);
      if (res.status === "200") {
        toast.success(res.message);
        getPortfolio(userId);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <React.Fragment>
      <section
        className="section section-hero section-shaped pt-2"
        style={{ minHeight: "100vh" }}
      >
        <Pattern1Default />
        <Container className="mt-5">
          <h3 className="mt-2 mb-5 text-capitalize text-white">Hi {name}</h3>
          {isLoading ? (
            <ComponentLoader />
          ) : (
            <div className="portfolio-grid">
              {portfolio.map((item) => (
                <PortfolioCard
                  key={item._id}
                  item={item}
                  delPortfolio={delPortfolio}
                />
              ))}
            </div>
          )}
          <div className="text-center mt-3">
            <Button variant="success" onClick={() => setShow(true)}>
              Add Portfolio
            </Button>
          </div>
        </Container>
      </section>
      <AddPortfolioModal show={show} setShow={setShow} />
    </React.Fragment>
  );
};

export default Dashboard;

const PortfolioCard = ({ item, delPortfolio }) => (
  <Card className="ms-0 pointer-cursor d-flex justify-content-center align-items-center bg-transparent border-0">
    <Card.Body className="bg-white w-100">
      <Link
        to={`/portfolio/${item._id}`}
        target="_blank"
        className="nav-link-inner--text text-uppercase"
        style={{
          fontWeight: 600,
          letterSpacing: 0.35,
        }}
      >
        {item.name}
      </Link>
      <p className="text-muted">{item.headerTitle}</p>
    </Card.Body>
    <Card.Footer className="d-flex justify-content-between w-100 px-0 py-2 bg-transparent border-0">
      {/* <Link to={`/edit-portfolio/${item._id}`} target="_blank"> */}
      <div className="tooltip-custom">
        <span className="tooltiptext">Edit portfolio is not enabled yet !</span>
        <button className="btn btn-neutral" title="Edit Portfolio">
          <span className="nav-link-inner--text">Edit</span>
        </button>
      </div>

      {/* </Link> */}
      <RWebShare
        data={{
          text: "Hey I made this portfolio using dynamic portfolio web app",
          url: `https://dynamic--portfolio.vercel.app/portfolio/${item._id}`,
          title: "Share your Portfolio",
        }}
        onClick={() => {
          console.info("share successful!");
          toast.success("Successful !");
        }}
      >
        <button className="btn btn-neutral me-0 mr-0" title="Share Portfolio">
          <span className="nav-link-inner--text">Share</span>
        </button>
      </RWebShare>

      <button
        className="btn btn-danger"
        title="Delete Portfolio"
        onClick={() => delPortfolio(item._id)}
      >
        <FaTrash />
      </button>
    </Card.Footer>
  </Card>
);

const AddPortfolioModal = ({ show, setShow }) => {
  const [templates] = useContext(TemplateContext);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Choose One</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {templates.map((template, index) => (
            <Col sm={4} className="text-center" key={index}>
              <img
                src={template.img}
                alt=""
                width={130}
                height={75}
                style={{ objectFit: "cover" }}
              />
              <Link to={`/add-portfolio/template${index + 1}`}>
                <Button
                  variant="primary"
                  onClick={handleClose}
                  className="mt-2"
                  size="sm"
                >
                  Choose
                </Button>
              </Link>
              <Link to={`/portfolio/${template.id}`} target="_blank">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="mt-2"
                  size="sm"
                >
                  Preview
                </Button>
              </Link>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
