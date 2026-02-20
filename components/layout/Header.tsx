"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

import { useCartStore } from "@/store/cartStore";

export default function Header() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);

  // desktop active link
  const navLink = (path: string) =>
    `transition ${
      pathname === path || pathname.startsWith(path + "/")
        ? "text-yellow-400"
        : "text-white hover:text-yellow-300"
    }`;

  // mobile active link
  const mobileNavLink = (path: string) =>
    `transition text-lg ${
      pathname === path || pathname.startsWith(path + "/")
        ? "text-yellow-400 font-semibold"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <header className="w-full shadow-md">

      {/* TOP BAR */}
      <div className="bg-white px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="PizzaFun Logo"
            width={180}
            height={100}
            priority
          />
        </Link>

        {/* Contact Desktop */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex flex-col text-sm">
            <div className="flex items-center gap-2 font-semibold text-black">
              <Phone size={16} />
              +65 8184 3454
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              orders@pizzafun.sg
            </div>
          </div>

          <Image
            src="/images/halal-singapore.png"
            alt="Halal"
            width={60}
            height={60}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* NAVBAR */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 sm:px-6 py-3">

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center">

          {/* Left empty */}
          <div />

          {/* Center Nav */}
          <nav className="flex justify-center gap-10 font-semibold text-lg">

            <Link href="/" className={navLink("/")}>
              HOME
            </Link>

            <Link href="/menu" className={navLink("/menu")}>
              MENU
            </Link>

            <Link href="/contact" className={navLink("/contact")}>
              CONTACT
            </Link>

            <Link href="/orders" className={navLink("/orders")}>
              ORDERS
            </Link>

          </nav>

          {/* Right Icons */}
          <div className="flex justify-end items-center gap-5">

            <Facebook className="text-white hover:text-yellow-400 cursor-pointer transition" />

            <Instagram className="text-white hover:text-yellow-400 cursor-pointer transition" />

            {/* CART ICON */}
            <button
              onClick={openCart}
              className="relative"
            >
              <ShoppingCart className="text-white hover:text-yellow-400 transition" />

              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
                  {items.length}
                </span>
              )}
            </button>

            <Link
              href="/login"
              className={navLink("/login")}
            >
              Login
            </Link>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-600">

            <Link
              href="/"
              className={mobileNavLink("/")}
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>

            <Link
              href="/menu"
              className={mobileNavLink("/menu")}
              onClick={() => setOpen(false)}
            >
              MENU
            </Link>

            <Link
              href="/contact"
              className={mobileNavLink("/contact")}
              onClick={() => setOpen(false)}
            >
              CONTACT
            </Link>

            <Link
              href="/orders"
              className={mobileNavLink("/orders")}
              onClick={() => setOpen(false)}
            >
              ORDERS
            </Link>

            <Link
              href="/login"
              className={mobileNavLink("/login")}
              onClick={() => setOpen(false)}
            >
              LOGIN
            </Link>

            {/* Mobile Cart */}
            <button
              onClick={() => {
                setOpen(false);
                openCart();
              }}
              className="flex items-center gap-2 text-white"
            >
              <ShoppingCart />
              Cart ({items.length})
            </button>

          </div>
        )}

      </div>

    </header>
  );
}