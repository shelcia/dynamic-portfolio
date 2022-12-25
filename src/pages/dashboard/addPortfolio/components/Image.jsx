import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";

const Image = ({ file, setFile }) => {
  const [previewSrc, setPreviewSrc] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  const dropRef = useRef();

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed black";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid black";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed black";
    }
  };
  return (
    <React.Fragment>
      <div className="upload-section">
        <Dropzone
          onDrop={onDrop}
          onDragEnter={() => updateBorder("over")}
          onDragLeave={() => updateBorder("leave")}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps({ className: "drop-zone" })}
              ref={dropRef}
              required
            >
              <input {...getInputProps()} />
              <small>Drag and drop a file OR click here to select a file</small>
              {file && (
                <div>
                  <strong>Selected file:</strong> {file.name}
                </div>
              )}
            </div>
          )}
        </Dropzone>
        {previewSrc ? (
          isPreviewAvailable ? (
            <div className="image-preview">
              <img className="preview-image" src={previewSrc} alt="Preview" />
            </div>
          ) : (
            <div className="preview-message">
              <small className="text-danger">
                No preview available for this file
              </small>
            </div>
          )
        ) : (
          <div className="preview-message">
            <small>Image preview will be shown here after selection</small>
          </div>
        )}
      </div>
      <div className="text-end my-3">
        <button
          className="btn btn-danger py-1 px-3"
          onClick={() => {
            setFile(null);
            setPreviewSrc("");
            setIsPreviewAvailable(false);
          }}
          title="Delete Image"
        >
          Delete Image
        </button>
      </div>
    </React.Fragment>
  );
};

export default Image;
