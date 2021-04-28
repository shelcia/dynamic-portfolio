import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Topbar from "../../components/LandingPage/Topbar";
import Footer from "../../components/LandingPage/Footer";

const Signup = () => {
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
      <Topbar auth={true} />
      <section className="section section-lg bg-dark pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card bg-primary shadow-soft p-4 rounded">
                <h1 className="display-1 text-light mb-3">Signup</h1>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      ref={name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-white">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      ref={email}
                      required
                    />
                    <small className="form-text text-white">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="text-white">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      ref={password}
                      required
                    />
                  </div>
                  <div className="text-center pt-4">
                    {loading ? (
                      <button
                        className="btn btn-info disabled"
                        type="submit"
                        disabled
                      >
                        Signup
                      </button>
                    ) : (
                      <button className="btn btn-info" type="submit">
                        <i className="ni ni-lock-circle-open mt-1"></i> Signup
                      </button>
                    )}
                  </div>
                </form>
                <div className="w-100 text-center pointer-cursor pt-4 mt-4 text-light">
                  <Link to="/login">Have an account already ? Then Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
