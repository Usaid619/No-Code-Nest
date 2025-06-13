import React from "react";

export default function FeatureSection() {
  return (
    <>
      <div className="bg-[#f5f7fa] flex items-center justify-center h-screen w-full">
        <div className="bg-[#0a0d11] text-white font-bold flex flex-col items-center justify-center w-[90%] h-[90%] rounded-3xl">
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Instant Storefront
                <br />
                Creation
              </h4>
              <div className="h-22 w-22 ml-36 bg-cover">
                <img src="/assets/creation.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Drag & Drop
                <br />
                Builder
              </h4>
              <div className="h-22 w-22 ml-60 bg-cover">
                <img src="/assets/drag.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                AI-Powered
                <br />
                Chatbot
              </h4>
              <div className="h-22 w-22 ml-60 bg-cover">
                <img src="/assets/chatbot.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                3D Product
                <br />
                Viewer
              </h4>
              <div className="h-22 w-22 ml-36 bg-cover">
                <img src="/assets/3d.svg" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Industry Specific
                <br />
                Dashboards
              </h4>
              <div className="h-22 w-22 ml-36 bg-cover">
                <img src="/assets/dashboard.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col">
                <div className="w-[11vw] h-[1px] bg-white" />
              </div>
              <h1 className="text-7xl bg-gradient-to-r from-green-300 via-green-600 to-green-900 bg-clip-text text-transparent">
                FEATURES
              </h1>
              <div className="w-[11vw] h-[1px] bg-white" />
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Role-Based
                <br />
                Access
              </h4>
              <div className="h-22 w-22 ml-36 bg-cover">
                <img src="/assets/role.svg" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full h-full p-6">
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Visual Commerce
                <br />
                Tools
              </h4>
              <div className="h-18 w-18 ml-36 bg-cover">
                <img src="/assets/visual.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Bulk Excel Upload
              </h4>
              <div className="h-18 w-18 mt-4 ml-60 bg-cover">
                <img src="/assets/bulk.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[23vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Auto Price Engine
              </h4>
              <div className="h-15 w-15 mt-4 ml-65 bg-cover">
                <img src="/assets/autoprice.svg" alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="border-3 border-amber-50 bg-transparent w-[17vw] h-[23vh] rounded-3xl">
              <h4 className="pt-6 pl-4">
                Built-in SEO
                <br />
                Management
              </h4>
              <div className="h-18 w-18 ml-40 mt-4 bg-cover">
                <img src="/assets/seo.svg" alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
