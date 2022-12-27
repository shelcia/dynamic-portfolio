/* eslint-disable indent */
import React from "react";
import {
  FaAngellist,
  FaBehance,
  FaBitbucket,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaStackOverflow,
  FaTumblr,
} from "react-icons/fa";
import {
  FiDribbble,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiMail,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
// import { AiOutlineBehance } from "react-icons/ai";

const IconProvider = ({ icon }) => {
  switch (icon) {
    case "Angel list":
      return <FaAngellist />;
    case "Behance":
      return <FaBehance />;
    case "Bit Bucket":
      return <FaBitbucket />;
    case "Codepen":
      return <FaCodepen />;
    case "Dribble":
      return <FiDribbble />;
    case "Github":
      return <FiGithub />;
    case "Gitlab":
      return <FiGitlab />;
    case "Instagram":
      return <FiInstagram />;
    case "Mail":
      return <FiMail />;
    case "Medium":
      return <FaMediumM />;
    case "LinkedIn":
      return <FaLinkedinIn />;
    case "Stack Overflow":
      return <FaStackOverflow />;
    case "Tumblr":
      return <FaTumblr />;
    case "Twitter":
      return <FiTwitter />;
    case "Youtube":
      return <FiYoutube />;
    default:
      return <div></div>;
  }
};

export default IconProvider;
