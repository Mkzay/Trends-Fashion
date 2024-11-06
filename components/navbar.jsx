"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const navbar = () => {
  const [openAuth, setOpenAuth] = useState(false);

  const toggleAuth = () => {
    setOpenAuth((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between w-full fixed top-0 p-5 font-jane z-50 bg-[#f8f8f8]">
      <div className="flex items-center gap-2">
        <button onClick={toggleAuth} className="lg:hidden">
          <Image
            src="/images/bars-solid.svg"
            alt="menu-bar"
            width={15}
            height={15}
          />
        </button>
        <Link href="/" passHref>
          <h1 className="text-xl lg:text-3xl uppercase">Trends</h1>
        </Link>
      </div>
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
        <li>Home</li>
        <li>New Arrivals</li>
        <li>Collections</li>
        <li>Sales</li>
        <li>Contact</li>
      </ul>

      {/* Hidden on mobile */}
      <ul className="hidden items-center gap-24 lg:flex">
        <li>Home</li>
        <li>New Arrivals</li>
        <li>Collections</li>
        <li>Sales</li>
        <li>Contact</li>
      </ul>
      <div className="flex items-center gap-1">
        <button className="flex items-center gap-1">
          <Image
            src="/images/cart-shopping-solid.svg"
            alt="shopping-cart"
            width={20}
            height={20}
          />
          <p className="hidden md:flex">Cart</p>
        </button>
        <span>(0)</span>
      </div>
    </nav>
  );
};

export default navbar;
