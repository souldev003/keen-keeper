"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import Image from "next/image";
import callIcon from "@/app/assets/call.png";
import textIcon from "@/app/assets/text.png";
import videoIcon from "@/app/assets/video.png";

const TimelineUI = () => {
  const { friendsData } = useContext(TimelineContext);

  if (friendsData.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No Activity yet</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-6">
        <select className="border p-3 rounded text-gray-400 w-40 text-sm">
          <option>Filter timeline</option>
          <option>Calls</option>
          <option>Texts</option>
          <option>Video Calls</option>
        </select>
      </div>

      <div className="space-y-4">
        {friendsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full bg-white border border-gray-200 p-4 rounded-lg shadow-sm flex items-center gap-4">
              <div className="text-2xl bg-gray-100 p-2 rounded">
                {item.type === "Call" && (
                  <Image
                    src={callIcon}
                    alt="Call Icon"
                    width={24}
                    height={24}
                  />
                )}
                {item.type === "Text" && (
                  <Image
                    src={textIcon}
                    alt="Text Icon"
                    width={24}
                    height={24}
                  />
                )}
                {item.type === "Video Call" && (
                  <Image
                    src={videoIcon}
                    alt="Video Icon"
                    width={24}
                    height={24}
                  />
                )}
              </div>

              <div>
                <p className="text-gray-800">
                  <span className="font-bold">{item.type}</span>
                  <span className="text-gray-500 ml-1 font-medium">
                    with {item.name}
                  </span>
                </p>
                <p className="text-xs text-gray-400 font-semibold">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineUI;
