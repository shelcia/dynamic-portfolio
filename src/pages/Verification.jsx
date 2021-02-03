import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verification = ({ match }) => {
  const successNotify = (message) => toast.success(message);
  const failedNotify = (message) => toast.error(message);

  useEffect(() => {
    const verfiy = async () => {
      const link = process.env.REACT_APP_API_LINK;

      try {
        axios
          .put(`${link}admin/dashboard/about`, {}, {})
          .then((response) => {
            console.log(response.data);
            if (response.data.status === "200")
              successNotify(response.data.message);
            else if (response.data.status === "400" || "500" || "401")
              failedNotify(response.data.message);
          })
          .catch((error) => {
            console.log(error);
            failedNotify(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    verfiy();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="container pt-4">
          <h3 className="display-2 my-4"> Dynamic Portflio </h3>

          <div className="text-center mt-5">
            <i
              className="fas fa-check-circle text-success"
              style={{ fontSize: "100px" }}
            ></i>
            <h4 className="display-4 text-success mt-4">
              You account is verified
            </h4>
            <Link to="/">
              <button className="btn website mt-5">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Verification;
