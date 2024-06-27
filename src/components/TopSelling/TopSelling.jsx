import React from "react";
import { FaPlane } from "react-icons/fa";
import Icon1 from "../../assets/dest/dest1.jpg";
import Icon2 from "../../assets/dest/dest2.jpg";
import Icon3 from "../../assets/dest/dest3.jpg";

// Define your icons array
const icons = [
  {
    id: 1,
    image: Icon1,
    placeName: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
  },
  {
    id: 2,
    image: Icon2,
    placeName: "Paris, France",
    price: "$4,99k",
    days: "7 Days Trip",
  },
  {
    id: 3,
    image: Icon3,
    placeName: "New York, USA",
    price: "$6,85k",
    days: "14 Days Trip",
  },
];

function TopSelling() {
  return (
    <div className="container mx-auto py-6 mt-20">
      {/* Top Selling */}
      <div className="flex justify-center mb-6">
        <h2 className="text-center text-sm leading-tight font-serif text-[#5E6282] font-rubik font-bold">
          Top Selling
        </h2>
      </div>

      {/* Top Destinations */}
      <div className="flex justify-center mb-6">
        <h2 className="text-center font-bold leading-tight text-[#14183E] font-rubik text-5xl">
          Top Destinations
        </h2>
      </div>

      {/* Destination Cards */}
      <div className="flex justify-center">
        {icons.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFEFE] p-4 rounded-lg  cursor-pointer flex-1 mx-2"
          >
            <img
              src={item.image}
              alt={item.placeName}
              className="w-full h-auto mb-4 rounded-lg"
            />
            <div className="flex justify-between items-center">
              <h3 className="text-xl mb-2 hover:text-orange-500">
                {item.placeName}
              </h3>
              <p className="text-xl mb-2">{item.price}</p>
            </div>
            <div className="flex items-center mt-2 text-gray-500">
              <FaPlane className="mr-2" />
              <span>{item.days}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSelling;
