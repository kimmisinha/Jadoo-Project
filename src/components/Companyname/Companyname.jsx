import React from "react";
import Icon1 from "../../assets/partner/1.png";
import Icon2 from "../../assets/partner/2.png";
import Icon3 from "../../assets/partner/3.png";
import Icon4 from "../../assets/partner/4.png";
import Icon5 from "../../assets/partner/5.png";

function Companyname() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-center space-x-4">
        <img
          src={Icon1}
          alt="Company 1"
          className="hover:shadow-lg shadow-cyan-500/50 rounded-md	 bord cursor-pointer pr-10"
        />
        <img
          src={Icon2}
          alt="Company 2"
          className="h-10 hover:shadow-lg shadow-cyan-500/50 rounded-md	 bord cursor-pointer pr-10"
        />
        <img
          src={Icon3}
          alt="Company 3"
          className="h-10 hover:shadow-lg shadow-cyan-500/50 rounded-md	 bord cursor-pointer pr-10"
        />
        <img
          src={Icon4}
          alt="Company 4"
          className="hover:shadow-lg shadow-cyan-500/50 rounded-md	 bord cursor-pointer pr-10"
        />
        <img
          src={Icon5}
          alt="Company 5"
          className="hover:shadow-lg shadow-cyan-500/50 rounded-md	 bord cursor-pointer pr-10"
        />
      </div>
    </div>
  );
}

export default Companyname;
