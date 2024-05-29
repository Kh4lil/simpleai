import React from "react";
import "../styles/CareerContactBanner.css";

const CareerContactBanner = () => {
  return (
    <section className="contact-banner-section">
      <div className="container">
        <div className="text-container">
          <h2>Interested in finding out more? Get in touch.</h2>
        </div>
        <div className="button-container">
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CareerContactBanner;
