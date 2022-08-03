import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  // const [darkTheme] = useContext(ThemeContext);
  // const className = darkTheme ? "bg-dark text-light" : "bg-light";
  return (
    <React.Fragment>
      {/* <div className={`container-fluid ${className} py-4`}> */}
      <div className="text-center">
        <p className="mb-0 text-15">Developed with Love and React by Shelcia</p>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Footer;
