import React from "react";
import AboutUsHero from "../components/AboutUsHero";
import "../styles/AboutUsHero.css";
import OurApproachSection from "../components/OurApproachSection";
import WhatsOurSecretSection from "../components/WhatsOurSecretSection";
import OurValuesSection from "../components/OurValuesSection";
import AffiliateSection from "../components/AffiliateSection";
import CallToActionSection from "../components/CallToActionSection";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <OurApproachSection />
      <WhatsOurSecretSection />
      <OurValuesSection />
      <AffiliateSection />
      <CallToActionSection />
    </>
  );
};

export default AboutUs;
