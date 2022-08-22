import React from "react";
import { Container } from "react-bootstrap";
import IconProvider from "../../../../../context/IconContext";

const Intro = ({ portfolioDetails }) => {
  return (
    <section>
      <Container fluid className="text-center">
        <div className="pt-5">
          <h2 className="mb-1 fst-italic name">{portfolioDetails.name}</h2>
          <h4 className="fst-italic">{portfolioDetails.headerTitle}</h4>
          <p>{portfolioDetails.about}</p>
          <div className="d-flex">
            {portfolioDetails.socialLinks?.map((social) => (
              <a href={social.link} key={social.id} className="me-3 ">
                <IconProvider icon={social.name} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;
