import React from 'react';
import girlimage from "../../assets/hero/girl.jpg";

function EasyandFast() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between">
        {/* Left Box */}
        <div className="w-1/2 p-6 bg-gray-100 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">Light Black Small Letter</p>
          <h1 className="text-3xl font-bold mb-4">Book Your Next Trip In 3 Easy Steps</h1>
          
          <div className="flex mb-8">
            <img src={girlimage} alt="Step 1" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Choose Destination</h2>
              <p className="text-gray-600">Choose your favourite place. No matter where you travel inside the World.</p>
            </div>
          </div>
          
          <div className="flex mb-8">
            <img src={girlimage} alt="Step 2" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Choose Destination</h2>
              <p className="text-gray-600">Choose your favourite place. No matter where you travel inside the World.</p>
            </div>
          </div>
          
          <div className="flex">
            <img src={girlimage} alt="Step 3" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl font-bold mb-2">Choose Destination</h2>
              <p className="text-gray-600">Choose your favourite place. No matter where you travel inside the World.</p>
            </div>
          </div>
        </div>
        
        {/* Right Box */}
        <div className="w-1/2 p-6 bg-gray-100 rounded-lg">
          {/* Important Image */}
          <img src={girlimage} alt="Important Image" className="mx-auto w-48 h-48 rounded-full mb-8" />
          
          {/* Trip Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Trip To Greece</h2>
            <p className="text-gray-600 mb-4">14-29 June | by Robbin Joseph</p>
          </div>
          
          {/* Building Info */}
          <div className="mb-8">
            <p className="text-gray-600">Building Info</p>
            <div className="flex justify-between items-center">
              <p>24 people going</p>
              <img src={girlimage} alt="Icon" className="w-8 h-8" />
            </div>
          </div>
          
          {/* People Going */}
          <div>
            <p className="text-gray-600">People Going</p>
            <div className="flex">
              <div className="w-1/2">
                <div className="flex items-center">
                  <img src={girlimage} alt="Icon" className="w-8 h-8 mr-2" />
                  <p>24 people going</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center justify-end">
                  <p>24 people going</p>
                  <img src={girlimage} alt="Icon" className="w-8 h-8 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyandFast;
