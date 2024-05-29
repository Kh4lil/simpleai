import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Header.css";
import logo from "../assets/images/logo-placeholder.png";

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`navbar navbar-expand-lg navbar-dark custom-header ${
        scrolled ? "custom-header-scrolled" : ""
      }`}
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "background 0.3s ease",
      }}
    >
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} height="30" width="130" alt="Stratus" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#features-section"
                onClick={(e) => handleLinkClick(e, "features-section")}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#how-it-works-section"
                onClick={(e) => handleLinkClick(e, "how-it-works-section")}
              >
                Method
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#faq-section"
                onClick={(e) => handleLinkClick(e, "faq-section")}
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#find-out-more-section"
                onClick={(e) => handleLinkClick(e, "find-out-more-section")}
              >
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#ourBenefits-section"
                onClick={(e) => handleLinkClick(e, "ourBenefits-section")}
              >
                Our Twist
              </a>
            </li>
          </ul>
        </div>
        <a className="cta-button" href="/schedule-consultation">
          Schedule a Free Consultation
        </a>
      </div>
    </header>
  );
};

export default Header;
