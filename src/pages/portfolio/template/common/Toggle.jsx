import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../../../context/ThemeContext";

const Toggle = () => {
  const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  return (
    <React.Fragment>
      <div className="toggle-div">
        {darkTheme ? (
          <FaMoon
            onClick={() => {
              setDarkTheme(!darkTheme);
              localStorage.setItem("dynamic-theme", darkTheme);
            }}
            size={24}
          />
        ) : (
          <FaSun
            color="rgb(255,214,0)"
            onClick={() => {
              setDarkTheme(!darkTheme);
              localStorage.setItem("dynamic-theme", darkTheme);
            }}
            size={24}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Toggle;
