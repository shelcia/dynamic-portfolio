import React, { useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const failedNotify = (message) => toast.error(message);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    toast("We are verifying. Please Wait !!");

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
          navigate("/dashboard");
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
                          Sign in
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-primary my-4">
                          Sign in
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="row mt-3">
                {/* <div className="col-6">
                  <a to="" className="text-light">
                    <small>Forgot password?</small>
                  </a>
                </div> */}
                <div className="col-12">
                  <Link to="/signup" className="text-light">
                    <small> Don't have an account ? Then Signup</small>
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

export default Login;
