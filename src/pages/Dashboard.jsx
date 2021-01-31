import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <div className="container">
          <h1>Dashboard</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
