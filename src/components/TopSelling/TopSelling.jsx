import React from 'react';
import Icon1 from "../../assets/dest/dest1.jpg";
import Icon2 from "../../assets/dest/dest2.jpg";
import Icon3 from "../../assets/dest/dest3.jpg";

function TopSelling() {
  return (
    <div className="container mx-auto py-6">
      {/*  Top Selling */}
      <div className="flex justify-center mb-8">
        <h2 className="text-center text-4xl font-bold leading-tight font-serif">Top Selling</h2>
      </div>

      {/* Top Destinations */}
      <div className="flex justify-center mb-8">
        <h2 className="text-center text-4xl font-bold leading-tight font-serif">Top Destinations</h2>
      </div>

      {/* Row 3: Big Box with 3 Subboxes */}
      <div className="flex justify-center mb-8">
        <div className="w-full md:w-2/3 px-4">
          <div className="bg-gray-100 p-6 rounded-lg flex justify-between items-center">
            {/* Left Subbox */}
            <div className="flex-1 mr-4">
              <img src={Icon1} alt="Destination 1" className="w-full h-auto mb-4 rounded-lg" />
              <div className="text-center">
                <h3 className="text-xl mb-2">Rome, Italy</h3>
                <p>$5,42k</p>
              </div>
            </div>
            {/* Right Subbox */}
            <div className="flex-1 ml-4">
              <img src={Icon2} alt="Destination 2" className="w-full h-auto mb-4 rounded-lg" />
              <div className="text-center">
                <h3 className="text-xl mb-2">Rome, Italy</h3>
                <p>$5,42k</p>
              </div>
            </div>
            <div className="flex-1 ml-4">
              <img src={Icon3} alt="Destination 2" className="w-full h-auto mb-4 rounded-lg" />
              <div className="text-center">
                <h3 className="text-xl mb-2">Rome, Italy</h3>
                <p>$5,42k</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopSelling;
