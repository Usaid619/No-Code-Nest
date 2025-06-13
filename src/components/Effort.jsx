import React from "react";

export default function Effort() {
      return (
            <>
            <div className="bg-[#f5f7fa] flex items-center relative justify-center h-screen w-full">
                  <div className="absolute h-50 w-50 p-10 bg-[rgba(204,165,255,0.75)] rounded-full top-7 -left-10"/>
                  <div className="absolute h-50 w-50 p-10 bg-[rgba(204,165,255,0.75)] rounded-full bottom-8 left-125"/>
                  <div className="h-full w-full flex justify-center items-center">
                        <div className=" h-[70%] w-[70%] z-2 rounded-2xl shadow-[-4px_4px_8px_rgba(0,0,1,0.75)] bg-white"></div>
                  </div>
                  <div className=" h-full w-full py-5 px-20">
                        <div className="mb-18">
                              <h1 className="text-5xl text-gray-900 font-extrabold">Less Effort More<br />Power</h1>
                        </div>
                        <div className="mb-8">
                              <h1 className="text-4xl text-emerald-500 font-extrabold mb-5">
                                    SEO Management
                              </h1>
                              <h4 className="text-2xl text-gray-500 font-medium">
                                    Helps your store show up on Google. Add titles,
                                    <br />
                                    Descriptions, and keywords—no expert needed. More
                                    <br />
                                    Visibility, more traffic.
                              </h4>
                        </div>
                        <div className="mb-8">
                              <h1 className="text-4xl text-emerald-500 font-extrabold mb-5">
                                    Bulk Product Upload
                              </h1>
                              <h4 className="text-2xl text-gray-500 font-medium">
                                    Upload hundreds of products at once using Excel. Add
                                    <br />
                                    Details like price, size, color, and discounts—all in one
                                    <br />
                                    Go.
                              </h4>
                        </div>
                        <div className="mb-8">
                              <h1 className="text-4xl text-emerald-500 font-extrabold mb-5">
                                    Role-Based Access Control
                              </h1>
                              <h4 className="text-2xl text-gray-500 font-medium">
                                    Give the right access to the right team members.
                                    <br />
                                    Control who can edit products, view orders, or manage
                                    <br />
                                    Settings—secure and simple.
                              </h4>
                        </div>
                  </div>
            </div>
            </>
      );
}