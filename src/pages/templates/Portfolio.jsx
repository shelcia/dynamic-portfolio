import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Portfolio = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetials, setPortfolioDetials] = useState([]);
  const link = process.env.REACT_APP_API_LINK;
  useEffect(() => {
    const ac = new AbortController();
    const getPortfolio = async () => {
      try {
        const portfolio = await axios.get(
          `${link}common/portfolio/${match.params.id}`
        );
        const portfolioDeets = portfolio.data.message.filter(
          (port) => port._id === match.params.id
        );
        console.log("Detials", portfolioDeets);
        setPortfolioDetials(portfolioDeets);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolioDetials.length) getPortfolio();
    return () => ac.abort();
  }, [link, match.params.id, portfolioDetials.length]);
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1> Portfolio </h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
