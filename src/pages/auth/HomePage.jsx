import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLogin }) => {
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
      <div className="card p-4 login border border-0 rounded-0 shadow">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="usr">Email:</label>
              <input
                type="text"
                className="form-control"
                ref={email}
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                ref={password}
                required
              />
            </div>
            <div className="text-center pt-4">
              {loading ? (
                <button className="btn website disabled" type="submit" disabled>
                  Login
                </button>
              ) : (
                <button className="btn website" type="submit">
                  Login
                </button>
              )}
            </div>
            <div className="w-100 text-center pointer-cursor pt-4 mt-4">
              <p onClick={() => setIsLogin(false)}>
                Don't have an account ? Then Signup
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const Signup = ({ setIsLogin }) => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

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
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      type: "user",
    };

    const body = JSON.stringify(response);
    const url = `${process.env.REACT_APP_API_LINK}auth/register`;

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
          setLoading(false);
          setIsLogin(true);
          toast.success("Signup is succesfull! Please login");
        }
      })
      .catch((error) => {
        console.log(error);
        failedNotify(error);
      });
  };
  return (
    <React.Fragment>
      <div className="card p-2 login border border-0 rounded-0 shadow">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="usr">Name:</label>
              <input type="text" className="form-control" ref={name} required />
            </div>
            <div className="form-group">
              <label htmlFor="usr">Email:</label>
              <input
                type="text"
                className="form-control"
                ref={email}
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                ref={password}
                required
              />
            </div>
            <div className="text-center pt-2">
              {loading ? (
                <button className="btn website disabled" type="submit" disabled>
                  Login
                </button>
              ) : (
                <button className="btn website" type="submit">
                  Login
                </button>
              )}
            </div>
            <div className="w-100 text-center pointer-cursor pt-4 mt-4">
              <p onClick={() => setIsLogin(true)}>
                Have an account already ? Then Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true);

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
              {isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Signup setIsLogin={setIsLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
