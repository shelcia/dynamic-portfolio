import React from "react";
import { Modal } from "react-bootstrap";

const ProjectModal = ({ index, title, desc, link, theme, show, setShow }) => {
  const handleClose = () => {
    console.log("clicked", show);
    setShow(false);
  };

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{desc}</p>
          {link && (
            <a href={link} target="blank">
              {link}
            </a>
          )}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ProjectModal;
