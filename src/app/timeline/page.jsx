import TimelineUI from "@/components/UI/TimeLineUI";
import React from "react";

export const metadata = {
  title: "Timeline | KeenKeeper",
  description:
    "View your friendsData of interactions and meaningful moments with friends.",
};

const TimeLinePage = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="max-w-2xl mx-auto py-8 lg:pt-20">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Timeline
          </h1>
        </div>
        <TimelineUI />
      </div>
    </div>
  );
};

export default TimeLinePage;
