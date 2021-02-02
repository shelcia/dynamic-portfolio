import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddPortfolio from "./pages/AddPortflio";
import Portfolio from "./pages/templates/Portfolio";
import { ThemeProvider } from "./pages/templates/context/ThemeContext";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/add-portfolio" exact component={AddPortfolio} />
            <Route path="/portfolio/:id" exact component={Portfolio} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
