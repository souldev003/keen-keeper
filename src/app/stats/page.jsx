import StatsUI from "@/components/UI/StatsUI";
import React from "react";

const StatsPage = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="max-w-2xl mx-auto my-8 lg:my-20">
        <h1 className="text-2xl p-3 md:text-3xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>
        <StatsUI />
      </div>
    </div>
  );
};

export default StatsPage;
