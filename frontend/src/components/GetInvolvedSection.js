import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/GetInvolvedSection.css";

const GetInvolvedSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="get-involved" className="get-involved-section">
      <animated.div
        ref={ref}
        style={animation}
        className="get-involved-container"
      >
        <div className="get-involved-content">
          <h1 className="get-involved-title">Your AI Journey Starts Here</h1>
          <p className="get-involved-text">
            Embrace the future with AI-powered solutions tailored to your
            business needs. Discover how our expertise can revolutionize your
            products and drive growth. Schedule a free consultation to explore
            your AI opportunities.
          </p>
        </div>
        <a href="#schedule-consultation" className="btn get-involved-button">
          Schedule a Free Consultation <i className="fas fa-arrow-right"></i>
        </a>
      </animated.div>
    </section>
  );
};

export default GetInvolvedSection;
