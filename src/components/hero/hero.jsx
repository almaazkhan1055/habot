import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="img">
        <div className="text-center py-8 md:py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Are You a Supplier?
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
            Explore Matching Opportunities.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16">
            <input
              type="text"
              className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 px-4 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Keyword"
            />
            <input
              type="text"
              className="w-full md:w-auto mb-4 md:mb-0 md:mr-4 px-4 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Location"
            />
            <button className="px-6 py-3 bg-green-900 text-white rounded-md transition duration-300 hover:bg-green-700 focus:outline-none">
              Search
            </button>
          </div>
          <p className="text-white text-lg">
            Are you a buyer?
            <u className="ml-1">
              {" "}
              Click here if you are looking to post requirements
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
