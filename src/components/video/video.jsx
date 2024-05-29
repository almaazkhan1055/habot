import React, { useState } from "react";

const Video = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const content = [
    [
      "Post your requirements.",
      "Sit back for multiple suppliers to contact you.",
      "Choose among the suppliers based on the ratings and reviews.",
    ],
    [
      "Available 24/7",
      "Will contact you as soon as possible",
      "Best Suppliers in the town according to your requirements. ",
    ],
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-blue-900 p-4 md:py-8 mx-4 md:mx-auto rounded-xl">
      <div className="w-full md:w-1/2 md:mr-4 lg:mr-8">
        <div className="video-responsive">
          <iframe
            width="300"
            height="250"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="h-full flex flex-col justify-between">
          <div className="mb-8">
            <button
              className={`text-3xl font-bold text-white hover:text-orange-500 hover:underline mr-4 md:mr-8 ${
                activeContentIndex === 0 ? "active" : ""
              }`}
              onClick={() => setActiveContentIndex(0)}
            >
              Buyer
            </button>
            <button
              className={`text-3xl font-bold text-white hover:text-orange-500 hover:underline ${
                activeContentIndex === 1 ? "active" : ""
              }`}
              onClick={() => setActiveContentIndex(1)}
            >
              Supplier
            </button>
          </div>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item, index) => (
                <li
                  className="mt-2 md:mt-4 mb-2 md:mb-4 text-lg md:text-xl text-white"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
