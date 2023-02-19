import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { apiAuth } from "../../services/models/AuthModel";
import { Pattern1Grad } from "../../components/common/CustomPatterns";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Minimum 6 characters required")
        .required("Password is required"),
    }),
    onSubmit: () => {
      onSubmit();
    },
  });

  const onSubmit = () => {
    toast("We are verifying. Please Wait !!");
    const response = {
      email: email.current.value,
      password: password.current.value,
    };

    apiAuth.post(response, "signin").then((res) => {
      if (res?.status === "200") {
        localStorage.setItem("dynamic-email", email.current.value);
        localStorage.setItem("dynamic-id", res.message?.userId);
        localStorage.setItem("dynamic-token", res.message?.token);
        localStorage.setItem("dynamic-name", res.message?.name);
        localStorage.setItem("dynamic-activated", res.message?.activated);
        navigate("/dashboard");
      } else {
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
                  <div className="alert alert-default p-2" role="alert">
                    <h5 className="text-white mb-0">Demo User</h5>
                    <p
                      className="text-white mb-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span>Email:</span> evert.medhurst52@ethereal.email
                    </p>
                    <p
                      className="text-white mb-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span>Password:</span> password
                    </p>
                  </div>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="position-relative">
                      <Form.Label id="1">Email</Form.Label>
                      <Form.Control
                        name="email"
                        placeholder="name@example.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(
                          formik.touched.email && formik.errors.email
                        )}
                        className={
                          formik.touched.email && formik.errors.email
                            ? "mb-5"
                            : "mb-3"
                        }
                        ref={email}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="position-relative">
                      <Form.Label id="2">Password</Form.Label>
                      <Form.Control
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(
                          formik.touched.password && formik.errors.password
                        )}
                        className={
                          formik.touched.password && formik.errors.password
                            ? "mb-5"
                            : "mb-4"
                        }
                        ref={password}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        style={{ color: "#FFFFFF" }}
                        className="bg-blue"
                        value={"SIGN IN"}
                        type="submit"
                      />
                    </Form.Group>
                  </Form>
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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
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
