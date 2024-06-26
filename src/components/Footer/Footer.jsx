import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import Icon1 from "../../assets/testimonial/applestore.png";
// import Icon2 from "../../assets/testimonial/playstore.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold">Jadoo.</h4>
            <p>Book your trip in minutes, get full control for much longer.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="/mobile" className="text-gray-600 hover:text-gray-900">Mobile</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul>
              <li><a href="/help" className="text-gray-600 hover:text-gray-900">Help/FAQ</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-gray-900">Press</a></li>
              <li><a href="/affiliate" className="text-gray-600 hover:text-gray-900">Affiliate</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold">More</h4>
            <ul>
              <li><a href="/airlinefees" className="text-gray-600 hover:text-gray-900">Airline fees</a></li>
              <li><a href="/airline" className="text-gray-600 hover:text-gray-900">Airline</a></li>
              <li><a href="/lowfaretips" className="text-gray-600 hover:text-gray-900">Low fare tips</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-10">
          <p className="text-gray-600">&copy; All rights reserved@jadoo.co</p>
          <div className="flex space-x-4">
            {/* <a href="#"><img src={Icon2} alt="Get it on Google Play" className="h-10" /></a>
            <a href="#"><img src={Icon1} alt="Available on the Apple Store" className="h-10" /></a> */}
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;