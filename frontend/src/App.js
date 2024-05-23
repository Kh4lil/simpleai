import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import "./styles/global.css";
import AffiliateSection from "./components/AffiliateSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQSection from "./components/FAQSection";
import FindOutMoreSection from "./components/FindOutMoreSection";
import GetInvolvedSection from "./components/GetInvolvedSection";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="background-overlay"></div>
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AffiliateSection />
          <HowItWorksSection />
          <FAQSection />
          <FindOutMoreSection />
          <GetInvolvedSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
