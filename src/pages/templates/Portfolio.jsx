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
import { useParams } from "react-router";

const Portfolio = () => {
  const [isLoading, setLoading] = useState(true);
  const [portfolioDetails, setPortfolioDetails] = useState([]);
  const link = process.env.REACT_APP_API_LINK;
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);

  const { id } = useParams();

  useEffect(() => {
    const ac = new AbortController();

    const getPortfolio = async (id) => {
      try {
        const portfolio = await axios.get(`${link}common/portfolio/${id}`);
        console.log("Details", portfolio.data.message);
        setPortfolioDetails(portfolio.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (!portfolioDetails.length) getPortfolio(id);
    return () => ac.abort();
  }, [link, id, portfolioDetails.length]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <div className={`text-${portfolioDetails.font}`}>
            <Topbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Intro portfolioDetails={portfolioDetails} />
            <Projects portfolioDetails={portfolioDetails} />
            <Skills portfolioDetails={portfolioDetails} />
            <Works portfolioDetails={portfolioDetails} />
            <Footer />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Portfolio;
