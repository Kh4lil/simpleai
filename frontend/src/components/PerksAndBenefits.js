import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/PerksAndBenefits.css";

const perks = [
  {
    icon: "fas fa-calendar-alt",
    title: "Flexible schedule",
    description:
      "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
  {
    icon: "fas fa-desktop",
    title: "New Apple Computer",
    description:
      "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: "fas fa-plane",
    title: "Paid Holidays",
    description:
      "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
  {
    icon: "fas fa-utensils",
    title: "Open Cafeteria",
    description:
      "Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis. Donec a scelerisque magna.",
  },
  {
    icon: "fas fa-dollar-sign",
    title: "Competitive Salary",
    description:
      "Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent pulvinar congue risus, in tristique.",
  },
  {
    icon: "fas fa-campground",
    title: "Team Building Camps",
    description:
      "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu.",
  },
];

const PerksAndBenefits = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" }, // Appear from further down
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="perks-benefits" className="perks-benefits-section">
      <animated.div
        ref={ref}
        style={animation}
        className="perks-benefits-container"
      >
        <div className="header">
          <h2>Perks and Benefits</h2>
        </div>
        <div className="perks-cards">
          {perks.map((perk, index) => (
            <div className="perk-card" key={index}>
              <div className="icon-wrapper">
                <i className={perk.icon}></i>
              </div>
              <h4>{perk.title}</h4>
              <p>{perk.description}</p>
            </div>
          ))}
        </div>
      </animated.div>
    </section>
  );
};

export default PerksAndBenefits;
