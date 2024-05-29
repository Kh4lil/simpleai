import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/ContactUsDetailsSection.css";

const ContactUsDetailsSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section className="contact-us-section">
      <animated.div ref={ref} style={animation} className="container">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p>
            <i className="fas fa-phone-alt"></i> +1 (800) 555-2478
          </p>
          <p>
            <i className="fas fa-envelope"></i> support@email.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Head office <br />
            1040 Denman Street <br />
            Vancouver, BC, Canada <br />
            V6G 2M5
          </p>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Website" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </animated.div>
    </section>
  );
};

export default ContactUsDetailsSection;
