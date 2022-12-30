import { useFormik } from 'formik'
import React from 'react'
import { FaMinus } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import * as Yup from "yup";
import { ValidationError } from '../enums/ErrorCode';
import { Row, Col } from "react-bootstrap";

const ExperienceForm = ({
    delExperience,
    experience,
    handleInputs,
    handleCheck,
    experienceFormToBeValidate,
    index
  }) => {
    
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
        },
        validationSchema: Yup.object().shape({
          name: Yup
            .string()
            .required("Required"),
          desc: Yup
            .string()
            .required("Required"),
          start: Yup
            .date()
            .required("Required"),
          end: Yup
            .date()
            .required("Required"),
          current: Yup
            .boolean(),
        }),
    })
    return (
        <React.Fragment>
            <Form.Group className="mb-3 position-relative">
                <Form.Label>Company/Institute Name</Form.Label>
                <Form.Control
                name="name"
                value={
                  formik.values.name
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, experience.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.name
                    && formik.errors.name) ||
                  (experienceFormToBeValidate.has(experience.id) ?
                    (
                      (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                        ValidationError.EXPERIENCE_NAME_REQ)
                    )
                    :
                    false)
                }
                placeholder="Amazon"
                className={
                  Boolean(formik.touched.name
                    && formik.errors.name) ||
                    experienceFormToBeValidate.has(experience.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.name ?
                    formik.errors.name
                    : (
                      experienceFormToBeValidate.has(experience.id) &&
                      (
                        (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                          ValidationError.EXPERIENCE_NAME_REQ)
                      ) &&
                      experienceFormToBeValidate.get(experience.id)["message"]

                    )

                }
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
                <Form.Label>Description</Form.Label>
                <Form.Control
                name="desc"
                value={
                  formik.values.desc
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, experience.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.desc
                    && formik.errors.desc) ||
                  (experienceFormToBeValidate.has(experience.id) ?
                    (
                      (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                        ValidationError.EXPERIENCE_DESC_REQ)
                    )
                    :
                    false)
                }
                placeholder="lorem ipsum"
                className={
                  Boolean(formik.touched.desc
                    && formik.errors.desc) ||
                    experienceFormToBeValidate.has(experience.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.desc ?
                    formik.errors.desc
                    : (
                      experienceFormToBeValidate.has(experience.id) &&
                      (
                        (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                          ValidationError.EXPERIENCE_DESC_REQ)
                      ) &&
                      experienceFormToBeValidate.get(experience.id)["message"]

                    )

                }
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3 position-relative">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                name="start"
                type="date"
                value={
                  formik.values.start || ""
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, experience.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.start
                    && formik.errors.start) ||
                  (experienceFormToBeValidate.has(experience.id) ?
                    (
                      (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                        ValidationError.EXPERIENCE_START_REQ)
                    )
                    :
                    false)
                }
                placeholder="22-02-2016"
                className={
                  Boolean(formik.touched.start
                    && formik.errors.start) ||
                    experienceFormToBeValidate.has(experience.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.start ?
                    formik.errors.start
                    : (
                      experienceFormToBeValidate.has(experience.id) &&
                      (
                        (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                          ValidationError.EXPERIENCE_START_REQ)
                      ) &&
                      experienceFormToBeValidate.get(experience.id)["message"]

                    )

                }
              </Form.Control.Feedback>
            </Form.Group>
              </Col>
              {!experience.current && (
                <Col sm={6}>
                  <Form.Group className="mb-3 position-relative">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                name="end"
                type="date"
                value={
                  formik.values.end || ""
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, experience.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.end
                    && formik.errors.end) ||
                  (experienceFormToBeValidate.has(experience.id) ?
                    (
                      (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                        ValidationError.EXPERIENCE_END_REQ)
                    )
                    :
                    false)
                }
                placeholder="22-02-2016"
                className={
                  Boolean(formik.touched.end
                    && formik.errors.end) ||
                    experienceFormToBeValidate.has(experience.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.end ?
                    formik.errors.end
                    : (
                      experienceFormToBeValidate.has(experience.id) &&
                      (
                        (experienceFormToBeValidate.get(experience.id)["errCode"] ===
                          ValidationError.EXPERIENCE_END_REQ)
                      ) &&
                      experienceFormToBeValidate.get(experience.id)["message"]

                    )

                }
              </Form.Control.Feedback>
            </Form.Group>
                </Col>
              )}
            </Row>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="current"
                  value={experience.current}
                  onChange={(e) => handleCheck(e, experience.id)}
                />
                Currently Working
              </label>
            </div>
        

            <div className="text-right w-100">
              {index !== 0 && (
                <button
                  className="btn btn-danger py-1 px-3 mr-2"
                  type="button"
                  onClick={(e) => delExperience(e, experience.id)}
                  title="Delete Experience"
                >
                  <FaMinus />
                </button>
              )}
            </div>
          
        </React.Fragment>
    )
}

export default ExperienceForm;