import React from "react";

import routes from "./routes";
import { useRoutes } from "react-router";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { PortfoliosProvider } from "./context/PortfoliosContext";

const App = () => {
  const allRoutes = useRoutes(routes);

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Poppins', sans-serif",
      duration: 3000,
    },
  };

  return (
    <React.Fragment>
      <ThemeProvider>
        <PortfoliosProvider>
          <Toaster toastOptions={toasterOptions} />
          {allRoutes}
        </PortfoliosProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
