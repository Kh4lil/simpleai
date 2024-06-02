import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="services" className="features-section">
      <div className="container">
        <animated.div ref={ref} style={animation} className="features-grid">
          <div className="features-header">
            <h2>Our Services</h2>
            <p>
              Empowering your business with cutting-edge technology and tailored
              solutions.
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-laptop-phone"></i>
            </div>
            <h4>Web & App Development</h4>
            <p>Build responsive web applications with modern technologies.</p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-cog"></i>
            </div>
            <h4>AI Product Development</h4>
            <p>Innovate with AI-driven products that set you apart.</p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-code"></i>
            </div>
            <h4>Custom Software</h4>
            <p>
              Tailored full-stack software solutions using Agile methodologies.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-sync"></i>
            </div>
            <h4>System Integrations</h4>
            <p>Seamlessly integrate new apps with your existing systems.</p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-database"></i>
            </div>
            <h4>Data & Analytics</h4>
            <p>Unlock actionable insights with advanced data analytics.</p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-users"></i>
            </div>
            <h4>Agile Teams</h4>
            <p>Accelerate development with our US-based Agile teams.</p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-diamond"></i>
            </div>
            <h4>End-to-End Solutions</h4>
            <p>
              Comprehensive, tailor-made solutions from concept to deployment.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
