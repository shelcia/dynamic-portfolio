import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Intro = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const textTheme = darkTheme ? "text-white" : "text-dark";

  return (
    <section>
      <Container fluid className="text-center">
        <div className="pt-5">
          <h5 className={`mb-3 ${textTheme}`}>
            {portfolioDetails.headerTitle}
          </h5>
          <p className="mt-2 text-muted">{portfolioDetails.about}</p>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
