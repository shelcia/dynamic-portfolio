import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  CustomSimpleInput,
  CustomTeaxtArea,
} from "../../../../components/common/CustomInputs";
import Experience from "../components/Experience";
import Image from "../components/Image";
import Projects from "../components/Projects";
import SkillSelect from "../components/SkillsSelect";
import SocialLinks from "../components/SocialLinks";
import { apiCommon } from "../../../../services/models/CommonModel";

const Template1 = () => {
  const [data, setData] = useState({
    name: "",
    headerTitle: "",
    about: "",
    resumeLink: "",
    themes: "blue",
    fontfamily: "poppins",
  });
  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [socialLinks, setSocialLinks] = useState([]);
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

  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    toast("Please Wait! while we are adding...");
    const userID = localStorage.getItem("dynamic-id");

    const formData = new FormData();
    if (!file) {
      toast.error("Add Image Please");
      return;
    }
    const body = {
      userID: userID,
      name: data.name,
      headerTitle: data.headerTitle,
      resumeLink: data.resumeLink,
      template: "template1",
      about: data.about,
      skills: selectedSkills,
      exp: experiences,
      projects: projects,
      socialLinks: socialLinks,
      theme: data.themes,
      font: data.fontfamily,
    };
    console.log(body);
    formData.append("image", file);

    apiCommon.post(body, "portfolio", true).then((res) => {
      console.log(res.id);
      if (res.status === "200") {
        apiCommon
          .putFormData(formData, `portfolio/${res.id}`, true)
          .then((res) => {
            console.log(res);
            if (res.status === "200") {
              toast.success("Portfolio added !");
            }
          });
      }
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <CustomSimpleInput
          label="Name"
          name="name"
          value={data.name}
          placeholder="John Doe"
          onChange={handleInputs}
        />
        <CustomSimpleInput
          label="Header"
          name="headerTitle"
          value={data.headerTitle}
          placeholder="Full stack developer"
          onChange={handleInputs}
        />
        <CustomTeaxtArea
          label="About"
          name="about"
          value={data.about}
          placeholder="I am freelancer aka coolest guy"
          onChange={handleInputs}
          type="textarea"
          rows="5"
        />
        <CustomSimpleInput
          label="Resume Link"
          name="resumeLink"
          value={data.resumeLink}
          placeholder="www.drive.google/resume"
          onChange={handleInputs}
        />
        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
        />
        <div className="form-group">
          <label htmlFor="about">Profile Image</label>
          <Image setFile={setFile} file={file} />
        </div>
        <Projects projects={projects} setProjects={setProjects} />
        <SkillSelect
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
        <Experience experiences={experiences} setExperiences={setExperiences} />
        {/* <div className="form-group">
          <label htmlFor="color" className="h3 d-block mb-4">
            Theme Color
          </label>
          {theme.map((theme, index) => (
            <div className="form-check-inline" key={index}>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="theme"
                  value={theme.class}
                  onChange={handleInputs}
                />
                <i
                  className={`fas fa-square-full text-${theme.class} mr-2 ml-1`}
                />
                {theme.name}
              </label>
            </div>
          ))}
        </div> */}
        {/* <div className="form-group">
          <label htmlFor="color" className="h3 d-block mb-4">
            Font Family
          </label>
          {font.map((theme, index) => (
            <div className="form-check-inline" key={index}>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="font"
                  value={theme.class}
                  onChange={handleInputs}
                />
                <span className={`text-${theme.class}`}>{theme.name}</span>
              </label>
            </div>
          ))}
        </div> */}

        <div className="text-right mt-5 mb-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Template1;
