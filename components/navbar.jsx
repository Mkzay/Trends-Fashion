"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cartContext"; // Import the cart context
import Cart from "@/components/cart"; // Import the cart component

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openCart, setOpenCart] = useState(false); // State to manage cart visibility
  const { cartItems } = useCart(); // Access cart items from CartContext

  const toggleAuth = () => {
    setOpenAuth((prev) => !prev);
  };

  const toggleCart = () => {
    setOpenCart((prev) => !prev);
  };

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

        {/* Mobile Menu */}
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
          <Link href="/" passHref>
            <li>Home</li>
          </Link>

          <li>New Arrivals</li>
          <li>Collections</li>
          <li>Sales</li>
          <li>Contact</li>
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-24 lg:flex">
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
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
