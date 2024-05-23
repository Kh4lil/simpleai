import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Header.css";
import logo from "../assets/images/logo-placeholder.png";

// Throttle function to limit the rate of scroll event handling
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
      console.log("Scroll position:", scrollY);

      if (scrollY > 50) {
        if (!scrolled) {
          setScrolled(true);
          console.log("Scrolled: true");
        }
      } else {
        if (scrolled) {
          setScrolled(false);
          console.log("Scrolled: false");
        }
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);
    console.log("Scroll event listener added");

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      console.log("Scroll event listener removed");
    };
  }, [scrolled]);

  useEffect(() => {
    console.log("Scrolled state changed:", scrolled);
  }, [scrolled]);

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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pages">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shop">
                Shop
              </a>
            </li>
            <li className="nav-item th-accent">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://1.envato.market/stratus"
              >
                Purchase
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
