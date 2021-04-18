import React from "react";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "../../components/LandingPage/AboutUs";
import Header from "../../components/LandingPage/Header";
import Topbar from "../../components/LandingPage/Topbar";

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
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </React.Fragment>
  );
};

export default HomePage;
