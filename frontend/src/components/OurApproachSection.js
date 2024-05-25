import React from "react";
import "../styles/OurApproachSection.css";
import teamImage from "../assets/images/team1.jpg"; // Import the image

const OurApproachSection = () => {
  return (
    <section className="our-approach">
      <div className="container">
        <div className="text-content">
          <h4>OUR APPROACH</h4>
          <h2>Results oriented</h2>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo,
            in varius diam fusce tellus.
          </p>
          <button
            className="btn"
            onClick={() => alert("Find Out More clicked!")}
          >
            Find Out More
          </button>
        </div>
        <div className="image-content">
          <img src={teamImage} alt="Team working" />
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
