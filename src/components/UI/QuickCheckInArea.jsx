"use client";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import FriendActions from "./FriendAction";
import Image from "next/image";

import callIcon from "@/app/assets/call.png";
import textIcon from "@/app/assets/text.png";
import videoIcon from "@/app/assets/video.png";

const QuickCheckInArea = ({ friend }) => {
  const { friendsData } = useContext(TimelineContext);

  const friendActivities = friendsData.filter(
    (item) => item.name === friend.name,
  );

  return (
    <div className="flex flex-col gap-6">
      <FriendActions friend={friend} />

      {friendActivities.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            Recent Activity (Last 5)
          </h3>

          <div className="space-y-3">
            {friendActivities.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                  {item.type === "Call" && (
                    <Image src={callIcon} alt="call" width={20} height={20} />
                  )}
                  {item.type === "Text" && (
                    <Image src={textIcon} alt="text" width={20} height={20} />
                  )}
                  {item.type === "Video Call" && (
                    <Image src={videoIcon} alt="video" width={20} height={20} />
                  )}
                </div>

                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">{item.type}</span> with{" "}
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-400 font-bold uppercase">
                    {item.time || "Just now"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickCheckInArea;
