import React from 'react';
// import icon1 from "../../assets/Category/icon1.png"
// import icon2 from "../../components/Category/icon2.png"
// import icon3 from "../../components/Category/icon3.png"
// import icon4 from "../../components/Category/icon4.png"

function Category() {
  return (
    <div className="container mx-auto py-6">
      {/* Row 1: CATEGORY and We Offer Best Services */}
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 text-center">
          <h2>CATEGORY</h2>
        </div>
        <div className="mb-4 text-center">
          <h2>We Offer Best Services</h2>
        </div>
      </div>

      {/* Row 2: Four boxes with descriptions */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl mb-4" >Box 1</h3>
            <p>Calculated Weather</p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl mb-4">Box 2</h3>
            <p>Calculated Weather</p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl mb-4">Box 3</h3>
            <p>Calculated Weather</p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4 mb-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl mb-4">Box 4</h3>
            <p>Calculated Weather</p>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
