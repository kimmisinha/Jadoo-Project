import React from "react";
import Icon1 from "../../assets/dest/dest1.jpg";
import Icon2 from "../../assets/dest/dest2.jpg";
import Icon3 from "../../assets/dest/dest3.jpg";
import { FaPlane } from "react-icons/fa";

let icon = [Icon1, Icon2, Icon3];

function TopSelling() {
  return (
    <div className="container mx-auto py-6">
      {/* Top Selling */}
      <div className="flex justify-center mb-1">
        <h2 className="text-center text-sm leading-tight font-serif text-[#5E6282] font-rubik font-bold">
          Top Selling
        </h2>
      </div>

      {/* Top Destinations */}
      <div className="flex justify-center mb-2">
        <h2 className="text-center font-bold leading-tight text-[#14183E] font-rubik text-5xl">
          Top Destinations
        </h2>
      </div>

      {/* Row 3: Big Box with 3 Subboxes */}
      <div className="flex justify-center mb-8">
        <div className="w-full md:w-9/3 px-5">
          <div className="bg-[#FAF9F9] p-6 rounded-lg flex justify-between items-center">
            {/* Destination Cards */}

            {icon.map((src, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer flex-1 mr-4"
              >
                <img
                  src={src}
                  alt={`Destination ${index + 1}`}
                  className="w-full h-auto mb-4 rounded-lg"
                />
                <div className="flex justify-between items-center">
                  <h3 className="text-xl mb-2 hover:text-orange-500">
                    Rome, Italy
                  </h3>
                  <p className="text-xl mb-2">$5,42k</p>
                </div>
                <div className="flex items-center justify-center mt-2 text-gray-500">
                  <FaPlane className="mr-2" />

                  <span>10 Days Trips</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
