import React from "react";
import girlimage from "../../assets/hero/girl.jpg";
import "./easy-style.css";

import Icon1 from "../../assets/hero/selection.svg";
import Icon2 from "../../assets/hero/watersport.svg";
import Icon3 from "../../assets/hero/girl.svg";
import { ImLeaf } from "react-icons/im";
import { FaRegMap } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { RiHomeOfficeLine } from "react-icons/ri";

function EasyandFast() {
  const Tripdetails = [
    {
      id: 1,
      image: girlimage,
      Heading: "Choose Destination",
      description:
        "Choose your favourite place. No matter where you travel inside the World.",
    },
    {
      id: 2,
      image: girlimage,
      Heading: "Make Payment",
      description:
        "After finding your perfect spot, make your payment and get ready to travel.",
    },
    {
      id: 3,
      image: girlimage,
      Heading: "Reach Airport on Selected Date",
      description:
        "Lastly, you have to arrive at the airport on time and enjoy the vacation.",
    },
  ];

  return (
    <div className="container mx-auto py-6 mt-20">
      <div className="flex justify-between">
        {/* Left Box */}
        <div className="w-2/3 p-6 bg-[#FFFEFE] rounded-lg">
          <p className="text-[#5E6282] font-rubik font-bold">Easy and Fast</p>
          <h1 className="text-[#181E4B] text-6xl font-volkhov font-bold volkhov-regular">
            Book Your Next Trip In 3 Easy Steps
          </h1>

          {/* Render Trip Steps */}
          {Tripdetails.map((step) => (
            <div className="flex mb-8 mt-7" key={step.id}>
              <img
                src={step.image}
                alt={step.Heading}
                className="w-16 h-16 mr-4 "
              />
              <div>
                <h2 className="text-[#5E6282]  text-base	font-[700] mb-2">
                  {step.Heading}
                </h2>
                <p className="text-[#5E6282]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Box */}
        <div className="w-3/12 p-6 bg-gray-100 rounded-lg pt-6 pr-4 pb-8 pl-2 mt-20 ml-20 mr-20">
          {/* Important Image */}
          <img src={girlimage} alt="Important Image" className="mx-auto mb-8" />

          {/* Trip Information */}
            <h2 className="text-gray-600 font-[200] mb-2">Trip To Greece</h2>
            <p className="text-gray-600  text-sm	mb-4 mx-0">
              14-29 June | by Robbin Joseph
            </p>

          {/* Building Info */}
          <div className="mb-8">
            <div className="flex items-center space-x-6">
              <div className="p-3 border bg-slate-400 rounded-full cursor-pointer">
              <ImLeaf size={20} />{" "}
              </div>
              {/* Example: increased size */}
              <div className="p-3 border bg-slate-400 rounded-full cursor-pointer">
              <FaRegMap size={20} />{" "}
              </div>
              <div className="p-3 border bg-slate-400 rounded-full cursor-pointer">
              <LuSend size={20} />{" "}
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex items-center space-x-6">
              <RiHomeOfficeLine />

              <p className="text-gray-600  text-sm	mb-4">24 people going</p>
              <CiHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyandFast;
