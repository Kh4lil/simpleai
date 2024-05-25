import React from "react";
import "../styles/CallToActionSection.css";

const CallToActionSection = () => {
  return (
    <section className="call-to-action-section">
      <div className="container">
        <div className="text-container">
          <h2>Ready to take your startup to the next level?</h2>
        </div>
        <div className="button-container">
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
