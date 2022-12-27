import React, { useContext } from "react";
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import IconProvider from "../../../../../context/IconContext";
import { ThemeContext } from "../../../../../context/ThemeContext";

const Intro = ({ portfolioDetails }) => {
  const [darkTheme] = useContext(ThemeContext);
  const textTheme = darkTheme ? "text-white" : "text-dark";
  const ab = darkTheme ? "ba1" : "ba2";
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
            <OverlayTrigger
              key={social.id}
              placement="top"
              overlay={<Tooltip>{social.name}</Tooltip>}
            >
              <a
                href={social.link}
                className={`me-3 ${textTheme}`}
                target="_blank"
                rel="noreferrer"
              >
                <IconProvider icon={social.name} />
              </a>
            </OverlayTrigger>
          ))}
          <p className="mt-2">{portfolioDetails.about}</p>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
