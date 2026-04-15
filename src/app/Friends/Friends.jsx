import React from "react";
import FriendStats from "@/components/UI/FriendStats";
import FriendList from "@/components/UI/FriendList";

async function getFriends() {
  const res = await fetch("https://keen-keeper-inky.vercel.app/data.json", {
    cache: "no-store",
  });
  return res.json();
}

const Friends = async () => {
  const friends = await getFriends();
  return (
    <div className="max-w-7xl mx-auto">
      <FriendStats friends={friends} />
      <FriendList friends={friends} />
    </div>
  );
};

export default Friends;
