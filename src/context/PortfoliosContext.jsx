import React, { useState, createContext } from "react";

export const PortfoliosContext = createContext();

export const PortfoliosProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);

  return (
    <PortfoliosContext.Provider value={[portfolios, setPortfolios]}>
      {children}
    </PortfoliosContext.Provider>
  );
};
