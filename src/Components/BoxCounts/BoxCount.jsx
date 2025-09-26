import React from 'react';
import Imgvec1 from '../../Components/BoxCounts/../../assets/vector1.png';
import Imgvec2 from '../../Components/BoxCounts/../../assets/vector2.png';

const BoxCount = ({ count, resolved }) => {
  return (
    <div className="mx-auto my-10 grid max-w-[1440px] grid-cols-2 gap-6 max-lg:px-2 max-md:grid-cols-1 max-md:px-4">
      <div className="relative rounded-md bg-gradient-to-br from-purple-600 to-purple-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-3xl font-bold text-white">
          <p>In-Progress</p>
          <p>{count.length}</p>
        </div>
        <div className="flex items-center justify-between">
          <img src={Imgvec1} alt="" className="h-full max-lg:w-[200px]" />

          <img src={Imgvec2} alt="" className="h-full max-lg:w-[200px]" />
        </div>
      </div>

      <div className="relative rounded-md bg-gradient-to-br from-[#4eca69] to-[#109177]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-3xl font-bold text-white">
          <p>Resolved</p>
          <p>{resolved.length}</p>
        </div>
        <div className="flex items-center justify-between">
          <img src={Imgvec1} alt="" className="h-full max-lg:w-[200px]" />
          <img src={Imgvec2} alt="" className="h-full max-lg:w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default BoxCount;
