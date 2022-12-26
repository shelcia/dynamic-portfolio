import { useFormik } from "formik";
import React, { useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { ValidationError } from "../enums/ErrorCode";
// import { CustomSimpleInput } from "../../../../components/common/CustomInputs";

const PhotoLinkForm = ({
  delPhoto,
  handleInputs,
  photo,
  idx,
  photoFormToBeValidate,
}) => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    validationSchema: Yup.object().shape({
      link: Yup.string().required("Required").url("Must be a valid url"),
    }),
  });

  
  useEffect(() => {
    if ( photo) {
      formik.setValues(photo);
    }
  }, [photo]);

  return (
    <React.Fragment>
      <Form.Group className="mb-3 position-relative">
        <Form.Label>{`Photo ${idx + 1}`}</Form.Label>
        <Form.Control
          name="link"
          value={formik.values.link}
          onChange={(e) => {
            formik.handleChange(e);
            handleInputs(e, photo.id);
          }}
          onBlur={formik.handleBlur}
          isInvalid={
            Boolean(formik.touched.link && formik.errors.link) ||
            (photoFormToBeValidate.has(photo.id)
              ? photoFormToBeValidate.get(photo.id)["errCode"] ===
                  ValidationError.PHOTO_LINK_REQ ||
                photoFormToBeValidate.get(photo.id)["errCode"] ===
                  ValidationError.PHOTO_LINK_URL
              : false)
          }
          placeholder="https://picsum.photos/200/300"
          className={
            Boolean(formik.touched.link && formik.errors.link) ||
            photoFormToBeValidate.has(photo.id)
              ? "mb-5"
              : ""
          }
        ></Form.Control>
        <Form.Control.Feedback type="invalid" tooltip>
          {formik.touched.link
            ? formik.errors.link
            : photoFormToBeValidate.has(photo.id) &&
              (photoFormToBeValidate.get(photo.id)["errCode"] ===
                ValidationError.PHOTO_LINK_REQ ||
                photoFormToBeValidate.get(photo.id)["errCode"] ===
                  ValidationError.PHOTO_LINK_URL) &&
              photoFormToBeValidate.get(photo.id)["message"]}
        </Form.Control.Feedback>
      </Form.Group>
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
  );
};

export default PhotoLinkForm;
