import { FaBehance } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { AiOutlineBehance } from "react-icons/ai";

const IconProvider = ({ icon }) => {
  switch (icon) {
    case "Behance":
      return <FaBehance />;
    case "Github":
      return <FiGithub />;
    default:
      return <div></div>;
  }
};

export default IconProvider;
