import React from "react";
import { ThemeProvider } from "./pages/templates/context/ThemeContext";

import routes from "./routes";
import { useRoutes } from "react-router";
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
