import React from "react";
import CareerHero from "../components/CareersHero";
import "../styles/CareersHero.css";
import CareerImageBannerSection from "../components/CareerImageBannerSection";
import PerksAndBenefits from "../components/PerksAndBenefits";
import JobListingSection from "../components/JobListingSection";
import CareerContactBanner from "../components/CareerContactBanner";
import SummaryFooter from "../components/SummaryFooter";

const Careers = () => {
  return (
    <>
      <CareerHero />
      <CareerImageBannerSection />
      <PerksAndBenefits />
      <JobListingSection />
      <CareerContactBanner />
      <SummaryFooter />
    </>
  );
};

export default Careers;
