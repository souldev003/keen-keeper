import React from "react";

const FriendStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">15</span>
        <h3 className="text-lg text-[#64748B] mb-2">Total Friends</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">15</span>
        <h3 className="text-lg text-[#64748B] mb-2">On Track</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">15</span>
        <h3 className="text-lg text-[#64748B] mb-2">Need Attention</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">15</span>
        <h3 className="text-lg text-[#64748B] mb-2">Interaction This Month</h3>
      </div>
    </div>
  );
};

export default FriendStats;
