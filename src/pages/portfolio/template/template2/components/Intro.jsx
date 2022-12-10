import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Intro = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const textTheme = darkTheme ? "text-white" : "text-dark";
  const ab= darkTheme ? "ba1" : "ba2";
  return (
    <section>
      <Container fluid className="text-center">
        <div className="pt-5">
          <h2 className={`mb-4 fst-italic name ${textTheme} ${ab}`}>
            {portfolioDetails.name}
          </h2>
          <h4 className={`mb-3 fst-italic ${textTheme}`}>
            {portfolioDetails.headerTitle}
          </h4>
          {portfolioDetails.socialLinks?.map((social) => (
            <a
              href={social.link}
              key={social.id}
              className={`me-3 ${textTheme}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconProvider icon={social.name} />
            </a>
          ))}
          <p className="mt-2">{portfolioDetails.about}</p>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
