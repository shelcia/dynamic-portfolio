import React from "react";
import "./styles/style.css";
import  {useState} from 'react';

import routes from "./routes";
import { useRoutes } from "react-router";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const top = () => {

    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  }
  const allRoutes = useRoutes(routes);

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
      duration: 3000,
    },
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="App">
      <section className="section1"></section>
      <section className="section2"></section>
      <button onClick={top} className="topbtn"> Scroll Up</button>
    <React.Fragment>
      <ThemeProvider>
        <Toaster toastOptions={toasterOptions} />
        {allRoutes}
      </ThemeProvider>
    </React.Fragment>
    </div>
  );
};

export default App;
