import { useFormik } from 'formik'
import React from 'react'
import { FaMinus } from "react-icons/fa";
import { Form } from 'react-bootstrap';
import * as Yup from "yup"
import { ValidationError } from '../enums/ErrorCode'

const ProjectForm = ({
    delProject,
    project,
    handleInputs,
    projectFormToBeValidate,
    index
  }) => {
    
    const formik = useFormik({
        initialValues: {
          title: '',
          desc: '',
          links: '',
        },
        validationSchema: Yup.object().shape({
          title: Yup
            .string()
            .required("Required"),
          desc: Yup
            .string()
            .required("Required"),
          links: Yup
            .string()
            .required("Required")
            .url("Must be a valid url"),
        }),
    })
    return (
        <React.Fragment>
            <Form.Group className="mb-3 position-relative">
                <Form.Label>Project Title</Form.Label>
                <Form.Control
                name="title"
                value={
                  formik.values.title
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, project.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.title
                    && formik.errors.title) ||
                  (projectFormToBeValidate.has(project.id) ?
                    (
                      (projectFormToBeValidate.get(project.id)["errCode"] ===
                        ValidationError.PROJECT_TITLE_REQ)
                    )
                    :
                    false)
                }
                placeholder="Attendance Management"
                className={
                  Boolean(formik.touched.title
                    && formik.errors.title) ||
                    projectFormToBeValidate.has(project.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.title ?
                    formik.errors.title
                    : (
                      projectFormToBeValidate.has(project.id) &&
                      (
                        (projectFormToBeValidate.get(project.id)["errCode"] ===
                          ValidationError.PROJECT_TITLE_REQ)
                      ) &&
                      projectFormToBeValidate.get(project.id)["message"]

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
                  handleInputs(e, project.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.desc
                    && formik.errors.desc) ||
                  (projectFormToBeValidate.has(project.id) ?
                    (
                      (projectFormToBeValidate.get(project.id)["errCode"] ===
                        ValidationError.PROJECT_DESC_REQ)
                    )
                    :
                    false)
                }
                placeholder="lorem ipsum"
                className={
                  Boolean(formik.touched.desc
                    && formik.errors.desc) ||
                    projectFormToBeValidate.has(project.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.desc ?
                    formik.errors.desc
                    : (
                      projectFormToBeValidate.has(project.id) &&
                      (
                        (projectFormToBeValidate.get(project.id)["errCode"] ===
                          ValidationError.PROJECT_DESC_REQ)
                      ) &&
                      projectFormToBeValidate.get(project.id)["message"]

                    )

                }
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
              <Form.Label>Project Link</Form.Label>
              <Form.Control
                name="links"
                value={
                  formik.values.links
                }
                onChange={(e) => {
                  formik.handleChange(e)
                  handleInputs(e, project.id)
                }}
                onBlur={formik.handleBlur}
                isInvalid={
                  Boolean(formik.touched.links
                    && formik.errors.links) ||
                  (projectFormToBeValidate.has(project.id) ?
                    (
                      (projectFormToBeValidate.get(project.id)["errCode"] ===
                        ValidationError.PROJECT_LINKS_REQ) ||
                      (projectFormToBeValidate.get(project.id)["errCode"] ===
                        ValidationError.PROJECT_LINKS_URL)
                    )
                    :
                    false)
                }
                placeholder="https://github.com/shelcia/dynamic-portflio"
                className={
                  Boolean(formik.touched.links
                    && formik.errors.links) ||
                    projectFormToBeValidate.has(project.id)
                    ? "mb-5" : ""
                }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid" tooltip>
                {
                  formik.touched.links ?
                    formik.errors.links
                    : (
                      projectFormToBeValidate.has(project.id) &&
                      (
                        (projectFormToBeValidate.get(project.id)["errCode"] ===
                          ValidationError.PROJECT_LINKS_REQ) ||
                        (projectFormToBeValidate.get(project.id)["errCode"] ===
                          ValidationError.PROJECT_LINKS_URL)
                      ) &&
                      projectFormToBeValidate.get(project.id)["message"]

                    )

                }
              </Form.Control.Feedback>
              </Form.Group>
              <div className="text-right w-100">
              {index !== 0 && (
                <button
                  className="btn btn-danger py-1 px-3 mb-2"
                  type="button"
                  onClick={(e) => delProject(e, project.id)}
                  title="Delete Project"
                >
                  <FaMinus />
                </button>
              )}
            </div>
          
        </React.Fragment>
    )
}

export default ProjectForm;