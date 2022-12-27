/**
 * @description
 * WHY PhotoGallery2.0
 * =>Created PhotoGallery2.0 so that PhotoGallery can be used
 *  by other dependents without breaking. PhotoGallery2.0 is created
 *  while template 2 and template 3 form validation was created. So
 *  keeping in mind that if any other template might need PhotoGallery,
 *  it can use PhotoGallery component without breaking.
 */

import React from "react";
import PhotoLinkForm from "./PhotoLinkForm";

const PhotoGallery = ({
  photoLinks,
  setPhotoLinks,
  photoFormToBeValidate,
  setPhotoFormToBeValidate,
}) => {
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

    if (photoFormToBeValidate.size) {
      setPhotoFormToBeValidate(new Map());
    }
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
          <PhotoLinkForm
            delPhoto={delPhoto}
            handleInputs={handleInputs}
            photo={photo}
            idx={idx}
            photoFormToBeValidate={photoFormToBeValidate}
          />
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
