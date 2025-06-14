import React from "react";
import AutomAnime from "./animation/AutomAnime";

export default function Automation() {
      return (
            <>
            <div className="h-[70vh] w-full flex items-center justify-center  overflow-hidden">
                  <div className="bg-[#f5f7fa] py-15 px-20 h-full w-full">
                        <div className="mb-10">
                              <h1 className="text-5xl text-gray-900 font-extrabold">Built-In Animation</h1>
                        </div>
                        <div>
                              <h4 className="text-gray-500 font-medium text-2xl mb-3"><span>•</span> Chatbot replies to customers for you— <br />Automatically.</h4>
                              <h4 className="text-gray-500 font-medium text-2xl mb-3"><span>•</span>WhatsApp messages are sent without you lifting <br />A finger.</h4>
                              <h4 className="text-gray-500 font-medium text-2xl mb-3"><span>•</span>Product prices update on their own when gold <br /> Rates change</h4>
                        </div>
                  </div>
                  <div className="bg-[#f5f7fa] h-full w-full relative">
                        <div className=" absolute h-60 w-60 rounded-full -right-10 top-2 bg-[rgba(211,255,185,0.85)]"></div>
                        <div className=" absolute h-60 w-60 rounded-full z-1 bottom-2 right-140 bg-[rgba(211,255,185,0.85)]"></div>
                        <div className="h-full w-full flex justify-center items-center">
                              <div className=" h-[70%] w-[70%] z-2 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,1,0.75)] bg-white">
                                    <AutomAnime />
                              </div>
                        </div>
                  </div>
            </div>
            </>
      )
}