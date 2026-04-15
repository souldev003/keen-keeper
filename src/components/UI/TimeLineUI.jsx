"use client";

import { useContext, useState } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import callIcon from "@/app/assets/call.png";
import textIcon from "@/app/assets/text.png";
import videoIcon from "@/app/assets/video.png";
import {
  IoChevronDown,
  IoLayersOutline,
  IoSearchOutline,
} from "react-icons/io5";

const TimelineUI = () => {
  const { friendsData } = useContext(TimelineContext);
  const [filter, setFilter] = useState("Filter timeline");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = (friendsData || []).filter((item) => {
    const matchesFilter =
      filter === "Filter timeline" ||
      (filter === "Calls" && item.type === "Call") ||
      (filter === "Texts" && item.type === "Text") ||
      (filter === "Video Calls" && item.type === "Video Call");

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const dateA = new Date(a.date || a.time);
    const dateB = new Date(b.date || b.time);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  if (friendsData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 p-6 text-center">
        <div className="bg-gray-50 p-6 rounded-full mb-4 ring-8 ring-gray-50/50">
          <IoLayersOutline className="text-gray-300 text-6xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          No Activity Recorded
        </h3>
        <button className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-full text-sm font-semibold hover:bg-[#1a3a30] transition-colors">
          Record First Action
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by name or activity..."
            className="w-full pl-10 pr-4 py-3 border border-gray-100 shadow-sm rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/10 transition-all bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearchOutline className="absolute left-3 top-3.5 text-gray-400 text-lg" />
        </div>

        <div className="relative w-full md:w-44">
          <select
            className="appearance-none border border-gray-100 shadow-sm pl-4 pr-10 py-3 rounded-xl text-gray-500 w-full text-sm focus:outline-none cursor-pointer bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="Filter timeline">All Types</option>
            <option value="Calls">Calls</option>
            <option value="Texts">Texts</option>
            <option value="Video Calls">Video Calls</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
            <IoChevronDown size={16} />
          </div>
        </div>

        <div className="relative w-full md:w-40">
          <select
            className="appearance-none border border-gray-100 shadow-sm pl-4 pr-10 py-3 rounded-xl text-gray-500 w-full text-sm focus:outline-none cursor-pointer bg-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
            <IoChevronDown size={16} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sortedData.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 italic">
              No activities match your search {searchQuery}
            </p>
          </div>
        ) : (
          sortedData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="text-2xl bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {item.type === "Call" && (
                    <Image src={callIcon} alt="Call" width={24} height={24} />
                  )}
                  {item.type === "Text" && (
                    <Image src={textIcon} alt="Text" width={24} height={24} />
                  )}
                  {item.type === "Video Call" && (
                    <Image src={videoIcon} alt="Video" width={24} height={24} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">
                    <span className="font-bold">{item.type}</span>
                    <span className="text-gray-500 ml-1 font-medium text-sm">
                      with {item.name}
                    </span>
                  </p>
                  <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelineUI;
