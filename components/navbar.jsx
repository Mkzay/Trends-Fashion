"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cartContext"; // Import the cart context
import Cart from "@/components/cart"; // Import the cart component
import { usePathname } from "next/navigation";
import MobileNav from "@/components/mobileNav";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();
  const pathname = usePathname();

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

  const toggleAuth = () => {
    setOpenAuth((prev) => !prev);
  };

  const activeLink = "text-orange-600 font-bold";
  const inactiveLink = "";

  const isLinkActive = (href) => pathname === href;

  return (
    <>
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

        <div>
          <MobileNav />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-24 lg:flex">
          <li className={isLinkActive("/") ? activeLink : inactiveLink}>
            <Link href="/">Home</Link>
          </li>
          <li>New Arrivals</li>
          <li>Collections</li>
          <li>Sales</li>
          <li>Contact</li>
        </ul>

        {/* Cart Button */}
        <div className="flex items-center gap-1">
          <button onClick={toggleCart} className="flex items-center gap-1">
            <Image
              src="/images/cart-shopping-solid.svg"
              alt="shopping-cart"
              width={20}
              height={20}
            />
            <p className="hidden md:flex">Cart</p>
          </button>
          <span>({cartItems.length})</span>{" "}
          {/* Display number of items in the cart */}
        </div>
      </nav>

      {/* Conditionally render the Cart component */}
      {openCart && <Cart onClose={toggleCart} />}
    </>
  );
};

export default Navbar;
