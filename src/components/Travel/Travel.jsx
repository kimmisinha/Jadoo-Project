import React from "react";
import heroimg from "../../assets/hero/hero.png";
import { VscPlayCircle } from "react-icons/vsc";

import bg from "../../assets/hero/bg.svg";

function Travel() {
  return (
    <div
      className="w-full"
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="flex">
        {/* Left side */}
        <div className=" md:w-1/2 px-4 mt-46 relative ml-16">
          <h2 className="text-[#DF6951] mb-4 mt-60 pl-2 font-extrabold text-lg">
            Best Destinations around the world
          </h2>
          <h2 className="text-[#181E4B] text-8xl font-DM font-serif">
            Travel, enjoy and live a new and full life
          </h2>
          <p className="mb-4 font-poppius text-16px font-rubik font-system text-[#5E6282]">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex space-x-4 items-center">
            <button className="bg-yellow-500 text-white px-10 py-2 rounded-md hover:bg-yellow-600">
              Find out more
            </button>
            {/* White circle with triangle */}
            <div className="relative"></div>
            {/* Play Demo button */}
            <div className="flex">
              <div className="bg-[#DF6951] p-2 inline-block rounded-full hover:bg-red-800 cursor-pointer">
                <VscPlayCircle size={32} />
              </div>
              <p className=" p-2 px-6 font-poppius text-16px font-rubik font-system text-[#5E6282] hover:cursor-pointer ">Play now</p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 px-4 mt-40 relative">
          {/* Hero Image */}
          <img
            src={heroimg}
            alt="Hero Image"
            className="w-full relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Travel;
