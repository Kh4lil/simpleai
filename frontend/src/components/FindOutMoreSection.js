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
          <h2>Find Out More</h2>
          <p>
            Discover more about our team, career opportunities, and how to get
            in touch.
          </p>
        </div>
        <div className="info-cards">
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-user"></i>
            </div>
            <h4>Meet the Team</h4>
            <p>
              We're a close-knit team in Austin, TX, passionate about AI and
              innovation. Get to know the people behind the magic.
            </p>
            <a href="#0">Learn more »</a>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-briefcase"></i>
            </div>
            <h4>Careers</h4>
            <p>
              Join our dynamic team and help shape the future of AI. We're
              always looking for creative and driven individuals.
            </p>
            <a href="#0">We're hiring »</a>
          </div>
          <div className="info-card">
            <div className="icon-wrapper">
              <i className="fas fa-comment-alt"></i>
            </div>
            <h4>Contact Us</h4>
            <p>
              Have questions or want to collaborate? We'd love to hear from you!
              Reach out and let's start a conversation.
            </p>
            <a href="#0">Reach out »</a>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default FindOutMoreSection;
