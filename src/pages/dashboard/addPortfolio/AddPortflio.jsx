import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Experience from "./Experience";
import Profile from "./Profile";
import Projects from "./Projects";
import SkillSelect from "./SkillsSelect";
import { theme, font } from "../../templates/context/TypoColor";
import SocialLinks from "./SocialLinks";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";

const AddPortfolio = () => {
  const [file, setFile] = useState(null);
  const name = useRef("");
  const headerTitle = useRef("");
  const about = useRef("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "",
      desc: "",
      links: "",
    },
  ]);
  const [experiences, setExperience] = useState([
    {
      id: Date.now(),
      name: "",
      desc: "",
      start: "",
      end: "",
      current: false,
    },
  ]);
  const [themes, setTheme] = useState("greenishblue");
  const [fontfamily, setFontFamily] = useState("fira-sans");
  const [socialLinks, setSocialLinks] = useState([
    {
      id: Date.now(),
      name: "",
      link: "",
    },
  ]);

  const failedNotify = (message) => toast.error(message);
  const successNotify = (message) => toast.success(message);

  const onSubmit = (e) => {
    e.preventDefault();
    toast.warn("Please Wait! while we are adding...");
    const link = process.env.REACT_APP_API_LINK;
    const userID = localStorage.getItem("dynamic-id");
    const token = localStorage.getItem("dynamic-token");
    const headers = {
      "auth-token": token,
    };
    const headersForm = {
      "Content-Type": "multipart/form-data",
      "auth-token": token,
    };
    const formData = new FormData();
    if (!file) {
      failedNotify("Add Image Please");
      return;
    }
    const body = {
      userID: userID,
      name: name.current.value,
      headerTitle: headerTitle.current.value,
      about: about.current.value,
      skills: selectedSkills,
      exp: experiences,
      projects: projects,
      socialLinks: socialLinks,
      theme: themes,
      font: fontfamily,
    };
    console.log(body);
    formData.append("image", file);

    axios
      .post(`${link}common/portfolio`, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === "200") {
          axios
            .put(`${link}common/portfolio/${response.data.id}`, formData, {
              headers: headersForm,
            })
            .then((response) => {
              if (response.data.status === "200") {
                successNotify(response.data.message);
              }
            })
            .catch((error) => console.log(error));
        } else if (response.data.status === "400" || "500" || "401")
          failedNotify(response.data.message);
      })
      .catch((error) => console.log(error));

    // console.log(body);
  };

  return (
    <React.Fragment>
      <div className="container-fluid background" style={{ height: "100vh" }}>
        <Navbar />
        <div className="container">
          <div className="row px-2 pt-5 flex-column">
            <div
              className="card background py-3 px-5 border-0 border rounded-0 shadow-lg"
              style={{ overflowY: "scroll", height: "80vh" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="display-3 text-dark">Add Portfolio</h2>
                <Link to="/dashboard">
                  <button type="button" className="btn normal">
                    Go Back
                  </button>
                </Link>
              </div>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="h3">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    ref={name}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pwd" className="h3">
                    Header Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full stack developer"
                    ref={headerTitle}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="about" className="h3">
                    About
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="I am freelancer aka coolest guy"
                    ref={about}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="about" className="h3">
                    Profile Image
                  </label>
                  <Profile setFile={setFile} file={file} />
                </div>

                <SkillSelect
                  selectedSkills={selectedSkills}
                  setSelectedSkills={setSelectedSkills}
                />
                <Projects projects={projects} setProjects={setProjects} />
                <Experience
                  experiences={experiences}
                  setExperience={setExperience}
                />
                <div className="form-group">
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
                          onChange={(e) => setTheme(e.target.value)}
                        />
                        <i
                          className={`fas fa-square-full text-${theme.class} mr-2 ml-1`}
                        />
                        {theme.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="form-group">
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
                          onChange={(e) => setFontFamily(e.target.value)}
                        />
                        <span className={`text-${theme.class}`}>
                          {theme.name}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <SocialLinks
                  socialLinks={socialLinks}
                  setSocialLinks={setSocialLinks}
                />

                <div className="text-right mt-5 mb-4">
                  <button type="submit" className="btn normal">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPortfolio;
