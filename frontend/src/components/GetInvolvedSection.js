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
          <p className="get-involved-subtitle">SAFE / SECURE / PRIVATE</p>
          <h1 className="get-involved-title">The future of finance is DeFi</h1>
          <p className="get-involved-text">
            Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
            rhoncus convallis. Vivamus sit amet malesuada augue, id sollicitudin
            nunc. Quisque vehicula velit id scelerisque.
          </p>
        </div>
        <a href="#get-involved" className="btn get-involved-button">
          GET INVOLVED <i className="fas fa-arrow-right"></i>
        </a>
      </animated.div>
    </section>
  );
};

export default GetInvolvedSection;
