"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);

  const addHistory = (type, friend) => {
    const newItem = {
      type,
      name: friend.name,
      id: friend.id,
      time: new Date().toLocaleString(),
    };

    setFriendsData((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ friendsData, addHistory }}>
      {children}
    </TimelineContext.Provider>
  );
};
