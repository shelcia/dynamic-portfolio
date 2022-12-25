import React, { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import ImageModal from "./ImageModal";
import { ComponentLoader } from "../../../../../components/common/CustomLoaders";

const Gallery = ({ portfolioDetails }) => {
  let col1, col2, col3, col4;

  if (Object.keys(portfolioDetails).length !== 0) {
    col1 = portfolioDetails.photoLinks?.slice(
      0,
      portfolioDetails.photoLinks.length / 4
    );
    col2 = portfolioDetails.photoLinks?.slice(
      portfolioDetails.photoLinks.length / 4,
      portfolioDetails.photoLinks.length / 2
    );
    col3 = portfolioDetails.photoLinks?.slice(
      portfolioDetails.photoLinks.length / 2,
      (portfolioDetails.photoLinks.length * 3) / 4
    );
    col4 = portfolioDetails.photoLinks?.slice(
      (portfolioDetails.photoLinks.length * 3) / 4,
      portfolioDetails.photoLinks.length
    );
  }
  const [show, setShow] = useState(false);
  const [selectedImageLink, setSelectedImageLink] = useState();
  const [selectedImageId, setSelectedImageId] = useState();

  return (
    <Container fluid>
      <Row className="gallery">
        {[col1, col2, col3, col4].map((col, idx) => (
          <Col md={3} key={idx}>
            {col?.map((photo) => (
              <MyImage
                key={photo.id}
                photo={photo}
                setSelectedImageId={setSelectedImageId}
                setSelectedImageLink={setSelectedImageLink}
                setShow={setShow}
              />
            ))}
          </Col>
        ))}
        {portfolioDetails.photoLinks && (
          <ImageModal
            id={selectedImageId}
            link={selectedImageLink}
            show={show}
            setShow={setShow}
          />
        )}
      </Row>
    </Container>
  );
};

export default Gallery;

export const MyImage = ({
  photo,
  setSelectedImageLink,
  setSelectedImageId,
  setShow,
}) => {
  const [loaded, isLoaded] = useState(false);

  return (
    <React.Fragment>
      <Image
        key={photo.id}
        fluid
        src={photo.link}
        width={"100%"}
        onClick={() => {
          setSelectedImageLink(photo?.link);
          setSelectedImageId(photo?.id);
          setShow(true);
        }}
        onLoad={() => {
          isLoaded(true);
        }}
      />
      {!loaded && <ComponentLoader key={photo.id + "sibling"} />}
    </React.Fragment>
  );
};
