import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { animated } from "react-spring";
import "../styles/OurBenefitsSection.css";

const benefits = [
  {
    icon: "lnr lnr-tag",
    title: "Transparent Pricing",
    description: "Simple and clear pricing. No hidden fees.",
  },
  {
    icon: "lnr lnr-undo",
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund in the first month.",
  },
  {
    icon: "lnr lnr-diamond",
    title: "Unique Ownership",
    description: "All work is 100% unique and owned by you.",
  },
  {
    icon: "lnr lnr-inbox",
    title: "Unlimited Requests",
    description: "Request as much as you need, anytime.",
  },
  {
    icon: "lnr lnr-thumbs-up",
    title: "Premium Quality",
    description: "Top-notch quality in every project.",
  },
  {
    icon: "lnr lnr-clock",
    title: "Fast Turnaround",
    description: "Quick iterations for rapid results.",
  },
  {
    icon: "lnr lnr-checkmark-circle",
    title: "Perfection Guaranteed",
    description: "Meticulous development and QA for flawless products.",
  },
  {
    icon: "lnr lnr-cog",
    title: "Ongoing Support",
    description: "Continuous support even after launch.",
  },
  {
    icon: "lnr lnr-rocket",
    title: "Quality Focused",
    description: "Expertise delivering high-quality software.",
  },
  {
    icon: "lnr lnr-earth",
    title: "Flexible Hours",
    description: "US-based team aligning with all time zones.",
  },
  {
    icon: "lnr lnr-lock",
    title: "Data Security",
    description: "NDA-secured for total confidentiality.",
  },
  {
    icon: "lnr lnr-diamond",
    title: "Industry Leading",
    description: "Adapting to the best industry standards.",
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
          <h2>Exclusive Benefits</h2>
          <p>Experience the unparalleled advantages of SimpleAI.</p>
        </div>
        <div className="benefits-cards">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="icon-wrapper">
                <i className={benefit.icon}></i>
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
