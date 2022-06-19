import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { apiAuth } from "../../services/models/AuthModel";

const Signup = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    toast("We are verifying. Please Wait !!");

    const response = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      type: "user",
    };

    apiAuth.post(response, "signin").then((res) => {
      if (res.status === "200") {
        // localStorage.setItem("dynamic-email", email.current.value);
        // localStorage.setItem("dynamic-id", res?.message?.userId);
        // localStorage.setItem("dynamic-token", res?.message?.token);
        // localStorage.setItem("dynamic-name", res?.message?.name);
        // localStorage.setItem("dynamic-activated", res?.message?.activated);
        toast.success("Signup is succesfull! Please login");
        navigate("/dashboard");
      } else {
        setLoading(false);
        toast.error(res.message);
      }
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
