import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
// import {
//   CustomSimpleInput,
//   CustomTeaxtArea,
// } from "../../../../components/common/CustomInputs";
import { apiCommon } from "../../../../services/models/CommonModel";
import PhotoGallery from "../components/PhotoGallery2.0";
import SocialLinks from "../components/SocialLinks2.0";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import { ErrorMessage, ValidationError } from "../enums/ErrorCode";

const Template2 = ({ portfolioDetails, getPortfolios }) => {
  const [data] = useState({
    name: "",
    headerTitle: "",
    about: "",
    fontfamily: "baskerville",
  });

  const [socialLinks, setSocialLinks] = useState([]);
  const [socialFormToBeValidate, setSocialFormToBeValidate] = useState(
    new Map()
  );
  const [photoFormToBeValidate, setPhotoFormToBeValidate] = useState(new Map());
 
  const [photoLinks, setPhotoLinks] = useState([
    {
      id: 1,
      link: "",
    },
  ]);
  const { id } = useParams();

  const navigate = useNavigate();

  // const handleInputs = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  const socialLinkValidationSchema = Yup.object().shape({
    link: Yup.string()
      .required(ValidationError.SOCIAL_LINK_REQ)
      .url(ValidationError.SOCIAL_LINK_URL),
    name: Yup.string().required(ValidationError.SOCIAL_HANDLE_REQ),
  });

  const photoLinkValidationSchema = Yup.object().shape({
    link: Yup.string()
      .required(ValidationError.PHOTO_LINK_REQ)
      .url(ValidationError.PHOTO_LINK_URL),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      headerTitle: "",
      about: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      headerTitle: Yup.string().required("Required"),
      about: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      //Validate social handle and link
      const _socialFormToBeValidate = new Map();

      socialLinks.forEach((val) => {
        try {
          socialLinkValidationSchema.validateSync({
            name: val.name,
            link: val.link,
          });
        } catch (error) {
          _socialFormToBeValidate.set(val.id, {
            id: val.id,
            errCode: error.message,
            message: ErrorMessage[error.message],
          });
        }
      });

      if (_socialFormToBeValidate.size) {
        setSocialFormToBeValidate(_socialFormToBeValidate);
        return;
      }

      //Validate photo link
      const _photoFormToBeValidate = new Map();

      photoLinks.forEach((val) => {
        try {
          photoLinkValidationSchema.validateSync({
            link: val.link,
          });
        } catch (error) {
          _photoFormToBeValidate.set(val.id, {
            id: val.id,
            errCode: error.message,
            message: ErrorMessage[error.message],
          });
        }
      });

      if (_photoFormToBeValidate.size) {
        setPhotoFormToBeValidate(_photoFormToBeValidate);
        return;
      }

      //SUBMIT IF NO VALIDATION ERROR
      //IN SOCIAL LINK FORM
      onSubmit(values);
    },
  });
  useEffect(() => {
    if (portfolioDetails) {
      formik.setValues(portfolioDetails);
      console.log(formik.values);
      setSocialLinks(portfolioDetails.socialLinks);
      setPhotoLinks(portfolioDetails.photoLinks);
    }
  }, [portfolioDetails]);

  const onSubmit = (val) => {
    // e.preventDefault();
    const userID = localStorage.getItem("dynamic-id");

    const body = {
      userID: userID,
      name: val.name,
      headerTitle: val.headerTitle,
      template: "template2",
      about: val.about,
      socialLinks: socialLinks,
      font: data.fontfamily,
      photoLinks: photoLinks,
    };
    console.log(body);
    if (portfolioDetails) {
      toast("Please Wait! while we are updating...");

      apiCommon.putById(id, body, "portfolio", true).then((res) => {
        if (res.status === "200") {
          toast.success("Portfolio updated !");

          getPortfolios();
          navigate("/dashboard");
        } else {
          toast.error("Portfolio updation failed !");
        }
      });
    } else {
      toast("Please Wait! while we are adding...");
      apiCommon.post(body, "portfolio", true).then((res) => {
        console.log(res.id);
        if (res.status === "200") {
          toast.success("Portfolio added !");
          getPortfolios();
          navigate("/dashboard");
        } else {
          toast.error("Portfolio addition failed !");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3 position-relative">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(formik.touched.name && formik.errors.name)}
            placeholder="John Doe"
            className={formik.touched.name && formik.errors.name ? "mb-5" : ""}
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 position-relative">
          <Form.Label>Header</Form.Label>
          <Form.Control
            name="headerTitle"
            value={formik.values.headerTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(
              formik.touched.headerTitle && formik.errors.headerTitle
            )}
            placeholder="Full stack developer"
            className={
              formik.touched.headerTitle && formik.errors.headerTitle
                ? "mb-5"
                : ""
            }
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.headerTitle}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 position-relative">
          <Form.Label>About</Form.Label>
          <Form.Control
            as={"textarea"}
            name="about"
            value={formik.values.about}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(formik.touched.about && formik.errors.about)}
            placeholder="I am freelancer aka coolest guy"
            className={
              formik.touched.about && formik.errors.about ? "mb-5" : ""
            }
            rows={5}
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.about}
          </Form.Control.Feedback>
        </Form.Group>
        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
          socialFormToBeValidate={socialFormToBeValidate}
          setSocialFormToBeValidate={setSocialFormToBeValidate}
        />
        <PhotoGallery
          photoLinks={photoLinks}
          setPhotoLinks={setPhotoLinks}
          photoFormToBeValidate={photoFormToBeValidate}
          setPhotoFormToBeValidate={setPhotoFormToBeValidate}
        />
        <Form.Group className="mb-3 mt-5">
          <div className="text-right mt-5 mb-4">
            <button type="submit" className="btn btn-primary">
              {portfolioDetails ? "Update" : "Submit"}
            </button>
          </div>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default Template2;
