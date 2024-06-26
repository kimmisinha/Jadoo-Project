import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import jadoo from "../../assets/hero/logo.svg";
function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-gray-40");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setNavbarColor("bg-[#E9F2F7]");
    } else {
      setNavbarColor("bg-gray-40");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={`footer fixed top-0 w-full border-double  ${navbarColor} z-50`}>
      <div className="container mx-auto py-6 flex justify-between items-center border-double ">
        {/* Right side */}
        <div className="flex items-center border-double ">
          <img src={jadoo} alt="Image" className="h-8 hover:cursor-pointer" />
        </div>
        {/* Left side */}
        <div className="flex items-center px-10 border-double  space-x-16">
          <a className="hover:text-orange-500 cursor-pointer" href="#">
            Service
          </a>
          <a className="hover:text-orange-500 cursor-pointer" href="#">
            Destination
          </a>
          <a className="hover:text-orange-500 cursor-pointer" href="#">
            Booking
          </a>
          <a href="#" className="hover:text-orange-500 cursor-pointer">
            Testimonial
          </a>
          <a href="#" className="hover:text-orange-500 cursor-pointer">
            Login
          </a>
          <button className="border- border-black px-4 py-2 hover:bg-black hover:text-white">
            Sign Up
          </button>
          {/* Dropdown */}
          <div className="relative">
            <a
              href="#"
              className="hover:text-orange-500 cursor-pointer flex items-center"
              onClick={toggleDropdown}
            >
              EN <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </a>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-40 rounded-md bg-white border border-gray-300 shadow-lg">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  EN
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-md"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  BN
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
