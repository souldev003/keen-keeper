import React from "react";
import { FaPlus } from "react-icons/fa";
import FriendStats from "./FriendStats";

const Banner = () => {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="text-[#1F2937]">
        <div className="max-w-275 mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Friends to keep close in your life
          </h1>

          <p className="text-base md:text-lg text-[#64748B] mb-8 px-2 md:px-0">
            Your personal shelf of meaningful connections. Browse, tend, and{" "}
            nurture the <br className="hidden md:block" /> relationships that
            matter most.
          </p>

          <div className="flex justify-center">
            <button className="bg-[#244D3F] text-white py-3 px-6 md:py-2 md:px-4 rounded-md flex items-center justify-center gap-2 transition-all duration-200 border-2 border-transparent hover:bg-white hover:text-[#244D3F] hover:border-[#244D3F] active:scale-90 active:opacity-80 shadow-md w-full sm:w-auto">
              <FaPlus />
              Add Friend
            </button>
          </div>
          <FriendStats />
        </div>
      </div>
    </section>
  );
};

export default Banner;
