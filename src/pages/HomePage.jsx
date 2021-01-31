import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const email = useRef("");
  const password = useRef("");

  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const failedNotify = (message) => toast.error(message);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    toast.warn("We are verifying. Please Wait !!");

    const headers = {
      "Content-Type": "application/json",
    };

    const response = {
      email: email.current.value,
      password: password.current.value,
    };

    const body = JSON.stringify(response);
    const url = `${process.env.REACT_APP_API_LINK}auth/signin`;

    axios
      .post(url, body, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "400") {
          setLoading(false);
          failedNotify(response.data.message);
        } else if (response.data.status === "200") {
          localStorage.setItem("dynamic-email", email.current.value);
          localStorage.setItem("dynamic-id", response.data.message.userId);
          localStorage.setItem("dynamic-token", response.data.message.token);
          localStorage.setItem("dynamic-name", response.data.message.name);
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        failedNotify(error);
      });
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow-lg">
          <Link className="navbar-brand py-2" to="/">
            Dynamic Portflio.
          </Link>
        </nav>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-7">
              <h1> Demo </h1>
            </div>
            <div className="col-sm-5">
              <div className="card login border border-0 rounded-0 shadow">
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="usr">Email:</label>
                      <input type="text" className="form-control" ref={email} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        ref={password}
                      />
                    </div>
                    <div className="text-center">
                      {loading ? (
                        <button
                          className="btn btn-primary disabled"
                          type="submit"
                          disabled
                        >
                          Login
                        </button>
                      ) : (
                        <button className="btn btn-primary" type="submit">
                          Login
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
