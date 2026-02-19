"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      <div className="bg-white px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="PizzaFun Logo"
            width={200}
            height={120}
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden border">
          <select className="bg-transparent px-4 py-2 outline-none">
            <option>All categories</option>
            <option>Bite Me Sweetly | Desserts</option>
            <option>Grab & Gobble | Quick Bites</option>
            <option>Sippity Sip | Drinks</option>
            <option>Plant Power Pizzas | Veg Pizza</option>
            <option>Cluckin' Pizzazz | Non-Veg Pizza</option>
            <option>Crust Meets Crunch | Chizza</option>
            <option>Bun-dle Of Fun | Burger</option>
            <option>Stuff'd & Stack | Sandwich</option>
            <option>Rollin' with Flavour | Wraps</option>
          </select>

          <input
            type="text"
            placeholder="Search on site"
            className="px-4 py-2 bg-transparent outline-none w-64"
          />

          <button className="bg-yellow-400 px-6 py-2 font-bold hover:bg-yellow-500 transition">
            SEARCH
          </button>

        </div>

        {/* Contact */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Contact Info */}
          <div className="flex flex-col text-sm">
            <div className="flex items-center gap-2 text-black-500 font-semibold">
              <Phone size={18} />
              +65 - 8184 3454
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              orders@pizzafun.sg
            </div>
          </div>

          {/* Halal Logo */}
          <Image
            src="/images/halal-singapore.png"
            alt="Singapore Halal"
            width={80}
            height={80}
            priority
          />

        </div>

      </div>

      {/* Navbar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 flex items-center justify-between">

        {/* Nav Links */}
        <nav className="flex gap-8 font-semibold">
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            HOME
          </Link>

          <Link
            href="/menu"
            className="text-white hover:text-yellow-300 transition"
          >
            MENU
          </Link>
        </nav>

        {/* Social + Login */}
        <div className="flex items-center gap-4">
          <Facebook className="text-white hover:text-yellow-400 cursor-pointer" />
          <Instagram className="text-white hover:text-yellow-400 cursor-pointer" />
          <User className="text-white hover:text-yellow-400 cursor-pointer" />
          <Link
            href="/login"
            className="text-white hover:text-yellow-400"
          >
            Login
          </Link>
        </div>
      </div>

    </header>
  );
}
