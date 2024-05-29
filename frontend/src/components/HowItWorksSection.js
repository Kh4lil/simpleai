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
            <h2 className="section-title">How it Works</h2>
            <p className="section-subtitle">
              Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
              rhoncus convallis.
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
              <h3>Define</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
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
              <h3>Connect</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
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
              <h3>Expand</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
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
              <h3>Scale</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
