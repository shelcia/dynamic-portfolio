import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="section section-lg bg-dark pt-0">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-5">
            <div className="card  bg-info shadow-soft p-2 p-md-4 p-lg-5">
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label text-dark"
                          htmlFor="firstNameLabel"
                        >
                          First Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user-alt"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="firstNameLabel"
                            placeholder="John"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label text-dark"
                          htmlFor="lastNameLabel"
                        >
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-user-alt"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="lastNameLabel"
                            placeholder="Doe"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label text-dark"
                          htmlFor="EmailLabel"
                        >
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-envelope"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="EmailLabel"
                            placeholder="johndoe@company.com"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label
                          className="form-label text-dark"
                          htmlFor="phonenumberLabel"
                        >
                          Phone Number<span className="text-danger">*</span>
                        </label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-phone-square-alt"></i>
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="phonenumberLabel"
                            placeholder="(555) 555-1234"
                            type="number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <div className="form-group">
                        <label
                          className="form-label text-dark"
                          htmlFor="phonenumberLabel"
                        >
                          How can we help you?
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Hi Impact, I would like to ..."
                          id="message-2"
                          rows="8"
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-secondary mt-4 animate-up-2"
                        >
                          <span className="mr-2">
                            <i className="fas fa-paper-plane"></i>
                          </span>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
