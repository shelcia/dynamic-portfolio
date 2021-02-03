import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";

const Profile = ({ file, setFile }) => {
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
    dropRef.current.style.border = "2px dashed rgb(12, 186, 0)";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid rgb(12, 186, 0)";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed rgb(12, 186, 0)";
    }
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="about">Profile Image:</label>

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
                <p>Drag and drop a file OR click here to select a file</p>
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
                <p className="text-danger">
                  No preview available for this file
                </p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p>Image preview will be shown here after selection</p>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
