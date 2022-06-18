import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
              <label htmlFor="usr">Name</label>
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
              <label htmlFor="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                ref={password}
                required
              />
            </div>
            <div className="text-center pt-2">
              {loading ? (
                <button className="btn normal disabled" type="submit" disabled>
                  Signup
                </button>
              ) : (
                <button className="btn normal" type="submit">
                  Signup
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

export default Signup;
