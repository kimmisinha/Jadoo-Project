import React from 'react';
import icon1 from "../../assets/hero/icon1.png";
import icon2 from "../../assets/hero/icon2.png";
import icon3 from "../../assets/hero/icon3.png";
import icon4 from "../../assets/hero/icon4.png";
import HoverEffect from './HoverEffect';  // Import the new component

const CategoryDetails = [
  {
    id: 1,
    image: icon1,
    content: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    id: 2,
    image: icon2,
    content: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    id: 3,
    image: icon3,
    content: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
  },
  {
    id: 4,
    image: icon4,
    content: "Aviation Services",
    description: "We deliver outsourced aviation services for military customers."
  }
];

function Category() {
  return (
    <div className="container mx-auto py-6 mt-40">
      {/* Row 1: CATEGORY and We Offer Best Services */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 text-center">
          <h2 className="text-[#5E6282] font-rubik font-bold">CATEGORY</h2>
        </div>
        <div className="mb-4 text-center text-[#14183E] font-rubik font-bold text-5xl">
          <h1>We Offer Best Services</h1>
        </div>
      </div>

      {/* Row 2: Four boxes with descriptions */}
      <div className="flex justify-center flex-wrap rounded-lg z-[-1]	">
        {CategoryDetails.map((item, index) => (
          <div key={index} className="w-full md:w-1/4 px-4 mb-8 text-[#14183E] font-bold">
            <div className="group relative p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 z-10">
              <img src={item.image} alt={`Icon ${index + 1}`} className="w-16 h-16 mx-auto mb-4" />
              <p className="text-[#14183E] mb-2">{item.content}</p>
              <p className="mb-4 text-16px font-rubik font-medium text-[#5E6282]  ">{item.description}</p>

              {/* Hover effect */}
              <HoverEffect />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
