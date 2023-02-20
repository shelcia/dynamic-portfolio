import React from "react";
import { Container } from "react-bootstrap";

const Footer = ({ portfolioDetails }) => {
  return (
    <footer>
      <Container className="bg-tranparent py-4">
        <div className="text-center">
          <p className="mb-0">Copyrights © 2023 {portfolioDetails?.name}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
