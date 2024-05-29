import React from "react";
import logo from "../../../public/habot-logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-[40px]" src={logo} alt="" />
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Find Suppliers</a>
          <a class="flex items-center mr-5 hover:text-gray-900">
            Find Service Tags <RiArrowDropDownLine />
          </a>
        </nav>
        <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 border border-green-500 text-green-500 font-semibold">
          Login/Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
