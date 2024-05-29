import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/CareerImageBannerSection.css";
import image1 from "../assets/images/person5.jpg";
import image2 from "../assets/images/person4.jpg";
import image3 from "../assets/images/person2.jpg";
import image4 from "../assets/images/person3.jpg";

const CareerImageBannerSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="career-image-banner">
      <animated.div ref={ref} style={animation} className="container">
        <div className="image-wrapper">
          <img src={image1} alt="Person 1" className="img1" />
          <img src={image2} alt="Person 2" className="img2" />
          <img src={image3} alt="Person 3" className="img3" />
          <img src={image4} alt="Person 4" className="img4" />
        </div>
      </animated.div>
    </section>
  );
};

export default CareerImageBannerSection;
