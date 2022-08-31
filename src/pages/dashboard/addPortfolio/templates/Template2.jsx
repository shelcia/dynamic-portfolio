import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  CustomSimpleInput,
  CustomTeaxtArea,
} from "../../../../components/common/CustomInputs";
import { apiCommon } from "../../../../services/models/CommonModel";
import PhotoGallery from "../components/PhotoGallery";
import SocialLinks from "../components/SocialLinks";

const Template2 = () => {
  const [data, setData] = useState({
    name: "",
    headerTitle: "",
    about: "",
    fontfamily: "baskerville",
  });

  const [socialLinks, setSocialLinks] = useState([]);

  const [photoLinks, setPhotoLinks] = useState([
    {
      id: 1,
      link: "",
    },
  ]);

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    toast("Please Wait! while we are adding...");

    const userID = localStorage.getItem("dynamic-id");

    const body = {
      userID: userID,
      name: data.name,
      headerTitle: data.headerTitle,
      template: "template2",
      about: data.about,
      socialLinks: socialLinks,
      font: data.fontfamily,
      photoLinks: photoLinks,
    };
    console.log(body);

    apiCommon.post(body, "portfolio", true).then((res) => {
      console.log(res.id);
      if (res.status === "200") {
        toast.success("Portfolio added !");
        navigate(`/dashboard`);
      } else {
        toast.error("Portfolio addition failed !");
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
        <SocialLinks
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
        />
        <PhotoGallery photoLinks={photoLinks} setPhotoLinks={setPhotoLinks} />
        <div className="text-right mt-5 mb-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Template2;
