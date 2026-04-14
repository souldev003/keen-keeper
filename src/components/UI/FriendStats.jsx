import React from "react";

const FriendStats = ({ friends }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10 border-b-2 border-gray-200 mb-10">
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">
          {friends.length}
        </span>
        <h3 className="text-lg text-[#64748B] mb-2">Total Friends</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">
          {friends.filter((friend) => friend.status === "on-track").length}
        </span>
        <h3 className="text-lg text-[#64748B] mb-2">On Track</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">
          {friends.filter((friend) => friend.status === "overdue").length}
        </span>
        <h3 className="text-lg text-[#64748B] mb-2">Overdue</h3>
      </div>
      <div className="p-8 bg-[#FFFFFF] rounded-md shadow-md">
        <span className="text-3xl font-semibold text-[#244D3F]">
          {
            friends.filter((friend) => friend.status === "needs-attention")
              .length
          }
        </span>
        <h3 className="text-lg text-[#64748B] mb-2">Needs Attention</h3>
      </div>
    </div>
  );
};

export default FriendStats;
