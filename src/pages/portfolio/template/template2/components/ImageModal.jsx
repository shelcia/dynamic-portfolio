import React from "react";
import { Modal, Image } from "react-bootstrap";

const ImageModal = ({ id, link, show, setShow }) => {
  const handleClose = () => {
    console.log("clicked", show);
    setShow(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        <Image src={link} key={id} height="100%" width="100%" />
      </Modal>
    </React.Fragment>
  );
};

export default ImageModal;
