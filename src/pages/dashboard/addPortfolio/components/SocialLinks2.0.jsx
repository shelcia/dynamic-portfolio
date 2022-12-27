/**
 * @description
 * WHY SocialLinks2.0
 * =>Created SocialLinks2.0 so that SocialLinks can be used
 *  by other dependents without breaking. SocialLinks2.0 is created
 *  while template 2 and template 3 form validation was created. So
 *  keeping in mind that template 1 can use SocialLink component.
 */

import React from "react";
import SocialLinkForm from "./SocialLinkForm";

const SocialLinks = ({
  socialLinks,
  setSocialLinks,
  socialFormToBeValidate,
  setSocialFormToBeValidate,
}) => {
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
    if (socialFormToBeValidate.size) {
      setSocialFormToBeValidate(new Map());
    }
  };

  const addSocial = (e) => {
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
        {socialLinks.map((socialhandle) => (
          <SocialLinkForm
            key={socialhandle.id}
            delSocial={delSocial}
            socialhandle={socialhandle}
            handleInputs={handleInputs}
            socialFormToBeValidate={socialFormToBeValidate}
          />
        ))}
        <div className="text-right w-100">
          <button
            className="btn btn-neutral py-1 px-3"
            onClick={(e) => addSocial(e)}
            title="Add Social Link"
          >
            Add Social Link
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialLinks;
