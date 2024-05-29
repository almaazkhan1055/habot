import React from "react";
import logo from "../../../public/habot-logo.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 mx-auto flex flex-col md:flex-row items-center justify-between bg-blue-900 px-[50px] py-[100px]">
          <div className="w-full md:w-[200px] md:mr-12 mb-8 md:mb-0 text-center md:text-left">
            <img src={logo} alt="" />
            <span className="text-white block">© R Singhania</span>
          </div>
          <div className="flex flex-col md:flex-row gap-[50px] ml-0 md:ml-[-250px] text-white">
            <div>
              <h1 className="text-white font-bold">Company</h1>
              <p>
                <a href="#" className="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  FAQ
                </a>
              </p>
            </div>
            <div>
              <h1 className="text-white font-bold">Terms</h1>
              <p>
                <a href="#" className="text-white">
                  Data privacy
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Terms
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Accessibility
                </a>
              </p>
            </div>
            <div>
              <h1 className="text-white font-bold">Related</h1>
              <p>
                <a href="#" className="text-white">
                  Find Buyer
                </a>
              </p>
              <p>
                <a href="#" className="text-white">
                  Feedback
                </a>
              </p>
            </div>
          </div>

          <div className="flex item-center justify-center text-[50px] text-white mt-8 md:mt-0">
            <a href="#" className="mr-4">
              <TiSocialLinkedinCircular />
            </a>
            <a href="#" className="mr-4">
              <TiSocialTwitterCircular />
            </a>
            <a href="#" className="mr-4">
              <CiFacebook />
            </a>
            <a href="#">
              <IoLogoInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
