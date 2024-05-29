import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/OurApproachSection.css";
import teamImage from "../assets/images/team1.jpg";

const OurApproachSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="our-approach">
      <animated.div ref={ref} style={animation} className="container">
        <div className="text-content">
          <h4>OUR APPROACH</h4>
          <h2>Results oriented</h2>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo,
            in varius diam fusce tellus.
          </p>
          <button
            className="btn"
            onClick={() => alert("Find Out More clicked!")}
          >
            Find Out More
          </button>
        </div>
        <div className="image-content">
          <img src={teamImage} alt="Team working" />
        </div>
      </animated.div>
    </section>
  );
};

export default OurApproachSection;
