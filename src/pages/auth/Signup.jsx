import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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
      <section className="section section-shaped section-lg">
        <div className="shape shape-style-1 bg-gradient-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container pt-lg-7">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card bg-secondary shadow border-0">
                <div className="card-body px-lg-5 py-lg-5">
                  <form onSubmit={onSubmit}>
                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <input
                          className="form-control"
                          placeholder="Name"
                          ref={name}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <input
                          className="form-control"
                          placeholder="Email"
                          type="email"
                          ref={email}
                        />
                      </div>
                    </div>
                    <div className="form-group focused">
                      <div className="input-group input-group-alternative">
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          ref={password}
                        />
                      </div>
                    </div>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                    </div>
                    <div className="text-center">
                      {loading ? (
                        <button disabled className="btn btn-primary my-4">
                          Sign up
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary my-4">
                          Sign up
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <Link to="/login" className="text-light">
                    <small> Have an account already ? Then Login</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
