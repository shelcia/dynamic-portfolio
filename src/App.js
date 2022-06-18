import React from "react";
import "./styles/style.css";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import HomePage from "./pages/auth/HomePage";
// import Dashboard from "./pages/dashboard/Dashboard";
// import AddPortfolio from "./pages/dashboard/addPortfolio/AddPortflio";
// import Portfolio from "./pages/templates/Portfolio";
import { ThemeProvider } from "./pages/templates/context/ThemeContext";
import { useRoutes } from "react-router";
import routes from "./routes";
// import Verification from "./pages/auth/Verification";
// import EditPortfolio from "./pages/dashboard/editDashboard/EditPortfolio";

const App = () => {
  // const isAuthenticated = () => {
  //   return localStorage.getItem("dynamic-token") &&
  //     localStorage.getItem("dynamic-activated")
  //     ? true
  //     : false;
  // };

  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
  //     }
  //   />
  // );

  const allRoutes = useRoutes(routes);

  return (
    <React.Fragment>
      <ThemeProvider>{allRoutes}</ThemeProvider>
      {/* <BrowserRouter>
        <ThemeProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/verificationtologin/:id"
              exact
              component={Verification}
            />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute
              path="/add-portfolio"
              exact
              component={AddPortfolio}
            />
            <Route path="/edit-portfolio/:id" exact component={EditPortfolio} />
            <Route path="/portfolio/:id" exact component={Portfolio} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter> */}
    </React.Fragment>
  );
};

export default App;
