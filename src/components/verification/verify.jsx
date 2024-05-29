import React from "react";

const Verify = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-[#e7f5fb] py-8 md:py-12 mt-8 md:mt-16 mx-4 md:mx-auto rounded-xl">
      <div className="mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mt-[100px] mb-[100px]">
          Let Suppliers Find You
        </h1>
      </div>
      <div>
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 md:px-10 focus:outline-none hover:bg-orange-600 rounded text-lg md:text-xl items-center gap-2">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default Verify;
