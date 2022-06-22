import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ComponentLoader } from "../../components/Loaders";
import { apiCommon } from "../../services/models/CommonModel";
import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const name = localStorage.getItem("dynamic-name");
  const id = localStorage.getItem("dynamic-id");

  const [isLoading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = () =>
      apiCommon.getSingle(id, ac.signal, "portfolios", true).then((res) => {
        console.log("Portfolio", res);
        if (res.status === "200") {
          setPortfolio(res.message);
        }
        setLoading(false);
      });
    if (!portfolio.length) getPortfolio();
    return () => ac.abort();
  }, [id, portfolio.length]);

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
                <PortfolioCard key={item._id} item={item} />
              ))}
            </div>
          )}
          <div className="text-center mt-3">
            <Link to="/add-portfolio">
              <button className="btn btn-success">Add Portfolio</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

const PortfolioCard = ({ item }) => (
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
      <button className="btn btn-danger" title="Delete Portfolio">
        <FaTrash />
      </button>
    </div>
  </div>
);
