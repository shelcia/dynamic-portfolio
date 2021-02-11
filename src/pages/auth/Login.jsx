import React, { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
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
          localStorage.setItem(
            "dynamic-activated",
            response.data.message.activated
          );
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
      <div className="card p-4 login border border-0 rounded-0 shadow-sm">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="usr">Email</label>
              <input
                type="text"
                className="form-control"
                ref={email}
                required
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="pwd">Password</label>
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

export default Login;
