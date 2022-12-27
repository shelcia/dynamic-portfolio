import React from "react";
import { Modal } from "react-bootstrap";

const ProjectModal = ({
  // index,
  title,
  desc,
  link,
  // theme,
  show,
  setShow,
  pageTheme,
}) => {
  const handleClose = () => {
    console.log("clicked", show);
    setShow(false);
  };
  const type = pageTheme ? "white" : "black";
  const bgcolor = pageTheme ? "black" : "white";
  const textcolor = pageTheme ? "white" : "black";
  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          closeVariant={`${type}`}
          style={{ background: `${bgcolor}`, color: `${textcolor}` }}
        >
          <Modal.Title
            style={{ background: `${bgcolor}`, color: `${textcolor}` }}
          >
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: `${bgcolor}`, color: `${textcolor}` }}>
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
