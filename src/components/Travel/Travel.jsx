import React from "react";
import heroimg from "../../assets/hero/hero.png";

function Travel() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-wrap">
        {/* Left side */}
        <div className="w-full md:w-1/2 px-4 mt-45">
          <h2 className="text-[#DF6951] mb-4 mt-60 border-l-8 pl-2 font-extrabold	text-lg		">
            Best Destinations around the world
          </h2>
          <h2 className="text-[#181E4B] text-8xl	font-DM font-serif">
            Travel, enjoy and live a new and full life
          </h2>
          <p className="mb-4 font-poppius text-16px font-rubik font-system text-[#5E6282]">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate <br /> sell
            they west hard for the.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-white px-10 py-2 rounded-md hover:bg-yellow-600">
              Find out more
            </button>
            {/* <button className="text-yellow-500 border border-yellow-500 px-6 py-3 rounded hover:bg-yellow-100">

            </button> */}
          </div>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 px-4 mt-40">
          <img src={heroimg} alt="Hero Image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Travel;
