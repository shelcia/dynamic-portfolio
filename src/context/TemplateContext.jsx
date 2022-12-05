import React, { useState, createContext } from "react";
import Img1 from "../assets/1.webp";
import Img2 from "../assets/2.webp";
import Img3 from "../assets/3.webp";
// import Img3 from "../assets/3.png";

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([
    {
      img: Img1,
      title: "Student Portfolio",
      caption: "",
      id: "630f44611ddb0f899c66e399",
    },
    {
      img: Img2,
      title: "Photographer Portfolio",
      caption: "",
      id: "630f51c81ddb0f899c66e39a",
    },
    {
      img: Img3,
      title: "Designer/Writer Portfolio",
      caption: "",
      id: "638e3ff00640c1002987cc1e",
    },
    // {
    //   img: Img3,
    //   title: "Blogger Portfolio",
    //   caption: "",
    // },
  ]);

  return (
    <TemplateContext.Provider value={[templates, setTemplates]}>
      {children}
    </TemplateContext.Provider>
  );
};
