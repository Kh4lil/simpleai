import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/HowItWorksSection.css";

const HowItWorksSection = () => {
  const { ref: sectionRef, animation: sectionAnimation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  const { ref: numberRef1, animation: numberAnimation1 } = useInViewAnimation(
    { opacity: 0, transform: "translateY(-100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  const { ref: numberRef2, animation: numberAnimation2 } = useInViewAnimation(
    { opacity: 0, transform: "translateY(-100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  const { ref: numberRef3, animation: numberAnimation3 } = useInViewAnimation(
    { opacity: 0, transform: "translateY(-100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  const { ref: numberRef4, animation: numberAnimation4 } = useInViewAnimation(
    { opacity: 0, transform: "translateY(-100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="section-title">Step by Step</h2>
            <p className="section-subtitle">
              Build & Launch with Ease
              <br />
              Enjoy a seamless software development experience with our
              customized approach, ensuring your vision transforms smoothly from
              concept to completion.
            </p>
          </div>
        </div>
        <animated.div
          ref={sectionRef}
          style={sectionAnimation}
          className="row step-container"
        >
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <animated.div
                ref={numberRef1}
                style={numberAnimation1}
                className="step-number"
              >
                1
              </animated.div>
              <h3>Let's Talk</h3>
              <p>
                Share your vision with us. We collaborate closely to understand
                your needs and set the foundation for success.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <animated.div
                ref={numberRef2}
                style={numberAnimation2}
                className="step-number"
              >
                2
              </animated.div>
              <h3>Design & Plan</h3>
              <p>
                Visualize your project with stunning mockups and a strategic
                plan that aligns with your goals.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <animated.div
                ref={numberRef3}
                style={numberAnimation3}
                className="step-number"
              >
                3
              </animated.div>
              <h3>Develop</h3>
              <p>
                Watch your ideas come to life as our expert developers build
                your solution using cutting-edge technologies.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <animated.div
                ref={numberRef4}
                style={numberAnimation4}
                className="step-number"
              >
                4
              </animated.div>
              <h3>Launch & Grow</h3>
              <p>
                We ensure a smooth launch and provide ongoing support to help
                your business scale and thrive.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
