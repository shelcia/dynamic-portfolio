import React from "react";
import {
  FaAngellist,
  FaBehance,
  FaBitbucket,
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaMinus,
  // FaPlus,
  FaStackOverflow,
  FaTumblr,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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
        <label htmlFor="skills" className="lead">
          Social Links/Handle
        </label>
        {socialLinks.map((socialhandle, index) => (
          <div key={index} className="mt-2 row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="title">Social Handle</label>
                <div className="input-group">
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
              </div>
            </div>
            <div className="col-sm-8">
              <div className="form-group">
                <label htmlFor="link">Link</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    placeholder="eg. www.portfolio.com"
                    name="link"
                    value={socialhandle.link}
                    onChange={(e) => handleInputs(e, socialhandle.id)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-right w-100">
              <button
                className="btn btn-danger mb-2 py-1 px-3"
                title="Delete Project"
                onClick={(e) => delSocial(e, socialhandle.id)}
              >
                <FaMinus />
              </button>
            </div>
          </div>
        ))}
        <div className="text-right w-100">
          <button
            className="btn btn-neutral py-1 px-3"
            onClick={(e) => addSocial(e)}
            title="Add Social Link"
          >
            Add Social Link
            {/* <FaPlus /> */}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialLinks;

export const social = [
  {
    icon: <FaAngellist />,
    name: "Angel list",
  },
  {
    icon: <FaBehance />,
    name: "Behance",
  },
  {
    icon: <FaBitbucket />,
    name: "Bit Bucket",
  },
  {
    icon: <FaCodepen />,
    name: "Codepen",
  },
  {
    icon: <FaGithub />,
    name: "Github",
  },
  {
    icon: <FaEnvelope />,
    name: "Mail",
  },
  {
    icon: <FaMedium />,
    name: "Medium",
  },
  {
    icon: <FaLinkedin />,
    name: "LinkedIn",
  },
  {
    icon: <FaStackOverflow />,
    name: "Stack Overflow",
  },
  {
    icon: <FaTumblr />,
    name: "Tumblr",
  },
  {
    icon: <FaTwitter />,
    name: "Twitter",
  },
  {
    icon: <FaYoutube />,
    name: "Youtube",
  },
];
