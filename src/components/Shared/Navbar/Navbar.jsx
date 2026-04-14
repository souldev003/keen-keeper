import React from "react";
import logoImage from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <Image
            src={logoImage}
            alt="Keen Keeper Logo"
            width={141}
            height={31}
            className="mr-2"
            loading="eager"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className="text-[#64748B] py-3 px-4 flex items-center justify-center hover:text-[#ffffff] hover:bg-[#244D3F] transition-colors duration-300 rounded-md active:scale-95"
                href="/"
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[#64748B] py-3 px-4 flex items-center justify-center hover:text-[#ffffff] hover:bg-[#244D3F] transition-colors duration-300 rounded-md active:scale-95"
                href="/timeline"
              >
                <FaRegClock />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                className="text-[#64748B] py-3 px-4 flex items-center justify-center hover:text-[#ffffff] hover:bg-[#244D3F] transition-colors duration-300 rounded-md active:scale-95"
                href="/stats"
              >
                <TfiStatsUp />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
