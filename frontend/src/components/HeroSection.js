import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
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
      </div>
    </section>
  );
};

export default HeroSection;
