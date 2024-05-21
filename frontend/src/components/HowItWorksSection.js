import React from "react";
import "../styles/HowItWorksSection.css";

const HowItWorksSection = () => {
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
        <div className="row step-container">
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <div className="step-number">1</div>
              <h3>Define</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <div className="step-number">2</div>
              <h3>Connect</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <div className="step-number">3</div>
              <h3>Expand</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
              </p>
            </div>
          </div>
          <div className="col-md-6 step-box">
            <div className="how-it-works-item">
              <div className="step-number">4</div>
              <h3>Scale</h3>
              <p>
                Nullam a arcu eget dolor pellen tesque condimen. Morbi mollis,
                mauris quis suscipit feugiat eros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
