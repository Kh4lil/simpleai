import React from "react";
import CareerHero from "../components/CareersHero";
import "../styles/CareersHero.css";
import CareerImageBannerSection from "../components/CareerImageBannerSection";
import PerksAndBenefits from "../components/PerksAndBenefits";

const Careers = () => {
  return (
    <>
      <CareerHero />
      <CareerImageBannerSection />
      <PerksAndBenefits />
    </>
  );
};

export default Careers;
