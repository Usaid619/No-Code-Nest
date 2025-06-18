"use client";
import React from "react";

const FeatureCard = ({ 
  title, 
  hoverTitle, 
  imageSrc, 
  width, 
  isHovered, 
  onMouseEnter, 
  onMouseLeave 
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`border-3 border-amber-50 bg-transparent ${width} h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${
      isHovered ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""
    }`}
  >
    <h4 className="pt-6 pl-4">
      {isHovered ? hoverTitle : title}
    </h4>
    <div className={`h-20 w-20 ${width === 'w-[17vw]' ? 'ml-36' : 'ml-60'} bg-cover`}>
      <img
        src={imageSrc}
        alt=""
        className={`w-full h-full transition-all duration-200 ease-out ${
          isHovered ? "scale-70 ml-6" : "scale-100"
        }`}
      />
    </div>
  </div>
);

export default function FeatureSection() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const features = [
    {
      id: 1,
      title: "Instant Storefront Creation",
      hoverTitle: "Go live in minutes with just an Excel sheet.",
      imageSrc: "/assets/creation.svg",
      width: "w-[17vw]"
    },
    {
      id: 2,
      title: "Drag & Drop Builder",
      hoverTitle: "Easily design pages—no coding needed",
      imageSrc: "/assets/drag.svg",
      width: "w-[23vw]"
    },
    {
      id: 3,
      title: "AI Powered Chatbot",
      hoverTitle: "Smart, built-in AI for sales & support.",
      imageSrc: "/assets/chatbot.svg",
      width: "w-[23vw]"
    },
    {
      id: 4,
      title: "3D Product Viewer",
      hoverTitle: "Let customers explore products in 3D.",
      imageSrc: "/assets/3d.svg",
      width: "w-[17vw]"
    },
    {
      id: 5,
      title: "Industry-Specific Dashboards",
      hoverTitle: "Tailored analytics for your business type.",
      imageSrc: "/assets/dashboard.svg",
      width: "w-[17vw]"
    },
    {
      id: 6,
      title: "Role-Based Access",
      hoverTitle: "Control what each user can view or edit.",
      imageSrc: "/assets/role.svg",
      width: "w-[17vw]"
    },
    {
      id: 7,
      title: "Visual Commerce Tools",
      hoverTitle: "Reels, video, and popup banners included.",
      imageSrc: "/assets/visual.svg",
      width: "w-[17vw]"
    },
    {
      id: 8,
      title: "Bulk Excel Upload",
      hoverTitle: "Add thousands of products instantly",
      imageSrc: "/assets/bulk.svg",
      width: "w-[23vw]"
    },
    {
      id: 9,
      title: "Auto-Price Engine",
      hoverTitle: "Real-time price logic for metals, grades.",
      imageSrc: "/assets/autoprice.svg",
      width: "w-[23vw]"
    },
    {
      id: 10,
      title: "Built-In SEO Management",
      hoverTitle: "Boost visibility with native SEO tools.",
      imageSrc: "/assets/seo.svg",
      width: "w-[17vw]"
    }
  ];

  return (
    <div className="bg-[#f5f7fa] flex items-center justify-center h-screen w-full">
      <div className="bg-[#0a0d11] text-white font-bold flex flex-col items-center justify-center w-[90%] h-[90%] rounded-3xl">
        <div className="flex flex-row items-center justify-between w-full h-full p-6">
          {features.slice(0, 4).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              hoverTitle={feature.hoverTitle}
              imageSrc={feature.imageSrc}
              width={feature.width}
              isHovered={hoveredCard === feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
        <div className="flex flex-row items-center justify-between w-full h-full p-6">
          {features.slice(4, 5).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              hoverTitle={feature.hoverTitle}
              imageSrc={feature.imageSrc}
              width={feature.width}
              isHovered={hoveredCard === feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <div className="w-[13vw] h-[1px] bg-white" />
            </div>
            <h1 
              className="text-7xl bg-gradient-to-r from-green-700 via-emerald-800 to-black bg-clip-text text-transparent animate-gradient"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FEATURES
            </h1>
            <div className="w-[13vw] h-[1px] bg-white" />
          </div>
          {features.slice(5, 6).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              hoverTitle={feature.hoverTitle}
              imageSrc={feature.imageSrc}
              width={feature.width}
              isHovered={hoveredCard === feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
        <div className="flex flex-row items-center justify-between w-full h-full p-6">
          {features.slice(6).map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              hoverTitle={feature.hoverTitle}
              imageSrc={feature.imageSrc}
              width={feature.width}
              isHovered={hoveredCard === feature.id}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
