import React from "react";
import StarryBackground from "./StarryBackground";
import "../styles/HeroSection.css";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";

const HeroSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="hero" className="hero-section">
      <StarryBackground />
      <animated.div ref={ref} style={animation} className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Smart AI Solutions for Modern Needs</h1>
          <p className="hero-text">
            We're a close-knit team in Austin, TX, committed to building AI
            solutions that transform your vision into reality.
          </p>
          <div className="hero-buttons">
            <a href="#start" className="btn btn-primary hero-button">
              Schedule a Call
            </a>
            <a href="#learn" className="btn btn-secondary hero-button">
              Learn More
            </a>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default HeroSection;
