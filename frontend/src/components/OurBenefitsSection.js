import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/OurBenefitsSection.css";
import image1 from "../assets/images/tempBenefit1.svg";

const benefits = [
  {
    icon: image1,
    title: "Pause or Cancel Anytime",
    description:
      "Pause when you don't have more work, and resume where you left off, whenever.",
  },
  {
    icon: "path/to/fixed-rates-icon.png",
    title: "Fixed Monthly Rates. No Surprises",
    description:
      "Our pricing is transparent, and simple. You know exactly what you're paying, no surprise fees.",
  },
  {
    icon: "path/to/money-back-icon.png",
    title: "Not Happy? Money Back",
    description:
      "If you don't like the work, within the first month of work, get all your money back. Guaranteed.",
  },
  {
    icon: "path/to/flexible-scalable-icon.png",
    title: "Flexible & Scalable",
    description:
      "Scale up, or down, changing subscriptions if and when you need.",
  },
  {
    icon: "path/to/onboarding-icon.png",
    title: "24 Hour Onboarding",
    description:
      "Our process is simple, & streamline. Within 24 hours, you can get setup and start getting things done.",
  },
  {
    icon: "path/to/unique-icon.png",
    title: "100% Unique, and Always Yours",
    description:
      "All of our work is always unique to you, and 100% owned by you.",
  },
  {
    icon: "path/to/unlimited-requests-icon.png",
    title: "Unlimited Requests",
    description:
      "Make as many requests as you need, and we'll get to them quickly.",
  },
  {
    icon: "path/to/high-quality-icon.png",
    title: "High Quality Output",
    description:
      "We ensure the highest quality in all our work, delivering results you'll be proud of.",
  },
  {
    icon: "path/to/fast-iterations-icon.png",
    title: "Fast & Furious Iterations",
    description:
      "We iterate quickly, ensuring you get the best results in the shortest time possible.",
  },
];

const OurBenefitsSection = () => {
  const { ref, animation } = useInViewAnimation(
    { opacity: 0, transform: "translateY(100px)" },
    { opacity: 1, transform: "translateY(0px)" }
  );

  return (
    <section id="our-benefits" className="our-benefits-section">
      <animated.div
        ref={ref}
        style={animation}
        className="our-benefits-container"
      >
        <div className="header">
          <h2>Benefits you get nowhere else</h2>
          <p>Minthouse is a one-of-a-kind subscription you find nowhere else</p>
        </div>
        <div className="benefits-cards">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon-wrapper">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </animated.div>
    </section>
  );
};

export default OurBenefitsSection;
