import { useFormik } from "formik";
import React, { useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { ValidationError } from "../enums/ErrorCode";

const SocialLinkForm = ({
  delSocial,
  socialhandle,
  handleInputs,
  socialFormToBeValidate,
}) => {
  const social = [
    "Angel list",
    "Behance",
    "Bit Bucket",
    "Codepen",
    "Dribble",
    "Github",
    "Gitlab",
    "Instagram",
    "Mail",
    "Medium",
    "LinkedIn",
    "Stack Overflow",
    "Tumblr",
    "Twitter",
    "Youtube",
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      link: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Select social handle"),
      link: Yup.string().required("Required").url("Must be a valid url"),
    }),
  });

  useEffect(() => {
    if ( socialhandle) {
      formik.setValues(socialhandle);
      console.log(formik.values);
    }
  }, [socialhandle]);

  return (
    <React.Fragment>
      <div className="mt-2 row">
        <div className="col-sm-4">
          <div className="form-group">
            <Form.Group className="mb-3 position-relative">
              <Form.Label>Social Handle</Form.Label>
              <Form.Select
                name="name"
                value={formik.values.name}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleInputs(e, socialhandle.id);
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.name && formik.errors.name) ||
                  (socialFormToBeValidate.has(socialhandle.id)
                    ? socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                      ValidationError.SOCIAL_HANDLE_REQ
                    : false)
                }
                className={
                  formik.touched.name && formik.errors.name ? "mb-5" : ""
                }
              >
                <option value="">Handle</option>
                {social.map((social, index) => (
                  <option className={social} key={index}>
                    {social}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>
                {formik.touched.name
                  ? formik.errors.name
                  : socialFormToBeValidate.has(socialhandle.id) &&
                    socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                      ValidationError.SOCIAL_HANDLE_REQ &&
                    socialFormToBeValidate.get(socialhandle.id)["message"]}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="form-group">
            <Form.Group className="mb-3 position-relative">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                value={formik.values.link}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleInputs(e, socialhandle.id);
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.link && formik.errors.link) ||
                  (socialFormToBeValidate.has(socialhandle.id)
                    ? socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                        ValidationError.SOCIAL_LINK_REQ ||
                      socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                        ValidationError.SOCIAL_LINK_URL
                    : false)
                }
                placeholder="eg. www.portfolio.com"
                className={
                  Boolean(formik.touched.link && formik.errors.link) ||
                  socialFormToBeValidate.has(socialhandle.id)
                    ? "mb-5"
                    : ""
                }
              ></Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {formik.touched.link
                  ? formik.errors.link
                  : socialFormToBeValidate.has(socialhandle.id) &&
                    (socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                      ValidationError.SOCIAL_LINK_REQ ||
                      socialFormToBeValidate.get(socialhandle.id)["errCode"] ===
                        ValidationError.SOCIAL_LINK_URL) &&
                    socialFormToBeValidate.get(socialhandle.id)["message"]}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <div className="text-right w-100">
          <button
            className="btn btn-danger mb-2 py-1 px-3"
            title="Delete Project"
            onClick={(e) => {
              delSocial(e, socialhandle.id);
            }}
          >
            <FaMinus />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialLinkForm;
