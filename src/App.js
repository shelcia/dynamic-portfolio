import React from "react";
import "./styles/argon.css";
import "./styles/style.css";

import { ThemeProvider } from "./pages/templates/context/ThemeContext";
import { useRoutes } from "react-router";
import routes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  const allRoutes = useRoutes(routes);

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
    },
  };

  return (
    <React.Fragment>
      <Toaster toastOptions={toasterOptions} />
      <ThemeProvider>{allRoutes}</ThemeProvider>
    </React.Fragment>
  );
};

export default App;
