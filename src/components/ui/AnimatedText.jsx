"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedText = () => {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const line3Ref = useRef();
  const line4Ref = useRef();

  useEffect(() => {
    const lettersLine1 = line1Ref.current.querySelectorAll(".letter");
    const lettersLine2 = line2Ref.current.querySelectorAll(".letter");
    const lettersLine3 = line3Ref.current.querySelectorAll(".letter");
    const lettersLine4 = line4Ref.current.querySelectorAll(".letter");

    gsap.fromTo(lettersLine1, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.5,
    });

    gsap.fromTo(lettersLine2, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 1,
    });

    gsap.fromTo(lettersLine3, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 1.5,
    });

    gsap.fromTo(lettersLine4, { y: "100%", opacity: 0 }, {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.05,
      delay: 2,
    });
  }, []);

  const createLine = (textArr, extraClass = "", color = "text-[#1F2937]") => (
    textArr.map((item, index) => (
      <span key={index} className="overflow-hidden">
        <span className={`letter inline-block ${color} ${extraClass}`}>
          {item === " " ? "\u00A0" : item}
        </span>
      </span>
    ))
  );

  const line1 = [..."Launch Your Website or Online Store"];
  const line2 = [..."In One Minute"];
  const line3 = [..."No Code,"];
  const line4 = [..." Infinite Power"];

  return (
    <div className="flex flex-col gap-2 text-center leading-[1.5] 
    text-[33px] md:text-[40px] xl:text-7xl font-extrabold">
      <div ref={line1Ref} className="flex flex-wrap justify-center">
        {createLine(line1)}
      </div>
      <div ref={line2Ref} className="flex flex-wrap justify-center">
        {createLine(line2, "", "text-[#10B981]")}
      </div>
      <div className="flex flex-wrap justify-center">
        <div ref={line3Ref} className="flex">
          {createLine(line3)}
        </div>
        <div ref={line4Ref} className="flex">
          {createLine(line4)}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;

