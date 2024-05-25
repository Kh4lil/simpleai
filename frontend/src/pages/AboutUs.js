import React from "react";
import AboutUsHero from "../components/AboutUsHero";
import "../styles/AboutUsHero.css";
import OurApproachSection from "../components/OurApproachSection";
import WhatsOurSecretSection from "../components/WhatsOurSecretSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <OurApproachSection />
      <WhatsOurSecretSection />
    </>
  );
};

export default AboutUs;
