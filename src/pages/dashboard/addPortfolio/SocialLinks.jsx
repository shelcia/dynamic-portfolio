import React from "react";
import { social } from "../../templates/context/TypoColor";

const SocialLinks = ({ socialLinks, setSocialLinks }) => {
  const handleInputs = (e, id) => {
    const newSocialLinks = socialLinks.map((link) => {
      if (link.id === id) {
        const updatedLink = {
          ...link,
          [e.target.name]: e.target.value,
        };
        return updatedLink;
      }
      return link;
    });
    setSocialLinks(newSocialLinks);
    console.log(socialLinks);
  };
  const addSocial = (e, id) => {
    e.preventDefault();
    const newSocialHandle = [
      ...socialLinks,
      {
        id: Date.now(),
        name: "",
        link: "",
      },
    ];
    setSocialLinks(newSocialHandle);
  };
  const delSocial = (e, id) => {
    e.preventDefault();
    const newSocialHandle = socialLinks.filter((social) => social.id !== id);
    setSocialLinks(newSocialHandle);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="skills" className="h3">
          Social Handles
        </label>
        {socialLinks.map((socialhandle, index) => (
          <div key={index} className="mt-2 row">
            <div className="col-sm-4">
              <label htmlFor="title">Social Handle</label>
              <select
                className="form-control"
                name="name"
                value={socialhandle.name}
                onChange={(e) => handleInputs(e, socialhandle.id)}
              >
                {social.map((social, index) => (
                  <option className={social.name} key={index}>
                    {social.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-8">
              <label htmlFor="title">Link</label>
              <input
                type="text"
                name="link"
                className="form-control mb-3"
                placeholder="lorem ipsum"
                value={socialhandle.link}
                onChange={(e) => handleInputs(e, socialhandle.id)}
                required
              />
            </div>

            <div className="text-right w-100">
              {index !== 0 && (
                <button className="btn normal py-1 px-3 mr-2">
                  <i
                    className="fas fa-minus"
                    style={{ fontSize: "25px" }}
                    onClick={(e) => delSocial(e, socialhandle.id)}
                    title="Delete Project"
                  />
                </button>
              )}
              <button className="btn normal py-1 px-3">
                <i
                  className="fas fa-plus"
                  style={{ fontSize: "25px" }}
                  onClick={(e) => addSocial(e)}
                  title="Add Project"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default SocialLinks;
