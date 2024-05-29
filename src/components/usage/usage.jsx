import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiFileSearchFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa6";
import { RiBookletFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";

const Usage = () => {
  return (
    <>
      <div className="mb-[100px] mt-[50px]">
        <div className="px-4 md:px-0 mb-8 md:mb-20 pt-8 md:pt-20 pb-8 md:pb-20 text-center  ">
          <h1 className="text-4xl md:text-5xl text-black font-bold">
            How it works?
          </h1>

          <p className="mb-4 md:mb-8 mt-[50px]">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        <div className="grid place-items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[60%] ">
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center bg-[#e7f5fb]">
              <FaUserFriends className="text-4xl md:text-[50px]" />
              <p>Select Your Role and Sign Up</p>
            </div>
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center">
              <FaBookOpenReader className="text-4xl md:text-[50px]" />
              <p>Buyers Post Your Requirements</p>
            </div>
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center bg-[#e7f5fb]">
              <RiFileSearchFill className="text-4xl md:text-[50px]" />
              <p>Review, Select, and Contact the Best Suppliers</p>
            </div>
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center">
              <FaAddressBook className="text-4xl md:text-[50px]" />
              <p>
                Suppliers Complete your profile and get notified for
                opportunities
              </p>
            </div>
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center bg-[#e7f5fb]">
              <RiBookletFill className="text-4xl md:text-[50px]" />
              <p>Contact to Buyers and Share your Quote for the service</p>
            </div>
            <div className="w-full md:w-[250px] h-[150px] grid place-items-center px-4 text-center">
              <FaHandshake className="text-4xl md:text-[50px]" />
              <p>
                Both the Parties can Connect and Make Business Leave a Feedback
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Usage;
