import React from "react";

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
      {allRoutes}
    </React.Fragment>
  );
};

export default App;
