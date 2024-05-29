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
          <p className="hero-subtitle">SAFE / SECURE / PRIVATE</p>
          <h1 className="hero-title">The future of finance is DeFi</h1>
          <div className="hero-buttons">
            <a href="#start" className="btn btn-primary hero-button">
              Start for Free
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
