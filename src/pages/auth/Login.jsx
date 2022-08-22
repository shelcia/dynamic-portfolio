import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiAuth } from "../../services/models/AuthModel";
import { Pattern1Grad } from "../../components/common/CustomPatterns";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../../styles/argon.css";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    toast("We are verifying. Please Wait !!");
    const response = {
      email: email.current.value,
      password: password.current.value,
    };

    apiAuth.post(response, "signin").then((res) => {
      if (res.status === "200") {
        localStorage.setItem("dynamic-email", email.current.value);
        localStorage.setItem("dynamic-id", res?.message?.userId);
        localStorage.setItem("dynamic-token", res?.message?.token);
        localStorage.setItem("dynamic-name", res?.message?.name);
        localStorage.setItem("dynamic-activated", res?.message?.activated);
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
        <Pattern1Grad />
        <Container className="pt-lg-7">
          <Row className="justify-content-center">
            <Col lg={5}>
              <Card className="bg-secondary shadow border-0">
                <Card.Body className="px-lg-5 py-lg-5">
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
                        <Button className="my-4" variant="primary" disabled>
                          Sign in
                        </Button>
                      ) : (
                        <Button
                          className="my-4"
                          variant="primary"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      )}
                    </div>
                  </form>
                </Card.Body>
              </Card>
              <Row className="mt-3">
                {/* <div className="col-6">
                  <a to="" className="text-light">
                    <small>Forgot password?</small>
                  </a>
                </div> */}
                <Col>
                  <Link to="/signup" className="text-light">
                    <small> Don't have an account ? Then Signup</small>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Login;
