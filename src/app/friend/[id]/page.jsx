import React from "react";
import Image from "next/image";

async function getFriendDetails(id) {
  const res = await fetch(`http://localhost:3000/data.json`, {
    cache: "no-store",
  });

  const friends = await res.json();
  // console.log(friends);

  const friend = friends.find((friend) => friend.id.toString() === id);

  return friend;
}

const FriendDetailsPage = async ({ params }) => {
  const getParam = await params;
  const id = getParam.id;

  const friend = await getFriendDetails(id);
  console.log(friend);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4"> Friend Name: {friend.name} </h1>
    </div>
  );
};

export default FriendDetailsPage;
