"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data))
      .catch((err) => console.error("Data fetch error:", err));
  }, []);

  console.log(friends);

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-[#244D3F] mb-4">
          Your Friends
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="p-4 border flex flex-col items-center gap-2 justify-center rounded-lg bg-white shadow-sm"
          >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100">
              <Image
                src={friend.picture}
                alt={friend.name}
                fill
                sizes="80px"
                priority={true}
                className="object-cover"
              />
            </div>
            <p className="font-bold">{friend.name}</p>
            <p
              className={`text-sm ${
                friend.status === "active" ? "text-green-500" : "text-gray-500"
              }`}
            >
              {friend.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
