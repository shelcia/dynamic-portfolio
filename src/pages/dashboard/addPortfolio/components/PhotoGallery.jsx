import React from "react";
import { FaMinus } from "react-icons/fa";
import { CustomSimpleInput } from "../../../../components/common/CustomInputs";

const PhotoGallery = ({ photoLinks, setPhotoLinks }) => {
  const handleInputs = (e, id) => {
    const newPhotos = photoLinks.map((photo) => {
      if (photo.id === id) {
        const updatedPhoto = {
          ...photo,
          [e.target.name]: e.target.value,
        };
        return updatedPhoto;
      }
      return photo;
    });

    setPhotoLinks(newPhotos);
  };
  const addPhoto = (e) => {
    e.preventDefault();
    const newPhoto = [
      ...photoLinks,
      {
        id: Date.now(),
        link: "",
      },
    ];
    setPhotoLinks(newPhoto);
  };
  const delPhoto = (e, id) => {
    e.preventDefault();
    const newPhoto = photoLinks.filter((photo) => photo.id !== id);
    setPhotoLinks(newPhoto);
  };

  return (
    <React.Fragment>
      {photoLinks.map((photo, idx) => (
        <React.Fragment key={photo.id}>
          <CustomSimpleInput
            label={`Photo ${idx + 1}`}
            name="link"
            value={photo.link}
            placeholder="https://picsum.photos/200/300"
            onChange={(e) => handleInputs(e, photo.id)}
          />
          <div className="text-right w-100">
            {idx !== 0 && (
              <button
                className="btn btn-danger py-1 px-3 mb-2"
                type="button"
                onClick={(e) => delPhoto(e, photo.id)}
                title="Delete Photo"
              >
                <FaMinus />
              </button>
            )}
          </div>
        </React.Fragment>
      ))}
      <div className="text-right w-100">
        <button
          className="btn btn-neutral py-1 px-3"
          type="button"
          onClick={(e) => addPhoto(e)}
          title="Add Photo"
        >
          Add Photo
        </button>
      </div>
    </React.Fragment>
  );
};

export default PhotoGallery;
