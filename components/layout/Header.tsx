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
  User,
  Menu,
  X,
} from "lucide-react";

export default function Header() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // reusable nav style
  const navLink = (path: string) =>
    `transition ${
      pathname === path || pathname.startsWith(path + "/")
        ? "text-yellow-400"
        : "text-white hover:text-yellow-300"
    }`;

  const mobileNavLink = (path: string) =>
    `transition ${
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

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden border">

          <select className="bg-transparent px-3 py-2 outline-none text-sm">
            <option>All categories</option>
            <option>Veg Pizza</option>
            <option>Non-Veg Pizza</option>
            <option>Burger</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 bg-transparent outline-none w-48 lg:w-64 text-sm"
          />

          <button className="bg-yellow-400 px-4 lg:px-6 py-2 font-semibold hover:bg-yellow-500 transition text-sm">
            SEARCH
          </button>
        </div>

        {/* Contact */}
        <div className="hidden lg:flex items-center gap-6">

          <div className="flex flex-col text-sm">
            <div className="flex items-center gap-2 font-semibold">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between">

          <nav className="flex gap-8 font-semibold">

            <Link href="/" className={navLink("/")}>
              HOME
            </Link>

            <Link href="/menu" className={navLink("/menu")}>
              MENU
            </Link>

          </nav>

          <div className="flex items-center gap-4">

            <Facebook className="text-white hover:text-yellow-400 cursor-pointer transition" />

            <Instagram className="text-white hover:text-yellow-400 cursor-pointer transition" />

            <User className="text-white hover:text-yellow-400 cursor-pointer transition" />

            <Link
              href="/login"
              className={navLink("/login")}
            >
              Login
            </Link>

          </div>

        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 mt-4">

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
              href="/login"
              className={mobileNavLink("/login")}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <div className="flex gap-4 mt-2 text-white">
              <Facebook />
              <Instagram />
            </div>

          </div>
        )}

      </div>

    </header>
  );
}