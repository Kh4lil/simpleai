import React, { useState } from "react";
import "../styles/AffiliateSection.css";

const icons = [
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/treva-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/towers-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/leaf-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/lighting-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/volicity9-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/treva-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/towers-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/leaf-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/lighting-50.png",
  "https://demo.themovation.com/stratus/wp-content/uploads/2019/08/volicity9-50.png",
];

const AffiliateSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + icons.length) % icons.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % icons.length);
  };

  const getVisibleIcons = () => {
    const start = currentIndex;
    const end = (currentIndex + 5) % icons.length;
    if (start < end) {
      return icons.slice(start, end);
    } else {
      return [...icons.slice(start), ...icons.slice(0, end)];
    }
  };

  return (
    <section className="affiliate-section">
      <div className="trusted-by-text">TRUSTED BY</div>
      <div className="elementor-container">
        <div className="arrow arrow-left" onClick={handlePrevClick}>
          &#9664;
        </div>
        <div className="elementor-row">
          {getVisibleIcons().map((src, index) => (
            <div className="elementor-column" key={index}>
              <div className="elementor-image">
                <img
                  decoding="async"
                  width="600"
                  height="600"
                  src={src}
                  alt={`Icon ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="arrow arrow-right" onClick={handleNextClick}>
          &#9654;
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
