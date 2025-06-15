
import React from "react";
import HeroAnimation from "./animation/HeroAnimation";

export default function Hero() {
  return (
    <section className="h-[182vh] bg-[#f5f7fa] text-black flex items-center justify-center overflow-x-hidden scrollbar">
      <div className="w-full h-screen grid grid-cols-10 md:grid-cols-12 lg:grid-cols-12 z-0">
        {Array.from({ length: 130 }).map((_, i) => (
          <div
            key={i}
            className="w-[26rem] h-[8rem] bg-gray-100 border-[2px] border-white rounded-sm"
          ></div>
        ))}
      </div>
      <div className="text-black z-10 absolute top-0 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex-1 flex justify-start ml-8">
          <h1 className="font-extrabold text-2xl">No Code Nest</h1>
        </div>

        <div className="flex-1 flex justify-center gap-12 text-2xl">
          <h1>Why Us</h1>
          <h1>Testimonial</h1>
        </div>

        <div className="flex-1 flex justify-end mr-6">
          <button className="bg-gradient-to-b from-green-600 via-green-700 to-black text-white px-4 py-2 rounded-[10rem] flex items-center gap-2 shadow-md">
            Try NoNestCode Free
            <img src="/assets/rocket.svg" alt="" className="w-[1.5rem] h-[1.5rem]"/>
          </button>
        </div>
      </div>

      <h1 className="absolute top-[9rem] text-black text-center text-[4.7rem] font-bold leading-32 z-10">
        Launch Your Website or Online Store <br />{" "}
        <span className="text-green-800">In One Minute </span> <br /> No Code,
        Infinite Power
      </h1>
       <img src="/assets/bg.png" alt="Text Image" className="h-[10rem] w-[32rem] absolute top-[24rem] left-[15rem] " />

      <p className="absolute text-gray-700 top-[33rem] text-xl text-center">
        Build Custom tools effortlessely for any industry-fast, flexible,
        <br /> scalable, and beautifully simple.
      </p>
      <button className="absolute top-[38rem] bg-gradient-to-b from-green-700 via-green-800 to-black text-white px-4 py-2 rounded-[10rem] flex items-center gap-2 shadow-md">
        Start Free Trial
        <img src="/assets/rocket.svg" alt="" className="w-[1.5rem] h-[1.5rem]"/>
      </button>
      <div className="h-[17.5rem] w-[17.5rem] absolute right-[1rem] top-[36.5rem] rounded-full bg-[#d8f4bc]"></div>
      <div className="h-[17.5rem] w-[17.5rem] absolute rounded-full left-[1rem] top-[65rem] bg-[#d8f4bc]"></div>
      <div
        className="h-[30rem] w-[78rem] bg-gray-100 absolute top-[44rem] rounded-2xl"
        style={{
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <HeroAnimation />
      </div>
    </section>
  );
}
