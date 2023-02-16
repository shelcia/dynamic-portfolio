import React from "react";
import img1 from "../assets/arrow.png"
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if ((window, scrollY > 100)) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div classname="App">
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "30px",
            fontSize: "30px",
            borderRadius:"30px",
            cursor:"pointer",
            backgroundColor:"#ffffff",
          }}
          onClick={scrollUp}
        >
          
          <img src={img1}
          style={{
            height:"30px",
            width:"30px",
            
          }}></img>
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;