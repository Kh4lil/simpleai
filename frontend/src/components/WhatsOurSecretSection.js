import React from "react";
import "../styles/WhatsOurSecretSection.css";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";

const WhatsOurSecretSection = () => {
  return (
    <section className="whats-our-secret">
      <div className="container">
        <div className="image-content">
          <img
            src={person1}
            alt="Person 1"
            className="person-image"
            id="person1"
          />
          <img
            src={person2}
            alt="Person 2"
            className="person-image"
            id="person2"
          />
          <img
            src={person3}
            alt="Person 3"
            className="person-image"
            id="person3"
          />
        </div>
        <div className="text-content">
          <h4>THE HUMAN ELEMENT</h4>
          <h2>
            What's our secret?
            <br />
            Great people.
          </h2>
          <p>
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue justo,
            in varius diam fusce tellus.
          </p>
          <button
            className="btn"
            onClick={() => alert("Meet the Team clicked!")}
          >
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatsOurSecretSection;
