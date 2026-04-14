import React from "react";
import logoImage from "@/app/assets/logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import { FaHome, FaRegClock, FaBars, FaRegChartBar } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
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
          <FaRegChartBar /> Stats
        </ActiveLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm bg-base-100 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              {navLinks}
            </ul>
          </div>

          <Image
            src={logoImage}
            alt="Keen Keeper Logo"
            width={141}
            height={31}
            className="mr-2"
            loading="eager"
          />
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
