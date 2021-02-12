import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

const EditPortfolio = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState({
    name: "",
    headerTitle: "",
    about: "",
  });
  const link = process.env.REACT_APP_API_LINK;
  //   const onSubmit = () => {
  //     console.log("hi");
  //   };

  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = async () => {
      try {
        const portfolio = await axios.get(
          `${link}common/portfolio/${match.params.id}`
        );
        console.log("Details", portfolio.data.message);
        setPortfolioDetails(portfolio.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolioDetails.length) getPortfolio();
    return () => ac.abort();
  }, [link, match.params.id, portfolioDetails.length]);

  const handleInputs = (e) => {
    const newDetails = { ...portfolioDetails, [e.target.name]: e.target.value };
    setPortfolioDetails(newDetails);
  };

  return (
    <React.Fragment>
      <div className="container-fluid background" style={{ height: "100vh" }}>
        <Navbar />
        <div className="container">
          <div className="row px-2 pt-5 flex-column">
            <div
              className="card background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "80vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="display-3 text-dark">Edit Portfolio</h2>
                <Link to="/dashboard">
                  <button type="button" className="btn normal">
                    Go Back
                  </button>
                </Link>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="h3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="name"
                    value={portfolioDetails.name}
                    onChange={(e) => handleInputs(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="h3">
                    Header Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="headerTitle"
                    value={portfolioDetails.headerTitle}
                    onChange={(e) => handleInputs(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name" className="h3">
                    About
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    name="about"
                    value={portfolioDetails.about}
                    onChange={(e) => handleInputs(e)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditPortfolio;
