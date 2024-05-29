import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/CareerContactBanner.css";

const CareerContactBanner = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="contact-banner-section">
      <animated.div ref={ref} style={animation} className="container">
        <div className="text-container">
          <h2>Interested in finding out more? Get in touch.</h2>
        </div>
        <div className="button-container">
          <button className="contact-button">Contact Us</button>
        </div>
      </animated.div>
    </section>
  );
};

export default CareerContactBanner;
