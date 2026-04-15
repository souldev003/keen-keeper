import React from "react";
import Image from "next/image";
import { BsBell, BsArchive, BsTrash } from "react-icons/bs";
import QuickCheckInArea from "@/components/UI/QuickCheckInArea";
import Link from "next/link";

async function getFriendDetails(id) {
  try {
    const res = await fetch(`http://localhost:3000/data.json`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const friends = await res.json();
    const friend = friends.find((friend) => friend.id.toString() === id);

    return friend;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const getParam = await params;
  const id = getParam.id;

  const friend = await getFriendDetails(id);

  if (!friend) {
    return {
      title: "Friend Not Found | KeenKeeper",
    };
  }

  return {
    title: `${friend.name} - Details | KeenKeeper`,
    description: `Check-in details and history for ${friend.name}`,
  };
}

const FriendDetailsPage = async ({ params }) => {
  const getParam = await params;
  const id = getParam.id;

  const friend = await getFriendDetails(id);

  if (!friend) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
        <div className="bg-red-50 p-6 rounded-full mb-4">
          <svg
            className="w-16 h-16 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Friend Not Found
        </h2>
        <p className="text-gray-500 max-w-sm mb-6">
          The friend you are looking for doesn&apos;t exist or might have been
          removed from your list.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-[#244D3F] text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-4">
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

            <h1 className="text-xl font-bold text-gray-900 mb-2">
              {friend.name}
            </h1>

            <span
              className={`px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase mb-3 ${
                friend.status === "overdue"
                  ? "bg-[#e65757]"
                  : friend.status === "on-track"
                    ? "bg-[#244D3F]"
                    : "bg-[#EFAD44]"
              }`}
            >
              {friend.status}
            </span>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {friend.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 border border-[#79be8f] py-1.5 bg-[#CBFADB] text-[#35493c] text-[11px] font-bold uppercase rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#64748B] italic mb-1">{friend.bio}</p>
            <p className="text-xs text-gray-400 font-mono">
              Email: {friend.email}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="text-gray-700 w-full bg-white text-left p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 text-sm font-semibold hover:bg-gray-50 transition ">
              <BsBell className="text-lg text-gray-500" />
              Snooze 2 Weeks
            </button>

            <button className="text-gray-700 w-full bg-white text-left p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 text-sm font-semibold hover:bg-gray-50 transition ">
              <BsArchive className="text-lg text-gray-500" />
              Archive
            </button>

            <button className="text-red-600 border-red-100 w-full bg-white text-left p-4 rounded-lg shadow-sm border flex items-center gap-3 text-sm font-semibold hover:bg-red-100 transition ">
              <BsTrash className="text-lg" />
              Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">
                {friend.days_since_contact}
              </div>
              <div className="text-sm font-medium text-gray-500">
                Days Since Contact
              </div>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">
                {friend.goal}
              </div>
              <div className="text-sm font-medium text-gray-500">
                Goal (Days)
              </div>
            </div>

            <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-extrabold text-gray-900 mb-2">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm font-medium text-gray-500">Next Due</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-md shadow-sm border border-gray-100 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">
                Relationship Goal
              </h2>
              <button className="text-sm font-semibold text-gray-600 px-4 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50">
                Edit
              </button>
            </div>

            <p className="text-gray-600 flex gap-2 items-center text-sm">
              Connect every{" "}
              <strong className="text-gray-900 text-base">
                {friend.goal} days
              </strong>
            </p>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-md shadow-sm border border-gray-100 flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-800">Quick Check-In</h2>
            <QuickCheckInArea friend={friend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
