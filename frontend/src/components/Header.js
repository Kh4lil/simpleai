import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark"
      role="banner"
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
