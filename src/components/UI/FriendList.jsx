import React from "react";
import Image from "next/image";
import Link from "next/link";

const FriendList = ({ friends }) => {
  return (
    <div className="mb-20">
      <div>
        <h2 className="text-2xl font-semibold text-[#244D3F] mb-4">
          Your Friends
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <Link
            href={`/friend/${friend.id}`}
            key={friend.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="relative w-24 h-24 mb-4">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-50 shadow-inner">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  unoptimized={true}
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-800">{friend.name}</h3>
            <p className="text-sm text-gray-400 mb-3">
              {friend.days_since_contact}d ago
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {friend.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 border border-[#28d69c] py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className={`px-4 py-1 rounded-full text-xs font-bold text-white uppercase ${
                friend.status === "overdue"
                  ? "bg-[#e65757]"
                  : friend.status === "on-track"
                    ? "bg-[#244D3F]"
                    : "bg-[#EFAD44]"
              }`}
            >
              {friend.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
