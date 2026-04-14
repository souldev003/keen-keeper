import React from "react";
import logoImage from "@/app/assets/logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import { FaHome, FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-base-100 sticky top-0 z-50">
      <div className="navbar container mx-auto">
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
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <ActiveLink href="/">
                <FaHome /> Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/timeline">
                <FaRegClock /> Timeline
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/stats">
                <TfiStatsUp /> Stats
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
