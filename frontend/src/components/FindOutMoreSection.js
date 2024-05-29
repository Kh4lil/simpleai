import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/FindOutMoreSection.css";

const FindOutMoreSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="find-out-more" className="find-out-more-section">
      <animated.div
        ref={ref}
        style={animation}
        className="find-out-more-container"
      >
        <div className="header">
          <h2>Find out more</h2>
          <p>
            Hendrerit ligula eu lobortis maximus. Praesent elementum rhoncus
            convallis dapibus turpis lorem enim.
          </p>
        </div>
        <div className="info-cards">
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-user"></i>
            </div>
            <h4>Meet the Team</h4>
            <p>
              Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
              rhoncus convallis.
            </p>
            <a href="#0">Learn more »</a>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Careers</h4>
            <p>
              Nullam porta, risus quis sollicitudin tempus, nibh enim venenatis
              ante, ac lobortis lacus ligula.
            </p>
            <a href="#0">We're hiring »</a>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-comment-alt"></i>
            </div>
            <h4>Contact Us</h4>
            <p>
              Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl.
              Duis in lectus ac nibh molestie.
            </p>
            <a href="#0">Reach out »</a>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default FindOutMoreSection;
