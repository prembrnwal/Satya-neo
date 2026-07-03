import React from "react";

import HeroSection from "../home/HeroSection";
import StatsSection from "../home/StatsSection";
import ProblemSection from "../home/ProblemSection";
import SolutionSection from "../home/SolutionSection";
import ComparisonSection from "../home/ComparisonSection";
import ApplicationsSection from "../home/ApplicationsSection";
import TechnologySection from "../home/TechnologySection";
import DashboardPreview from "../home/DashboardPreview";
import Footer from "../layout/Footer";

function HomeScreen() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Statistics */}
      <StatsSection />

      {/* Problem */}
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* Before vs After */}
      <ComparisonSection />

      {/* Applications */}
      <ApplicationsSection />

      {/* Technology */}
      <TechnologySection />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomeScreen;