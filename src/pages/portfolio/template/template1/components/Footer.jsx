import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <Container className="bg-tranparent py-4">
        <div className="text-center">
          <p className="mb-0 text-light">Copyrights © 2022 Shelcia</p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
