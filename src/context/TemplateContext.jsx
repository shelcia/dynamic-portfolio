import React, { useState, createContext } from "react";
import Img1 from "../assets/1.png";
import Img2 from "../assets/2.png";
import Img3 from "../assets/3.png";

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([
    {
      img: Img1,
      title: "Student Portfolio",
      caption: "",
    },
    {
      img: Img2,
      title: "Photographer Portfolio",
      caption: "",
    },
    {
      img: Img3,
      title: "Blogger Portfolio",
      caption: "",
    },
  ]);

  return (
    <TemplateContext.Provider value={[templates, setTemplates]}>
      {children}
    </TemplateContext.Provider>
  );
};
