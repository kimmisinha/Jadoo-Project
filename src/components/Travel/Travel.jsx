import React from "react";
import heroimg from "../../assets/hero/hero.png";
function Travel() {
  return (
    <div className="container mx-auto py-6 ">
      <div className="flex flex-wrap ">
        {/* Left side */}
        <div className="w-full md:w-1/2 px-4 mt-45">
          <h2 className="text-red-500 mb-4 mt-60 border-l-8">
            Best Destinations around the world
          </h2>
          <p className="mb-4">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600">
              Play Demo
            </button>
            <button className="text-yellow-500 border border-yellow-500 px-6 py-3 rounded hover:bg-yellow-100">
              Find out more
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full md:w-1/2 px-4 mt-40">
          <img src={heroimg} alt="Hero Image" className="w-full " />
        </div>
      </div>
    </div>
  );
}

export default Travel;
