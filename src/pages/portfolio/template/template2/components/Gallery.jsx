import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const Gallery = ({ portfolioDetails }) => {
  let col1, col2, col3, col4;

  if (portfolioDetails !== {}) {
    col1 = portfolioDetails.photoLinks?.slice(
      0,
      portfolioDetails.photoLinks?.length / 4
    );
    col2 = portfolioDetails.photoLinks?.slice(
      portfolioDetails.photoLinks?.length / 4,
      portfolioDetails.photoLinks?.length / 2
    );
    col3 = portfolioDetails.photoLinks?.slice(
      portfolioDetails.photoLinks?.length / 2,
      (portfolioDetails.photoLinks?.length * 3) / 4
    );
    col4 = portfolioDetails.photoLinks?.slice(
      (portfolioDetails.photoLinks?.length * 3) / 4,
      portfolioDetails.photoLinks?.length
    );
  }

  return (
    <Container fluid>
      <Row className="gallery">
        {[col1, col2, col3, col4].map((col, idx) => (
          <Col md={3} key={idx}>
            {col?.map((photo) => (
              <Image
                className="image-card"
                src={photo?.link}
                loading="lazy"
                fluid
                key={photo.id}
                width="100%"
              />
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
