import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer section pb-3 bg-dark text-white overflow-hidden shadow-soft border-dark">
        {/* <div className="pattern pattern-soft top"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <p className="my-4">
                Create, prototype, collaborate and turn your ideas into
                incredible products with the definitive platform for digital
                design.
              </p>
            </div>
            <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
              <h6>Themesberg</h6>
              <ul className="links-vertical">
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://themesberg.com/blog?ref=creativetim"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://themesberg.com/themes?ref=creativetim"
                  >
                    Themes
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://themesberg.com/contact?ref=creativetim"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3 col-lg-2 mb-4 mb-lg-0">
              <h6>Creative Tim</h6>
              <ul className="links-vertical">
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.creative-tim.com/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.creative-tim.com/templates"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.creative-tim.com/support-terms"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.creative-tim.com/license"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h6>Subscribe</h6>
              <p className="font-small">
                The latest Impact news, articles, and resources, sent straight
                to your inbox every month.
              </p>
              <form action="#">
                <div className="form-row">
                  <div className="col-8">
                    <input
                      type="email"
                      className="form-control mb-2"
                      placeholder="Email Address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-4">
                    <button
                      type="submit"
                      className="btn btn-secondary btn-block"
                    >
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              <small className="mt-2 form-text">
                We’ll never share your details. See our{" "}
                <a
                  rel="noreferrer"
                  href="!#"
                  className="font-weight-bold text-underline"
                >
                  Privacy Policy
                </a>
              </small>
            </div>
          </div>
          <hr className="my-4 my-lg-5" />
          <div className="row">
            <div className="col pb-4 mb-md-0">
              <div className="d-flex text-center justify-content-center align-items-center">
                <p className="font-weight-normal mb-0">
                  ©{" "}
                  <a
                    rel="noreferrer"
                    href="https://themesberg.com?ref=creativetim*"
                    target="_blank"
                  >
                    Themesberg
                  </a>
                  &
                  <a rel="noreferrer" href="https://creative-tim.com">
                    Creative Tim
                  </a>
                  <span className="current-year"></span>. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
