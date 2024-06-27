
// const HoverEffect = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full h-full flex items-end justify-start overflow-hidden">
//       <div className="bg-[#DF6951] w-20 h-20 rounded-br-lg transform translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
//     </div>
//   );
// };

// export default HoverEffect;



import React from 'react';

const HoverEffect = () => {
  return (
    <div className=" absolute top-14 left-[-30px] w-full h-full flex items-end justify-start overflow-hidden z-[9]rounded-md	">
      <div className="bg-[#DF6951] w-20 rounded-br-lg z-[9] transform translate-x-[-150%] translate-y-[150%] h-20  group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
    </div>
  );
};

export default HoverEffect;
