import React from "react";

import routes from "./routes";
import { useRoutes } from "react-router";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

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
      <ThemeProvider>
        <Toaster toastOptions={toasterOptions} />
        {allRoutes}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
