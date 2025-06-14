import React from "react";
import DragAnimation from "./animation/DragAnimation";

export default function Dragdrop() {
      return (
            <>
            <div className="h-[80vh] w-full bg-[#f5f7fa] flex items-center flex-col">
                  <h2 className="text-4xl text-emerald-500 font-extrabold">Why Choose No Code Nest ?</h2>
                  <div className="flex h-full w-full relative items-center justify-center ">
                        <div className="h-full w-full py-10 px-15">
                              <div className=" absolute h-60 w-60 rounded-full -left-10 top-2 bg-[rgb(255,244,172)]" />
                              <div className=" absolute h-60 w-60 rounded-full z-1 bottom-2 left-140 bg-[rgb(255,244,172)]" />
                              <div className="h-full w-full flex justify-center items-center">
                                    <div className=" h-[78%] w-[90%] z-2 rounded-2xl shadow-[-4px_4px_8px_rgba(0,0,1,0.75)] bg-white">
                                          <DragAnimation />
                                    </div>
                              </div>
                        </div>
                        <div className="h-full w-full py-15 px-15">
                              <div className="mb-15">
                                    <h1 className="text-5xl text-gray-900 font-extrabold">Drag And Drop</h1>
                              </div>
                              <div>
                                    <h4 className="text-gray-500 font-medium text-2xl mb-8"><span>•</span>Simply drag sections like banners, products, Or <br /> Videos where you want them—no code needed.</h4>
                                    <h4 className="text-gray-500 font-medium text-2xl mb-3"><span>•</span>Instantly see changes live as you move blocks <br /> Around the page.</h4>
                              </div>
                        </div>
                  </div>
            </div>
            </>
      )
}