"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const mobileNav = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const pathname = usePathname();

  const toggleAuth = () => {
    setOpenAuth((prev) => !prev);
  };
  const activeLink = "text-orange-600 font-bold";
  const inactiveLink = "";

  const isLinkActive = (href) => pathname === href;

  return (
    <ul
      className={`${
        openAuth
          ? "duration-200 ease-in lg:hidden"
          : "-translate-x-[400%] duration-500 ease-out lg:hidden"
      } flex flex-col items-start gap-10 absolute top-0 left-0 bg-white text-black w-8/12 h-screen pt-16 p-10 lg-hidden`}
    >
      <button onClick={toggleAuth} className="absolute top-5 right-5">
        <Image
          src="/images/xmark-solid.svg"
          alt="menu-bar"
          width={15}
          height={15}
        />
      </button>
      <li className={isLinkActive("/") ? activeLink : inactiveLink}>
        <Link href="/">Home</Link>
      </li>

      <li>New Arrivals</li>
      <li>Collections</li>
      <li>Sales</li>
      <li>Contact</li>
    </ul>
  );
};

export default mobileNav;
