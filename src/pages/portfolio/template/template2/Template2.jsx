import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { apiCommon } from "../../../../services/models/CommonModel";
import { ThemeContext } from "../../../../context/ThemeContext";

import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Footer from "../common/Footer";

import Toggle from "../common/Toggle";

import { PageLoader } from "../../../../components/common/CustomLoaders";

import "./styles/style.css";

const Portfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState([]);

  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark text-white" : "bg-white";

  const { id } = useParams();

  useEffect(() => {
    const ac = new AbortController();

    const getPortfolio = async (id) => {
      try {
        apiCommon.getSingle(id, ac.signal, "portfolio").then((portfolio) => {
          setPortfolioDetails(portfolio.message);
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolioDetails.length) getPortfolio(id);
    return () => ac.abort();
  }, [id, portfolioDetails.length]);

  return (
    <React.Fragment>
      {isLoading ? (
        <PageLoader />
      ) : (
        <React.Fragment>
          <Toggle />
          <div className={`text-${portfolioDetails.font} ${className}`}>
            <Intro portfolioDetails={portfolioDetails} />
            <Gallery portfolioDetails={portfolioDetails} />
            <Footer portfolioDetails={portfolioDetails} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
