"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const footer = () => {
  const pathname = usePathname();

  const activeLink = "text-orange-600 font-bold";
  const inactiveLink = "";

  const isLinkActive = (href) => pathname === href;

  return (
    <footer className="flex items-center justify-between w-full absolute bottom-auto p-5 font-jane">
      <div>
        <h1 className="text-xl font-light lg:text-3xl uppercase">Trends</h1>
      </div>
      <ul className="hidden items-center gap-24 lg:flex">
        <li className={isLinkActive("/") ? activeLink : inactiveLink}>
          <Link href="/">Home</Link>
        </li>
        <li>New Arrivals</li>
        <li>Collections</li>
        <li>Sales</li>
        <li>Contact</li>
      </ul>
      <button className={isLinkActive("/") ? activeLink : inactiveLink}>
        <Link href="/">Back To Top</Link>
      </button>
    </footer>
  );
};

export default footer;
