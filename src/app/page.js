import React, { Suspense } from "react";
import Banner from "@/components/Home/Banner";
import Friends from "@/app/Friends/Friends";
import { HashLoader } from "react-spinners";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center mb-8">
            <HashLoader color="#244D3F" size={50} />
          </div>
        }
      >
        <Friends />
      </Suspense>
    </div>
  );
}
