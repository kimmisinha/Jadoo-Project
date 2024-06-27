import React, { useState } from 'react';
import "./testionials.css";

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
  const [activeTestimonial, setActiveTestimonial] = useState(testimonialsData[0]);

  // Function to handle click and change content
  const handleContentChange = (testimonial) => {
    setActiveTestimonial(testimonial);
  };

  return (
    <div className="container mx-auto py-12 flex justify-between items-start mt-40">
      {/* Left Side: Title and Dots */}
      <div className="w-1/3">
        <div className="text-left mb-8">
          <p className="text-[#5E6282] font-rubik text-lg font-semibold">Testimonials</p>
          <h2 className="text-[#14183E] text-6xl font-bold volkhov-regular">What People Say About Us.</h2>
        </div>
        {/* Pagination */}
        <div className="flex justify-start mt-20">
          {/* Icons for Content Change */}
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`w-4 h-4 bg-gray-300 rounded-full mx-1 cursor-pointer ${
                activeTestimonial.id === testimonial.id ? "bg-gray-700" : ""
              }`}
              onClick={() => handleContentChange(testimonial)}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side: Testimonial Card */}
      <div className="w-2/3 flex justify-center h-60">
        <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
          <img src={activeTestimonial.image} alt={`Author ${activeTestimonial.id}`} className="w-16 h-16 rounded-full absolute -top-8 left-4" />
          <div className="flex flex-col">
            <p className="text-gray-600 mt-4">{activeTestimonial.content}</p>
            <h4 className="text-[#14183E] text-xl font-bold mt-4">{activeTestimonial.author}</h4>
            <p className="text-[#5E6282]">{activeTestimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
