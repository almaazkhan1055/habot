import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Checkout = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-12 lg:py-24 flex flex-col md:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 flex flex-col items-center justify-center text-center md:text-left mb-8 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Ready to dive into{" "}
              <span className="text-semibold text-blue-900"> HABOT?</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg items-center gap-2">
                Sign up Today <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Abu Dhabi</h1>
            </div>
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Dubai</h1>
            </div>
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Sharjah & Ajman</h1>
            </div>
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Fujairah</h1>
            </div>
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Ras Al Khaimah</h1>
            </div>
            <div className="border border-orange-500 px-6 py-4 text-xl flex items-center justify-center">
              <h1>Umm Al Quwain</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
