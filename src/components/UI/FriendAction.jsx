"use client";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { BsTelephone, BsChatLeftText, BsCameraVideo } from "react-icons/bs";

const FriendActions = ({ friend, onAction }) => {
  const { addHistory } = useContext(TimelineContext);

  const handleAction = (type) => {
    toast.success(`${type} recorded successfully with ${friend.name}!`);

    if (addHistory) {
      addHistory(type, friend);
    }

    if (onAction) {
      onAction(type);
    }
  };

  const btnStyle =
    "flex-1 bg-white p-3 md:p-5 rounded-md border border-gray-100 flex flex-col items-center justify-center gap-2 font-semibold text-gray-800 hover:bg-gray-50 transition cursor-pointer shadow-sm";

  return (
    <div className="flex gap-4">
      <button onClick={() => handleAction("Call")} className={btnStyle}>
        <BsTelephone className="text-2xl text-gray-700" />
        Call
      </button>

      <button onClick={() => handleAction("Text")} className={btnStyle}>
        <BsChatLeftText className="text-2xl text-gray-700" />
        Text
      </button>

      <button onClick={() => handleAction("Video Call")} className={btnStyle}>
        <BsCameraVideo className="text-2xl text-gray-700" />
        Video
      </button>
    </div>
  );
};

export default FriendActions;
