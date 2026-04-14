import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-8">
          <span className="flex items-center justify-center text-8xl font-extrabold text-[#244D3F]">
            404
          </span>
        </div>

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1F2937] mb-5 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-[16px] md:text-lg text-[#64748B] mb-12 leading-relaxed">
            The page you are looking for doesn’t exist or has been moved. Don’t
            worry, your meaningful connections are still safe.
          </p>
        </div>

        <Link
          href="/"
          className="bg-[#244D3F] text-white py-3 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 border-2 border-[#244D3F] hover:bg-white hover:text-[#244D3F] active:scale-95 shadow-lg group"
        >
          <FaHome className="text-xl transition-transform duration-300" />
          <span className="font-semibold text-lg">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
