import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import {
//   CustomSimpleInput,
//   CustomTeaxtArea,
// } from "../../../../components/common/CustomInputs";
import Experience from "../components/Experience";
import Image from "../components/Image";
import Projects from "../components/Project";
import SkillSelect from "../components/SkillsSelect";
import { apiCommon } from "../../../../services/models/CommonModel";
import SocialLinks from "../components/SocialLinks2.0";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import { ErrorMessage, ValidationError } from "../enums/ErrorCode";
import { useNavigate, useParams } from "react-router-dom";
import { CYCLIC_BASE_URL } from "../../../../services/api";

const Template1 = ({ portfolioDetails, getPortfolios }) => {
  const [data, setData] = useState({
    name: "",
    headerTitle: "",
    about: "",
    resumeLink: "",
    themes: "blue",
    fontfamily: "poppins",
  });

  const [socialLinks, setSocialLinks] = useState([]);
  const [socialFormToBeValidate, setSocialFormToBeValidate] = useState(
    new Map()
  );
  const [projectFormToBeValidate, setProjectFormToBeValidate] = useState(
    new Map()
  );
  const [experienceFormToBeValidate, setExperienceFormToBeValidate] = useState(
    new Map()
  );
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "",
      desc: "",
      links: "",
    },
  ]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      name: "",
      desc: "",
      start: "",
      end: "",
      current: false,
    },
  ]);

  const [newImage, setNewImage] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (portfolioDetails) {
      setNewImage(false);
      setData(portfolioDetails);
      setSocialLinks(portfolioDetails.socialLinks);
      setSelectedSkills(portfolioDetails.skills);
      setProjects(portfolioDetails.projects);
      setExperiences(portfolioDetails.exp);
    }
  }, [portfolioDetails]);

  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const socialLinkValidationSchema = Yup.object().shape({
    link: Yup.string()
      .required(ValidationError.SOCIAL_LINK_REQ)
      .url(ValidationError.SOCIAL_LINK_URL),
    name: Yup.string().required(ValidationError.SOCIAL_HANDLE_REQ),
  });

  const projectValidationSchema = Yup.object().shape({
    title: Yup.string().required(ValidationError.PROJECT_TITLE_REQ),
    desc: Yup.string().required(ValidationError.PROJECT_DESC_REQ),
    links: Yup.string()
      .required(ValidationError.PROJECT_LINKS_REQ)
      .url(ValidationError.PROJECT_LINKS_URL),
  });

  const experienceValidationSchema = Yup.object().shape({
    current: Yup.boolean(),
    end: Yup.string().when("current", {
      is: false,
      then: Yup.string().required(ValidationError.EXPERIENCE_END_REQ),
    }),
    start: Yup.date()
      .typeError(ValidationError.EXPERIENCE_START_REQ)
      .required(ValidationError.EXPERIENCE_START_REQ),
    desc: Yup.string().required(ValidationError.EXPERIENCE_DESC_REQ),
    name: Yup.string().required(ValidationError.EXPERIENCE_NAME_REQ),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      headerTitle: "",
      about: "",
      resumeLink: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      headerTitle: Yup.string().required("Required"),
      about: Yup.string().required("Required"),
      resumeLink: Yup.string().required("Required").url("Must be a valid url"),
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

      //Validate project title , description and link
      const _projectFormToBeValidate = new Map();

      projects.forEach((val) => {
        try {
          projectValidationSchema.validateSync({
            title: val.title,
            desc: val.desc,
            links: val.links,
          });
        } catch (error) {
          _projectFormToBeValidate.set(val.id, {
            id: val.id,
            errCode: error.message,
            message: ErrorMessage[error.message],
          });
        }
      });

      if (_projectFormToBeValidate.size) {
        setProjectFormToBeValidate(_projectFormToBeValidate);
        return;
      }

      //Validate experience name , description and date
      const _experienceFormToBeValidate = new Map();

      experiences.forEach((val) => {
        try {
          experienceValidationSchema.validateSync({
            name: val.name,
            desc: val.desc,
            start: val.start,
            end: val.end,
            current: val.current,
          });
        } catch (error) {
          _experienceFormToBeValidate.set(val.id, {
            id: val.id,
            errCode: error.message,
            message: ErrorMessage[error.message],
          });
        }
      });

      if (_experienceFormToBeValidate.size) {
        setExperienceFormToBeValidate(_experienceFormToBeValidate);
        return;
      }

      //SUBMIT IF NO VALIDATION ERROR
      onSubmit(values);
    },
  });

  const onSubmit = (val) => {
    // e.preventDefault();

    if (selectedSkills.length <= 0) {
      toast.error("Select atleast one skill");
      return;
    }
    const formData = new FormData();
    const userID = localStorage.getItem("dynamic-id");

    const body = {
      userID: userID,
      name: val.name,
      headerTitle: val.headerTitle,
      template: "template1",
      about: val.about,
      resumeLink: val.resumeLink,
      socialLinks: socialLinks,
      skills: selectedSkills,
      exp: experiences,
      projects: projects,
      theme: data.themes,
      font: data.fontfamily,
    };
    // console.log(body);
    if (portfolioDetails) {
      toast("Please Wait! while we are updating...");

      if (newImage && !file) {
        toast.error("Add Image Please");
        return;
      }
      if (newImage) {
        formData.append("image", file);
      }
      if (selectedSkills.length <= 0) {
        toast.error("Select atleast one skill");
        return;
      }

      apiCommon.putById(id, body, "portfolio", true).then((res) => {
        if (res.status === "200") {
          if (newImage) {
            apiCommon.putFormData(formData, `portfolio/${id}`, true);
          }
          toast.success("Portfolio updated !");
          getPortfolios();
          navigate("/dashboard");
        } else {
          toast.error("Portfolio updation failed !");
        }
      });
    } else {
      toast("Please Wait! while we are adding...");
      if (!file) {
        toast.error("Add Image Please");
        return;
      }
      formData.append("image", file);
      if (selectedSkills.length <= 0) {
        toast.error("Select atleast one skill");
        return;
      }
      apiCommon.post(body, "portfolio", true).then((res) => {
        // console.log(res.id);
        if (res.status === "200") {
          apiCommon
            .putFormData(formData, `portfolio/${res.id}`, true)
            .then((res) => {
              // console.log(res);
              if (res.status === "200") {
                toast.success("Portfolio added !");
                getPortfolios();
                navigate("/dashboard");
              }
            });
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
            className={
              Boolean(formik.touched.name && formik.errors.name) ? "mb-5" : ""
            }
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
              Boolean(formik.touched.headerTitle && formik.errors.headerTitle)
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
              Boolean(formik.touched.about && formik.errors.about) ? "mb-5" : ""
            }
            rows={5}
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.about}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 position-relative">
          <Form.Label>Resume Link</Form.Label>
          <Form.Control
            name="resumeLink"
            value={formik.values.resumeLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={Boolean(
              formik.touched.resumeLink && formik.errors.resumeLink
            )}
            placeholder="www.drive.google/resume"
            className={
              Boolean(formik.touched.resumeLink && formik.errors.resumeLink)
                ? "mb-5"
                : ""
            }
          ></Form.Control>
          <Form.Control.Feedback type="invalid" tooltip>
            {formik.errors.resumeLink}
          </Form.Control.Feedback>
        </Form.Group>
        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
          socialFormToBeValidate={socialFormToBeValidate}
          setSocialFormToBeValidate={setSocialFormToBeValidate}
        />

        <div className="form-group">
          <label htmlFor="about">Profile Image</label>
          {portfolioDetails && newImage && (
            <div className="text-end my-3">
              <button
                className="btn btn-danger py-1 px-3"
                title="Delete New Image"
                onClick={(e) => setNewImage(false)}
              >
                X
              </button>
            </div>
          )}
          {!newImage && (
            <>
              <img
                src={`${CYCLIC_BASE_URL}/common/portfolio/image/${id}`}
                width="350px"
                height="350px"
                style={{ display: "block", margin: "auto" }}
                alt=""
                loading="lazy"
              />
              <div className="text-right w-100">
                <button
                  className="btn btn-neutral py-1 px-3"
                  onClick={(e) => setNewImage(true)}
                  title="Add New Image"
                >
                  Add New Image
                </button>
              </div>
            </>
          )}
        </div>
        {newImage && <Image setFile={setFile} file={file} />}
        <Projects
          projects={projects}
          setProjects={setProjects}
          projectFormToBeValidate={projectFormToBeValidate}
          setProjectFormToBeValidate={setProjectFormToBeValidate}
        />
        <SkillSelect
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
        <Experience
          experiences={experiences}
          setExperiences={setExperiences}
          experienceFormToBeValidate={experienceFormToBeValidate}
          setExperienceFormToBeValidate={setExperienceFormToBeValidate}
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

export default Template1;
