import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/CallToActionSection.css";

const CallToActionSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="call-to-action-section">
      <animated.div ref={ref} style={animation} className="container">
        <div className="text-container">
          <h2>Ready to take your startup to the next level?</h2>
        </div>
        <div className="button-container">
          <button className="cta-button">Contact Us</button>
        </div>
      </animated.div>
    </section>
  );
};

export default CallToActionSection;
