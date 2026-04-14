import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="text-[#1F2937]">
        <div className="w-275 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-lg text-[#64748B] mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and{" "}
            nurture the <br /> relationships that matter most.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#244D3F] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-300 border-2 border-transparent hover:bg-white hover:text-[#244D3F] hover:border-[#244D3F] hover:border-2">
              <FaPlus />
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
