import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/CareersHero.css";
import careerImage from "../assets/images/careers1.jpg";

const CareersHero = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="careers-hero">
      <animated.div ref={ref} style={animation} className="container">
        <div className="title-section">
          <h1>Careers</h1>
        </div>
        <div className="content">
          <div className="text-section">
            <div className="headline">
              <h2 className="secondary-title">
                Not just work - your life's best work
              </h2>
              <p>
                We collaboratively administrate empowered markets through
                existing channels and new opportunities on the horizon. We can
                quickly maximize the timely deliverables for real-time
                presentations to deliver outstanding ROI.
              </p>
            </div>
          </div>
          <div className="image-section">
            <img src={careerImage} alt="Career" />
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default CareersHero;
