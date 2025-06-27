import React from "react";
import Hero from "./landing-page/Hero";
import OneMinute from "./landing-page/OneMinute";
import FeatureSection from "./landing-page/FeatureSection";
import Pitch from "./landing-page/Pitch";
import Testimonial from "./landing-page/testimonial";
import CallToAction from "./landing-page/CallToAction";

export default function Page() {
  return (
  <div className="restrict overflow-hidden">
      <Hero />
      <OneMinute/>
      <FeatureSection />
      <Pitch/>
      <Testimonial /> 
      <CallToAction/>
    </div>
  );
}
