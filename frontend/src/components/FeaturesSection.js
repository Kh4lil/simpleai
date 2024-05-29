import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/FeaturesSection.css";

const FeaturesSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="powerful" className="features-section">
      <div className="container">
        <animated.div ref={ref} style={animation} className="features-grid">
          <div className="features-header">
            <h2>Powerful features</h2>
            <p>
              Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
              rhoncus convallis.
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-lock"></i>
            </div>
            <h4>Completely trustless</h4>
            <p>
              Nam nisl lectus, porttitor vel aliquam sit amet, commodo ut nisl.
              Duis in lectus ac nibh molestie.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-safe"></i>
            </div>
            <h4>Proven, tested system</h4>
            <p>
              Aenean tristique iaculis nisi vel efficitur. Etiam tincidunt
              vulputate neque, ut tempus diam.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-world"></i>
            </div>
            <h4>Global network</h4>
            <p>
              Nullam porta, risus quis sollicitudin tempus, nibh enim venenatis
              ante, ac lobortis lacus ligula.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-location"></i>
            </div>
            <h4>Endlessly scalable</h4>
            <p>
              Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
              rhoncus convallis.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
          <div className="feature">
            <div className="icon-wrapper">
              <i className="lnr lnr-layers"></i>
            </div>
            <h4>Blockchain technology</h4>
            <p>
              Ut aliquet orci quis dignissim elementum. Ut gravida iaculis
              maximus sed pretium.
            </p>
            <p>
              <a href="#0">Learn more »</a>
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
