import React from "react";

import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import FeatureSection from "./FeatureSection";
import Dragdrop from "./Dragdrop";
import Automation from "./Automation";
import Effort from "./Effort";
import Launch from "./Launch";
import Footer from "./Footer";

export default function main() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <Dragdrop />
      <Automation />
      <Effort />
      <Testimonial />
      <Launch />
      <Footer />
    </>
  );
}
