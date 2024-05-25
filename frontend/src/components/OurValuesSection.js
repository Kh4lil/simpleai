import React from "react";
import "../styles/OurValuesSection.css";

const values = [
  {
    icon: "fas fa-gem",
    title: "Authenticity",
    description:
      "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
  {
    icon: "fas fa-users",
    title: "Togetherness",
    description:
      "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: "fas fa-trophy",
    title: "Gratitude",
    description:
      "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Transparency",
    description:
      "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Inspiration",
    description:
      "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
  {
    icon: "fas fa-headset",
    title: "Service",
    description:
      "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
];

const OurValuesSection = () => {
  return (
    <section id="our-values" className="our-values-section">
      <div className="our-values-container">
        <div className="header">
          <h2>Our values</h2>
        </div>
        <div className="values-cards">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="icon-wrapper">
                <i className={value.icon}></i>
              </div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
