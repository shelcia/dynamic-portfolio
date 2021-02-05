import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactLoader from "../../components/Loader";

const Dashboard = () => {
  const name = localStorage.getItem("dynamic-name");
  const token = localStorage.getItem("dynamic-token");
  const id = localStorage.getItem("dynamic-id");
  const [isLoading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);
  const link = process.env.REACT_APP_API_LINK;

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
        className="container-fluid bg-dark text-light"
        style={{ minHeight: "100vh" }}
      >
        <Navbar />

        <div className="container mt-3 ">
          <h1 className="mt-2 mb-5 display-2">
            Hi <span className="text-capitalize">{name}</span>!!
          </h1>
          {isLoading ? (
            <ReactLoader />
          ) : (
            <div className="container d-flex">
              {portfolio.map((item) => (
                <div key={item._id}>
                  <div
                    className="card background ml-0 mr-4 border border-0 rounded-0 shadow-lg pointer-cursor d-flex justify-content-center align-items-center"
                    style={{ width: "250px", height: "300px" }}
                  >
                    <Link
                      to={`/portfolio/${item._id}`}
                      target="_blank"
                      class="h3 text-light"
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="mt-3 pr-4 d-flex justify-content-between">
                    <button className="btn website">Download</button>
                    <button className="btn website">Edit</button>
                  </div>
                </div>
              ))}
              <div
                className="card background ml-0 mr-4 border border-0 rounded-0 shadow-lg d-flex justify-content-center align-items-center pointer-cursor"
                style={{ width: "250px", height: "300px" }}
              >
                <Link to="/add-portfolio">
                  <i
                    className="fas fa-plus text-light"
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
