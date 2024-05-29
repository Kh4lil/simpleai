import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AffiliateSection from "../components/AffiliateSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FAQSection from "../components/FAQSection";
import FindOutMoreSection from "../components/FindOutMoreSection";
import GetInvolvedSection from "../components/GetInvolvedSection";
import OurBenefitsSection from "../components/OurBenefitsSection";

const Home = () => {
  return (
    <>
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="features-section">
        <FeaturesSection />
      </div>
      <div id="affiliate-section">
        <AffiliateSection />
      </div>
      <div id="how-it-works-section">
        <HowItWorksSection />
      </div>
      <div id="ourBenefits-section">
        <OurBenefitsSection />
      </div>
      <div id="faq-section">
        <FAQSection />
      </div>
      <div id="find-out-more-section">
        <FindOutMoreSection />
      </div>
      <div id="get-involved-section">
        <GetInvolvedSection />
      </div>
    </>
  );
};

export default Home;
