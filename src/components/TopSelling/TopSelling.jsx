import React from 'react';
import Icon1 from "../../assets/dest/dest1.jpg";
import Icon2 from "../../assets/dest/dest2.jpg";
import Icon3 from "../../assets/dest/dest3.jpg";
let icon=[Icon1,Icon2,Icon3]

function TopSelling() {
  return (
    <div className="container mx-auto py-6">
      {/*  Top Selling */}
      <div className="flex justify-center mb-1">
        <h2 className="text-center text-sm leading-tight font-serif text-[#5E6282] font-rubik font-system font-bold">Top Selling</h2>
      </div>

      {/* Top Destinations */}
      <div className="flex justify-center mb-2">
        <h2 className="text-center  font-bold leading-tight f mb-1  text-[#14183E] font-rubik font-system  text-5xl	font-DM font-serif">Top Destinations</h2>
      </div>

      {/* Row 3: Big Box with 3 Subboxes */}
      <div className="flex justify-center mb-8">
        <div className="w-full md:w-9/3 px-5">
          <div className="bg-[#FAF9F9] p-6 rounded-lg flex justify-between items-center">
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
