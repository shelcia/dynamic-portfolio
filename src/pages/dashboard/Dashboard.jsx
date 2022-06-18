import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactLoader from "../../components/Loader";

const Dashboard = () => {
  const name = localStorage.getItem("dynamic-name");
  const token = localStorage.getItem("dynamic-token");
  const id = localStorage.getItem("dynamic-id");

  const link = process.env.REACT_APP_API_LINK;

  const [isLoading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = async () => {
      try {
        const portfolio = await axios.get(`${link}common/portfolios/${id}`, {
          headers: { "auth-token": token },
        });
        console.log("Portfolio", portfolio.data);
        console.log(`${link}common/portfolio/${id}`);
        setPortfolio(portfolio.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolio.length) getPortfolio();
    return () => ac.abort();
  }, [id, link, portfolio.length, token]);

  return (
    <React.Fragment>
      <div
        className="container-fluid background"
        style={{ minHeight: "100vh" }}
      >
        <Navbar />

        <div className="container mt-3 ">
          <h1 className="mt-2 mb-5 display-4">
            Hi <span className="text-capitalize">{name}</span>!!
          </h1>
          {isLoading ? (
            <ReactLoader />
          ) : (
            <div className="container d-flex" style={{ flexWrap: "wrap" }}>
              {portfolio.map((item) => (
                <div key={item._id}>
                  <div
                    className="card background ml-0 mr-4 border border-0 rounded-0 shadow-lg pointer-cursor d-flex justify-content-center align-items-center"
                    style={{ width: "250px", height: "300px" }}
                  >
                    <Link
                      to={`/portfolio/${item._id}`}
                      target="_blank"
                      className="h3 text-dark"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="mt-3 pr-4 d-flex justify-content-between">
                    <button className="btn normal" title="Download Portfolio">
                      <i className="fas fa-download"></i>
                    </button>
                    <Link to={`/edit-portfolio/${item._id}`} target="_blank">
                      <button className="btn normal" title="Edit Portfolio">
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                    <button className="btn normal" title="Share Portfolio">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </div>
              ))}
              <div
                className="card background ml-0 mr-4 border border-0 rounded-0 shadow-lg d-flex justify-content-center align-items-center pointer-cursor"
                style={{ width: "250px", height: "300px" }}
                title="Create Portfolio"
              >
                <Link to="/add-portfolio">
                  <i
                    className="fas fa-plus text-dark"
                    style={{ fontSize: "100px" }}
                  ></i>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
