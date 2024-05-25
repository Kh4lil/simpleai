import React from "react";
import "../styles/SummaryFooter.css";

const SummaryFooter = () => {
  return (
    <footer className="summary-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column about-us">
            <h3>About Us</h3>
            <hr />
            <p>
              Stratus is a powerful WordPress theme designed for app, SaaS, &
              tech startups, including all the important features you need to
              make your business successful.
            </p>
          </div>
          <div className="footer-column contact-info">
            <h3>Contact Info</h3>
            <hr />
            <p>
              <i className="fas fa-envelope"></i> contact@themovation.com
            </p>
            <p>
              <i className="fas fa-phone"></i> 1-800-222-4545
            </p>
            <p className="location">
              <i className="fas fa-map-marker-alt"></i> Location
            </p>
            <h4>Be Social</h4>
            <hr />
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="footer-column contact-us">
            <h3>Contact Us</h3>
            <hr />
            <form
              className="contact-form"
              action="mailto:contact@themovation.com"
              method="post"
              enctype="text/plain"
            >
              <input type="text" name="name" placeholder="Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SummaryFooter;
