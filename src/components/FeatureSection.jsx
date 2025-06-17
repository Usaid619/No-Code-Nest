"use client";
import React from "react";

export default function FeatureSection() {
  const [isHoveredOne, setIsHoveredOne] = React.useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = React.useState(false);
  const [isHoveredThree, setIsHoveredThree] = React.useState(false);
  const [isHoveredFour, setIsHoveredFour] = React.useState(false);
  const [isHoveredFive, setIsHoveredFive] = React.useState(false);
  const [isHoveredSix, setIsHoveredSix] = React.useState(false);
  const [isHoveredSeven, setIsHoveredSeven] = React.useState(false);
  const [isHoveredEight, setIsHoveredEight] = React.useState(false);
  const [isHoveredNine, setIsHoveredNine] = React.useState(false);
  const [isHoveredTen, setIsHoveredTen] = React.useState(false);

  return (
    <>
      <div className="bg-[#f5f7fa] flex items-center justify-center h-screen w-full">
        <div className="bg-[#0a0d11] text-white font-bold flex flex-col items-center justify-center w-[90%] h-[90%] rounded-3xl">
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div
              onMouseEnter={() => setIsHoveredOne(true)}
              onMouseLeave={() => setIsHoveredOne(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredOne ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredOne ? (
                  <>
                  Go live in minutes <br /> with just an Excel <br /> sheet.
                  </>
                ) : (
                  <>
                    Instant Storefront <br /> Creation
                  </>
                )}
              </h4>
              <div className="h-20 w-20 ml-36 bg-cover">
                <img
                  src="/assets/creation.svg"
                  alt=""
                  className={`w-full h-full transition-all duration-200 ease-out ${isHoveredOne ? "scale-70 ml-6" : "scale-100"}`}
                />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredTwo(true)}
              onMouseLeave={() => setIsHoveredTwo(false)}
              className={`border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredTwo ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredTwo ? (
                  <>
                    Easily design <br /> pages—no coding  <br /> needed
                  </>
                ) : (
                  <>
                    Drag & Drop <br /> Builder
                  </>
                )}
              </h4>
              <div className="h-20 w-20 ml-60 bg-cover">
                <img src="/assets/drag.svg" alt="" className={`w-full h-full transition-all duration-200 ease-out ${isHoveredTwo ? "scale-70 ml-6" : "scale-100"}`} />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredThree(true)}
              onMouseLeave={() => setIsHoveredThree(false)}
              className={`border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredThree ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredThree ? (
                  <>
                    Smart, built-in AI for <br /> sales & support.
                  </>
                ) : (
                  <>
                    AI Powered <br /> Chatbot
                  </>
                )}
              </h4>
              <div className="h-22 w-22 ml-60 bg-cover">
                <img
                  src="/assets/chatbot.svg"
                  alt=""
                  className={`w-full h-full $ transition-all duration-200 ease-out ${isHoveredThree ? "scale-70 ml-6" : "scale-100"}`}
                />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredFour(true)}
              onMouseLeave={() => setIsHoveredFour(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredFour ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredFour ? (
                  <>
                    Let customers <br /> explore products in <br /> 3D.
                  </>
                ) : (
                  <>
                    3D Product <br /> Viewer
                  </>
                )}
              </h4>
              <div className="h-18 w-18 ml-36 bg-cover">
                <img src="/assets/3d.svg" alt="" className={`w-full h-full  transition-all duration-200 ease-out${isHoveredFour ? "scale-70 ml-6" : "scale-100"}`} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div
              onMouseEnter={() => setIsHoveredFive(true)}
              onMouseLeave={() => setIsHoveredFive(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredFive ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredFive ? (
                  <>
                  Tailored analytics <br /> for your businessl <br />  type.
                  </>
                ) : (
                  <>
                    Industry-Specific <br />Dashboards
                  </>
                )}
              </h4>
              <div className="h-20 w-20 ml-36 bg-cover">
                <img
                  src="/assets/dashboard.svg"
                  alt=""
                  className={`w-full h-full  transition-all duration-200 ease-out ${isHoveredFive ? "scale-70 ml-6" : "scale-100"}`}
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col">
                <div className="w-[11vw] h-[1px] bg-white" />
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
              <div className="w-[11vw] h-[1px] bg-white" />
            </div>
            <div
              onMouseEnter={() => setIsHoveredSix(true)}
              onMouseLeave={() => setIsHoveredSix(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredSix ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredSix ? (
                  <>
                    Control what each user  <br /> can view or edit.
                  </>
                ) : (
                  <>
                    Role-Based Access
                  </>
                )}
              </h4>
              <div className="h-22 w-22 ml-36 bg-cover">
                <img src="/assets/role.svg" alt="" className={`w-full h-full transition-all duration-200 ease-out ${isHoveredSix ? "scale-70 ml-6" : "scale-100"}`} />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div
              onMouseEnter={() => setIsHoveredSeven(true)}
              onMouseLeave={() => setIsHoveredSeven(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredSeven ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredSeven ? (
                  <>
                  Reels, video, and <br /> popup banners <br />  included.
                  </>
                ) : (
                  <>
                    Visual Commerce <br /> Tools
                  </>
                )}
              </h4>
              <div className="h-18 w-18 ml-36 bg-cover">
                <img
                  src="/assets/visual.svg"
                  alt=""
                  className={`w-full h-full $ transition-all duration-200 ease-out ${isHoveredSeven ? "scale-70 ml-6" : "scale-100"}`}
                />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredEight(true)}
              onMouseLeave={() => setIsHoveredEight(false)}
              className={`border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredEight ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredEight ? (
                  <>
                    Add thousands of <br /> products instantly
                  </>
                ) : (
                  <>
                    Bulk Excel Upload
                  </>
                )}
              </h4>
              <div className="h-18 w-18 mt-4 ml-60 bg-cover">
                <img src="/assets/bulk.svg" alt="" className={`w-full h-full $ transition-all duration-200 ease-out ${isHoveredEight ? "scale-70 ml-6" : "scale-100"}`} />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredNine(true)}
              onMouseLeave={() => setIsHoveredNine(false)}
              className={`border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredNine ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredNine ? (
                  <>
                  Real-time price logic for <br /> metals, grades.
                  </>
                ) : (
                  <>
                    Auto-Price Engine
                  </>
                )}
              </h4>
              <div className="h-15 w-15 mt-4 ml-65 bg-cover">
                <img
                  src="/assets/autoprice.svg"
                  alt=""
                  className={`w-full h-full  transition-all duration-200 ease-out ${isHoveredNine ? "scale-70 ml-6" : "scale-100"}`}
                />
              </div>
            </div>
            <div
              onMouseEnter={() => setIsHoveredTen(true)}
              onMouseLeave={() => setIsHoveredTen(false)}
              className={`border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl transition-shadow duration-300 ease-in-out ${isHoveredTen ? "shadow-[0_5px_10px_rgba(0,0,1,0.75)] shadow-emerald-400" : ""}`}
            >
              <h4 className="pt-6 pl-4">
                {isHoveredTen ? (
                  <>
                  Boost visibility with <br /> native SEO tools.
                  </>
                ) : (
                  <>
                    Built-In SEO <br /> Management
                  </>
                )}
              </h4>
              <div className="h-18 w-18 ml-40 mt-4 bg-cover">
                <img src="/assets/seo.svg" alt="" className={`w-full h-full transition-all duration-200 ease-out ${isHoveredTen ? "scale-70 ml-6" : "scale-100"}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
