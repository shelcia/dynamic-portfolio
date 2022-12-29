import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import {
//   CustomSimpleInput,
//   CustomTeaxtArea,
// } from "../../../../components/common/CustomInputs";
import SocialLinks from "../components/SocialLinks2.0";
import { apiCommon } from "../../../../services/models/CommonModel";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import { ErrorMessage, ValidationError } from "../enums/ErrorCode";

const Template3 = ({portfolioDetails, getPortfolios }) => {
  const [data] = useState({
    themes: "black",
    fontfamily: "inter",
  });

  const { id } = useParams();
  const [socialLinks, setSocialLinks] = useState([]);
  const [socialFormToBeValidate, setSocialFormToBeValidate] = useState(
    // eslint-disable-next-line no-undef
    new Map()
  );

  const navigate = useNavigate();


  const socialLinkValidationSchema = Yup.object().shape({
    link: Yup.string()
      .required(ValidationError.SOCIAL_LINK_REQ)
      .url(ValidationError.SOCIAL_LINK_URL),
    name: Yup.string().required(ValidationError.SOCIAL_HANDLE_REQ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      headerTitle: "",
      about: "",
      behanceRssLink: "",
      mediumRssLink: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      headerTitle: Yup.string().required("Required"),
      about: Yup.string().required("Required"),
      behanceRssLink: Yup.string().required("Required"),
      mediumRssLink: Yup.string()
        .required("Required")
        .matches("^((?![@]).)*$", {
          message: "Must not include @",
        }),
    }),

    onSubmit: (values) => {
      // eslint-disable-next-line no-undef
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

      //SUBMIT IF NO VALIDATION ERROR
      //IN SOCIAL LINK FORM
      onSubmit(values);
    },
  });

  const onSubmit = (val) => {
    // e.preventDefault();

       // eslint-disable-next-line no-undef
    const userID = localStorage.getItem("dynamic-id");

    const body = {
      userID: userID,
      name: val.name,
      about: val.about,
      headerTitle: val.headerTitle,
      behanceRssLink: `https://api.rss2json.com/v1/api.json?rss_url=https://www.behance.net/feeds/user?username=${val.behanceRssLink}`,
      mediumRssLink: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${val.mediumRssLink}`,
      socialLinks: socialLinks,
      template: "template3",
      theme: data.themes,
      font: data.fontfamily,
    };
    // console.log(body);
    if ( portfolioDetails) {
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
    }else {
    toast("Please Wait! while we are adding...");
    apiCommon.post(body, "portfolio", true).then((res) => {
      if (res.status === "200") {
        toast.success("Portfolio added !");
        getPortfolios();
        navigate("/dashboard");
      } else {
        toast.error("Portfolio addition failed !");
      }
    });
  };
}

  useEffect(() => {
    if ( portfolioDetails) {
      const behanceRssUsername = portfolioDetails.behanceRssLink.split('=').pop()
      const mediumRssUsername = portfolioDetails.mediumRssLink.split('@').pop()

      portfolioDetails.behanceRssLink = behanceRssUsername
      portfolioDetails.mediumRssLink = mediumRssUsername

      formik.setValues(portfolioDetails);
      console.log(formik.values);
      setSocialLinks( portfolioDetails.socialLinks);
    }
  }, [ portfolioDetails]);

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
        <Form.Group className="mb-3 position-relative">
          <Form.Label>Behance Username</Form.Label>
          <Form.Control
            name="behanceRssLink"
            value={formik.values.behanceRssLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(
              formik.touched.behanceRssLink && formik.errors.behanceRssLink
            )}
            placeholder="ex: shelcia"
            className={
              formik.touched.behanceRssLink && formik.errors.behanceRssLink
                ? "mb-5"
                : ""
            }
            rows={5}
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.behanceRssLink}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 position-relative">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Form.Label>Medium Username (without '@')</Form.Label>
          <Form.Control
            name="mediumRssLink"
            value={formik.values.mediumRssLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(
              formik.touched.mediumRssLink && formik.errors.mediumRssLink
            )}
            placeholder="ex: shelcia"
            className={
              formik.touched.mediumRssLink && formik.errors.mediumRssLink
                ? "mb-5"
                : ""
            }
            rows={5}
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.mediumRssLink}
          </Form.Control.Feedback>
        </Form.Group>
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

export default Template3;
