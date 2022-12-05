import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { apiCommon } from "../../../../services/models/CommonModel";
import { ThemeContext } from "../../../../context/ThemeContext";

import Topbar from "./components/Topbar";
import Intro from "./components/Intro";

import Toggle from "../common/Toggle";

// import Gallery from "./components/Gallery";
// import Footer from "./components/Footer";

import { PageLoader } from "../../../../components/common/CustomLoaders";

import "./styles/style.css";
import Behance from "./components/Behance";
import Medium from "./components/Medium";
import Footer from "../common/Footer";

const Portfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState([]);

  const [darkTheme] = useContext(ThemeContext);
  const className = darkTheme ? "bg-dark-3 text-white" : "bg-white";

  const { id } = useParams();

  useEffect(() => {
    const ac = new AbortController();

    const getPortfolio = async (id) => {
      try {
        apiCommon.getSingle(id, ac.signal, "portfolio").then((portfolio) => {
          console.log(portfolio.message);
          if (portfolio.status === "200") {
            setPortfolioDetails(portfolio.message);
          }
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolioDetails.length) getPortfolio(id);
    return () => ac.abort();
  }, [id, portfolioDetails.length]);

  const checkFields = (field) => {
    if (
      portfolioDetails?.[field] === "" ||
      portfolioDetails?.[field] === null ||
      portfolioDetails?.[field] === undefined
    ) {
      return false;
    }
    return true;
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <PageLoader />
      ) : (
        <React.Fragment>
          <Toggle />
          <div className={`text-${portfolioDetails.font} ${className}`}>
            <Topbar portfolioDetails={portfolioDetails} />
            <Intro portfolioDetails={portfolioDetails} />
            {checkFields("behanceRssLink") && (
              <Behance portfolioDetails={portfolioDetails} />
            )}
            {checkFields("mediumRssLink") && (
              <Medium portfolioDetails={portfolioDetails} />
            )}
            <Footer portfolioDetails={portfolioDetails} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
