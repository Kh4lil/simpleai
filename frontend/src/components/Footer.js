import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">Copyright © 2022</p>
        <div className="footer-social-icons">
          <a href="#discord" className="footer-icon">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#telegram" className="footer-icon">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="#twitter" className="footer-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#youtube" className="footer-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
