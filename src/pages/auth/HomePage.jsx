import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "../../components/LandingPage/AboutUs";
import Contact from "../../components/LandingPage/ContactUs";
import Footer from "../../components/LandingPage/Footer";
import Header from "../../components/LandingPage/Header";
import Topbar from "../../components/LandingPage/Topbar";
import Template1 from "../../styles/assets/img/templates/template.jpg";

// import Login from "./Login";
// import Signup from "./Signup";

const HomePage = () => {
  // const [isLogin, setIsLogin] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Topbar />
      <Header />
      <AboutUs />
      <section className="section section-lg bg-dark pt-0" id="templates">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-5 mb-lg-7">
            <div className="col-sm-10 d-flex justify-content-center align-items-left flex-column">
              <Slider {...settings}>
                <div>
                  <img src={Template1} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={Template1} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={Template1} alt="" className="img-fluid" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
