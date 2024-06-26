import React, { useState } from 'react';

function Dummy() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <footer className="footer bg-gray-100 border-b border-gray-200 fixed top-0 w-full">
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Right side (previously left side) */}
          <div className="flex items-center">
            <img src="/path/to/your/image.png" alt="Image" className="h-10" />
          </div>
          {/* Left side (previously right side) */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 hover:text-orange-500 cursor-pointer" onClick={toggleDropdown}>
              
            </span>
            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 py-2 w-32">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">EN</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">BN</a>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dummy;
