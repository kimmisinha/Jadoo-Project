import React from 'react';
import message from "../../assets/cta/send.png";
import shapebg from "../../assets/cta/shapebg.png";

function Email() {
  return (
    <div className="relative bg-gray-100 flex items-center justify-center h-screen">
      <img src={message} alt="Message Icon" className="absolute top-4 right-4 w-6 h-6" />
      <div className="bg-white p-8 rounded shadow-md text-center relative">
        <h2 className="text-xl font-semibold mb-4">
          Subscribe to get information, latest news and other interesting offers about Cobham
        </h2>
        <form className="flex justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
      <img src={shapebg} alt="Shape Background" className="absolute bottom-4 left-4 w-24 h-24 opacity-50" />
    </div>
  );
}

export default Email;