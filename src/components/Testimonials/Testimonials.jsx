import React, { useState } from 'react';

// Import your images
import Icon1 from "../../assets/testimonial/author.png";
import Icon2 from "../../assets/testimonial/author2.png";
import Icon3 from "../../assets/testimonial/author3.png";

function Testimonials() {
  // Define your testimonials data
  const testimonialsData = [
    {
      id: 1,
      image: Icon1,
      content: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      author: "Kelly Willium",
      location: "Khulna, Bangladesh"
    },
    {
      id: 2,
      image: Icon2,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Mike Taylor",
      location: "Lahore, Pakistan"
    },
    {
      id: 3,
      image: Icon3,
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Emily Brown",
      location: "New York, USA"
    }
  ];

  // State to manage the active testimonial content
  const [activeContent, setActiveContent] = useState("");

  // Function to handle click and change content
  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="container mx-auto py-12">
      {/* Section Title */}
      <div className="text-center mb-8">
        <p className="text-[#5E6282] font-rubik text-lg font-semibold">Testimonials</p>
        <h2 className="text-[#14183E] text-4xl font-bold">What People Say About Us.</h2>
      </div>

      {/* Testimonials Cards */}
      <div className="flex justify-center">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="relative bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto mr-4">
            <img src={testimonial.image} alt={`Author ${testimonial.id}`} className="w-16 h-16 rounded-full absolute -top-4 right-4" />
            <div className="flex flex-col">
              <p className="text-gray-600">
                {activeContent === testimonial.content ? testimonial.content : null}
              </p>
              <h4 className="text-[#14183E] text-xl font-bold mt-4">{testimonial.author}</h4>
              <p className="text-[#5E6282]">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {/* Icons for Content Change */}
        {testimonialsData.map((testimonial) => (
          <img
            key={testimonial.id}
            src={testimonial.image}
            alt={`Icon ${testimonial.id}`}
            className="w-8 h-8 cursor-pointer mx-1"
            onClick={() => handleContentChange(testimonial.content)}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
