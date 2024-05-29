import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/AboutUsHero.css";

const AboutUsHero = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="about-us-hero">
      <animated.div ref={ref} style={animation} className="container">
        <div className="content">
          <div className="title-section">
            <h1>About Us</h1>
          </div>
          <div className="text-section">
            <div className="headline">
              <h2>We're building the modern web</h2>
              <p>
                We collaboratively administrate empowered markets through
                existing channels and new opportunities on the horizon. We can
                quickly maximize the timely deliverables for real-time
                presentations to deliver outstanding ROI.
              </p>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <h3>2010</h3>
              <p>Year we were founded</p>
            </div>
            <div className="stat">
              <h3>5m</h3>
              <p>Monthly active users</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Members in our remote team</p>
            </div>
            <div className="stat">
              <h3>67</h3>
              <p>Countries using our products</p>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutUsHero;
