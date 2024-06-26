import React from 'react';
import icon1 from "../../assets/hero/icon1.png";

import icon2 from "../../assets/hero/icon2.png";
import icon3 from "../../assets/hero/icon3.png";
import icon4 from "../../assets/hero/icon4.png";

let icons = [icon1, icon2, icon3, icon4];

function Category() {
  return (
    <div className="container mx-auto py-6 mt-8">
      {/* Row 1: CATEGORY and We Offer Best Services */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 text-center">
          <h2 className='text-[#5E6282] font-rubik font-system font-bold	'>CATEGORY</h2>
        </div>
        <div className="mb-4 text-center text-[#14183E] font-rubik font-system font-bold text-5xl	font-DM font-serif	">
          <h>We Offer Best Services</h>
        </div>
      </div>

      {/* Row 2: Four boxes with descriptions */}
      <div className="flex justify-center ">
        {icons.map((icon, index) => (
          <div key={index} className="w-full md:w-2/4 px-4 mb-4 text-[#14183E] font-bold	">
            <div className="bg[#FFFEFE] p-6 rounded-lg	">
              <img src={icon} alt={`Icon ${index + 1}`} className="w-16 h-16 mx-auto mb-4" />
              <p>Calculated Weather</p>
              <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
