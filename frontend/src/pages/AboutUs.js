import React from "react";
import AboutUsHero from "../components/AboutUsHero";
import "../styles/AboutUsHero.css";
import OurApproachSection from "../components/OurApproachSection";
import WhatsOurSecretSection from "../components/WhatsOurSecretSection";
import OurValuesSection from "../components/OurValuesSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <OurApproachSection />
      <WhatsOurSecretSection />
      <OurValuesSection />
    </>
  );
};

export default AboutUs;
