import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageLoader } from "../../../components/Loaders";
import { apiCommon } from "../../../services/models/CommonModel";

const EditPortfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState({
    name: "",
    headerTitle: "",
    about: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = () =>
      apiCommon.getSingle(id, ac.signal, "portfolio", true).then((res) => {
        console.log("Portfolio", res);
        if (res.status === "200") {
          setPortfolioDetails(res.message);
        }
        setLoading(false);
      });
    if (!portfolioDetails.length) getPortfolio();
    return () => ac.abort();
  }, [id, portfolioDetails.length]);

  const handleInputs = (e) => {
    const newDetails = { ...portfolioDetails, [e.target.name]: e.target.value };
    setPortfolioDetails(newDetails);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <PageLoader />
      ) : (
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
          <div className="container" style={{ marginTop: "4rem" }}>
            <div
              className="card background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "80vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="text-primary">Edit Portfolio</h4>
                <Link to="/dashboard">
                  <button type="button" className="btn normal">
                    Go Back
                  </button>
                </Link>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="John Doe"
                      name="name"
                      value={portfolioDetails.name}
                      onChange={(e) => handleInputs(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Header Title</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="headerTitle"
                      value={portfolioDetails.headerTitle}
                      onChange={(e) => handleInputs(e)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">About</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      name="about"
                      value={portfolioDetails.about}
                      onChange={(e) => handleInputs(e)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditPortfolio;
