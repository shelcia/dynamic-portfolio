import React, { useRef } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Pattern1Grad } from "../../components/common/CustomPatterns";
import { apiAuth } from "../../services/models/AuthModel";
import * as yup from "yup";
import { useFormik } from "formik";

const Signup = () => {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
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
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      type: "user",
    };

    apiAuth.post(response, "register").then((res) => {
      if (res.status === "200") {
        toast.success(
          "Signup is successfull! You will receive a mail through which verify your account snd login"
        );
        navigate("/login");
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
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="position-relative">
                      <Form.Label id="1">Name</Form.Label>
                      <Form.Control
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={Boolean(
                          formik.touched.name && formik.errors.name
                        )}
                        className={
                          formik.touched.name && formik.errors.name
                            ? "mb-5"
                            : "mb-4"
                        }
                        ref={name}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {formik.errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
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
                            : "mb-4"
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
                        value={"Sign up"}
                        type="submit"
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
              <Row className="mt-3">
                <Col>
                  <Link to="/login" className="text-light">
                    <small> Have an account already ? Then Login</small>
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

export default Signup;
