"use client";

import React, { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#8b5cf6", "#17212b", "#22c55e"];

const StatsUI = () => {
  const { friendsData } = useContext(TimelineContext);

  const counts = (friendsData || []).reduce(
    (acc, item) => {
      const type = item.type?.toLowerCase?.();
      if (type === "video call") acc.videoCall += 1;
      else if (type === "text") acc.text += 1;
      else if (type === "call") acc.call += 1;
      return acc;
    },
    { videoCall: 0, text: 0, call: 0 },
  );

  const totalInteractions = counts.text + counts.call + counts.videoCall;

  const chartData = [
    { name: "Text", value: counts.text },
    { name: "Call", value: counts.call },
    { name: "Video Call", value: counts.videoCall },
  ];

  return (
    <div className="bg-[#FFFFFF] p-8 rounded-xl shadow-sm">
      <h1 className="text-xl text-[#244D3F] font-medium mb-6">
        By Interaction Type
      </h1>

      {totalInteractions === 0 ? (
        <div className="flex flex-col items-center justify-center h-80 space-y-4">
          <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm italic">No Data</span>
          </div>
          <p className="text-gray-500 text-sm">No interactions recorded yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                  cornerRadius={8}
                  paddingAngle={4}
                  label={({ name, percent }) =>
                    `${name} ${Math.round(percent * 100)}%`
                  }
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${entry.name}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Interactions"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {chartData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-gray-50"
              >
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsUI;
