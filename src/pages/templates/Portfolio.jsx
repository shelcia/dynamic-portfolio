import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Topbar from "./components/TopBar";
import { ThemeContext } from "./context/ThemeContext";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";

const Portfolio = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const link = process.env.REACT_APP_API_LINK;
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

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
  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <Topbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Intro portfolioDetails={portfolioDetails} match={match} />
          <Projects portfolioDetails={portfolioDetails} />
          <Skills portfolioDetails={portfolioDetails} />
          <Works portfolioDetails={portfolioDetails} />
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
