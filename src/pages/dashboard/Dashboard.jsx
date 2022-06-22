import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ComponentLoader } from "../../components/common/CustomLoaders";
import { apiCommon } from "../../services/models/CommonModel";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { TemplateContext } from "../../context/TemplateContext";

const Dashboard = () => {
  const name = localStorage.getItem("dynamic-name");
  const userId = localStorage.getItem("dynamic-id");

  const [isLoading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

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
    apiCommon.remove(id, "portfolio").then((res) => {
      console.log(res);
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
      <div
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
        <div className="container mt-5 ">
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
            {/* <Link to="/add-portfolio"> */}
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal"
            >
              Add Portfolio
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <AddPortfolioModal />
    </React.Fragment>
  );
};

export default Dashboard;

const PortfolioCard = ({ item, delPortfolio }) => (
  <div className="card ms-0 pointer-cursor d-flex justify-content-center align-items-center bg-transparent">
    <div className="card-body bg-white w-100">
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
    </div>
    <div className="card-footer d-flex justify-content-between w-100 px-0 py-2 bg-transparent border-0">
      <Link to={`/edit-portfolio/${item._id}`} target="_blank">
        <button className="btn btn-neutral" title="Edit Portfolio">
          <span className="nav-link-inner--text">Edit</span>
        </button>
      </Link>
      <button className="btn btn-neutral me-0 mr-0" title="Share Portfolio">
        <span className="nav-link-inner--text">Share</span>
      </button>
      <button
        className="btn btn-danger"
        title="Delete Portfolio"
        onClick={() => delPortfolio(item._id)}
      >
        <FaTrash />
      </button>
    </div>
  </div>
);

const AddPortfolioModal = () => {
  const [templates] = useContext(TemplateContext);
  return (
    <div
      className="modal fade"
      id="portfolioModal"
      tabindex="-1"
      aria-labelledby="portfolioModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="portfolioModalLabel">
              Choose One
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              {templates.map((template, index) => (
                <div className="col-sm-4 text-center" key={index}>
                  <img src={template.img} alt="" className="img-fluid" />
                  <button className="btn btn-primary mt-2">View</button>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
