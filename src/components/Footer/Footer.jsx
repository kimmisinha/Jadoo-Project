import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

import Icon1 from "../../assets/testimonial/applestore.png";
import Icon2 from "../../assets/testimonial/playstore.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFFEFE] py-10 mx-auto">
      <div className="  px-1">
        <div className="flex justify-evenly">
          <div className="w-[250px]  mb-6 md:mb-0">
            <h4 className="text-5xl mb-2 font-medium">Jadoo.</h4>
            <p className="text-[#5E6282] text-sm	">
              Book your trip in minutes, <br />
              get full control for much longer.
            </p>
          </div>
          <div className=" mb-6 md:mb-0">
            <h4 className="text-lg mb-2 font-medium">Company</h4>
            <ul>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/mobile"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className=" mb-6 md:mb-0">
            <h4 className="text-lg mb-2 font-medium">Contact</h4>
            <ul>
              <li>
                <a
                  href="/help"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Help/FAQ
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/affiliate"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div className=" mb-6 md:mb-0">
            <h4 className="text-lg mb-2 font-medium">More</h4>
            <ul>
              <li>
                <a
                  href="/airlinefees"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Airline fees
                </a>
              </li>
              <li>
                <a
                  href="/airline"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Airline
                </a>
              </li>
              <li>
                <a
                  href="/lowfaretips"
                  className="text-gray-600 hover:text-orange-500 mb-2 font-medium text-lg"
                >
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[250px] flex flex-col justify-between items-center">
            <div className="flex">
              <a
                href="https://facebook.com"
                className="text-gray-600 hover:text-orange-500"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 hover:text-orange-500"
              >
                <CiInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-600 hover:text-orange-500"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            <p className="text-center m-3 text-gray-600 w-full">
              Discover our app
            </p>

            <div className="flex items-center  ">
              <a href="#">
                <img src={Icon2} alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
            <div className="flex items-center  mt-5">
              <a href="#">
                <img
                  src={Icon1}
                  alt="Available on the Apple Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[20%] md:w-3/4 text-center md:text-right">
          <p className="text-gray-600 text-center mt-5 ml-96 ">
            &copy; All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
