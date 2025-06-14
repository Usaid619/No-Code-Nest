import React from "react";

export default function Launch() {
      return (
            <>
            <div className="h-[70vh] w-full bg-[#f5f7fa] flex items-center flex-col">
                  <h1 className="text-7xl font-poppins mt-4">
                        <span className="text-gray-800">Ready to </span>
                        <span className="text-emerald-500">launch your</span>
                  </h1>
                  <h1 className="text-7xl font-poppins mt-6">
                        <span className="text-emerald-500"> store, </span>
                        <span className="text-gray-800">your way?</span>
                  </h1>
                  <h1 className="text-7xl mt-20 text-gray-800">
                        NO Code. No Compromise.
                  </h1>
                  <button className="block mx-auto px-4 py-2 w-60 h-10 mt-30 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform duration-200">
                        Compare With Other Platform
                  </button>
            </div>
            </>
      )
}