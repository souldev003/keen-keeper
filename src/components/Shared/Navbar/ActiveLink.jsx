"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-3 px-4 flex items-center justify-center transition-all duration-300 rounded-md active:scale-95 group overflow-hidden`}
    >
      <div
        className={`absolute inset-0 transition-all duration-300 ease-in-out ${
          isActive
            ? "bg-[#244D3F] opacity-100"
            : "bg-transparent opacity-0 group-hover:bg-gray-100 group-hover:opacity-100"
        }`}
      />

      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
          isActive ? "text-white" : "text-[#64748B] group-hover:text-[#244D3F]"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default ActiveLink;
