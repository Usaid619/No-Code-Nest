import React from "react";

export default function Footer() {
  return (
    <div className="h-screen w-full bg-[#10b981] flex items-center flex-col">
      <div className="h-[30%] w-full p-20 15 flex flex-row items-center justify-between">
            <div className="flex flex-col">
                  <a className="text-5xl decoration-0 text-white" href="">hello@nocodenest.io</a>
                  <div className="flex flex-row items-center justify-between mt-8">
                  <a className="decoration-none text-2xl text-white " href="">Features</a>
                  <a className="decoration-none text-2xl text-white " href="">Why Us</a>
                  <a className="decoration-none text-2xl text-white " href="">Testimonials</a>
            </div>
      </div>
      <div className="bg-emerald-500 ml-60 w-full flex justify-center">
            <form className="bg-white rounded-full flex items-center px-4 py-2 max-w-3xl h-17 w-full shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-full outline-none text-gray-800 placeholder-gray-500"
            />
            <button
              type="submit"
              className="ml-2 h-13 w-38 leading-10 bg-emerald-500 hover:bg-emerald-800 items-center text-white font-medium px-5 py-2 rounded-full transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
      </div>
    </div>
    <div className="flex flex-row items-center justify-center gap-[8%] mt-30 w-full">
      <a className="text-3xl text-white" href="">Instagram</a>
      <h2 className="text-3xl text-white">X</h2>
      <a className="text-3xl text-white" href="">YouTube</a>
    </div>
    <div className="h-[4px] w-[80%] mt-10 bg-gradient-to-r from-transparent via-white to-transparent" />
    <div>
      <h1 className="text-[20vh] font-extrabold text-white mt-5">No Code Nest</h1>
    </div>
    <div>
      <h2 className="text-2xl text-white mt-5">Copyright: @2025 NoNestCode. all right reserved</h2>
    </div>
    </div>
  );
}
