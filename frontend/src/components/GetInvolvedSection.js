import React from "react";
import "../styles/GetInvolvedSection.css";

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="get-involved-section">
      <div className="get-involved-container">
        <div className="get-involved-content">
          <p className="get-involved-subtitle">SAFE / SECURE / PRIVATE</p>
          <h1 className="get-involved-title">The future of finance is DeFi</h1>
          <p className="get-involved-text">
            Aliquam hendrerit ligula eu lobortis maximus. Praesent elementum
            rhoncus convallis. Vivamus sit amet malesuada augue, id sollicitudin
            nunc. Quisque vehicula velit id scelerisque.
          </p>
        </div>
        <a href="#get-involved" className="btn get-involved-button">
          GET INVOLVED <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
