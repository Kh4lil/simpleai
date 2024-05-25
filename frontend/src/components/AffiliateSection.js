import React from "react";
import "../styles/AffiliateSection.css";

const AffiliateSection = () => {
  return (
    <section className="affiliate-section">
      <div className="trusted-by-text">TRUSTED BY</div>
      <div className="elementor-container">
        <div className="arrow arrow-left">&#9664;</div>
        <div className="elementor-row">
          <div className="elementor-column">
            <div className="elementor-image">
              <img
                decoding="async"
                width="600"
                height="600"
                src="https://demo.themovation.com/stratus/wp-content/uploads/2019/08/treva-50.png"
                alt="Treva logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="elementor-column">
            <div className="elementor-image">
              <img
                decoding="async"
                width="600"
                height="600"
                src="https://demo.themovation.com/stratus/wp-content/uploads/2019/08/towers-50.png"
                alt="Towers logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="elementor-column">
            <div className="elementor-image">
              <img
                decoding="async"
                width="600"
                height="600"
                src="https://demo.themovation.com/stratus/wp-content/uploads/2019/08/leaf-50.png"
                alt="Leaf logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="elementor-column">
            <div className="elementor-image">
              <img
                decoding="async"
                width="600"
                height="600"
                src="https://demo.themovation.com/stratus/wp-content/uploads/2019/08/lighting-50.png"
                alt="Lighting logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="elementor-column">
            <div className="elementor-image">
              <img
                decoding="async"
                width="600"
                height="600"
                src="https://demo.themovation.com/stratus/wp-content/uploads/2019/08/volicity9-50.png"
                alt="Volicity logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="arrow arrow-right">&#9654;</div>
      </div>
    </section>
  );
};

export default AffiliateSection;
