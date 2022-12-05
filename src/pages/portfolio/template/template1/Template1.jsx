import React, { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Toggle from "../common/Toggle";
import { useParams } from "react-router";
import { apiCommon } from "../../../../services/models/CommonModel";

import { PageLoader } from "../../../../components/common/CustomLoaders";

import "./styles/style.css";

const Portfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState([]);

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
          <div className={`text-${portfolioDetails.font} template1`}>
            <Toggle />
            <Intro portfolioDetails={portfolioDetails} />
            <Projects portfolioDetails={portfolioDetails} />
            <Skills portfolioDetails={portfolioDetails} />
            <Works portfolioDetails={portfolioDetails} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
