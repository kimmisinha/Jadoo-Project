import React from 'react';
import message from "../../assets/cta/send.png";
import ringleft from "../../assets/cta/ringleft.png";
import ringright from "../../assets/cta/ringright.png";

function Email() {
  return (
    <div className='h-full mt-32 mb-32 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg'>
      <div className="relative bg-gray-100 flex items-center justify-center ml-20 mr-20 px-96 py-40 border-4 p-8 h-full full-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <img src={ringleft} alt="ringleft Icon" className="absolute bottom-0 left-0 h-full" />
        <img src={ringright} alt="ringright Icon" className="absolute top-0 right-0 h-full" />
        <img src={message} alt="message Icon" className="absolute top-1 right-1" />

        <div className="w-full max-w-xl px-8 py-6 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Subscribe to get information, latest news and other interesting offers about Cobham
          </h2>
          <form className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
