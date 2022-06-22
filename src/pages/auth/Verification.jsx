import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import HashLoader from "react-spinners/HashLoader";

const Verification = ({ match }) => {
  const successNotify = (message) => toast.success(message);
  const failedNotify = (message) => toast.error(message);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verfiy = async () => {
      const link = process.env.REACT_APP_API_LINK;

      try {
        axios
          .put(`${link}auth/verification/${match.params.id}`, {}, {})
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            if (response.data.status === "200")
              successNotify(response.data.message);
            else if (response.data.status === "400" || "500" || "401")
              failedNotify(response.data.message);
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
            failedNotify(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    verfiy();
  }, [match.params.id]);

  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="container pt-4">
          <h3 className="display-2 my-4"> Dynamic Portflio </h3>

          {isLoading ? (
            <HashLoader
              color="rgb(12, 186, 0)"
              loading={isLoading}
              size={150}
            />
          ) : (
            <div className="text-center mt-5">
              <i
                className="fas fa-check-circle text-success"
                style={{ fontSize: "100px" }}
              ></i>
              <h4 className="display-4 text-success mt-4">
                You account is verified
              </h4>
              <Link to="/">
                <button className="btn normal mt-5">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Verification;
