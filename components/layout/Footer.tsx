"use client";

import Link from "next/link";
import { FaSnapchatGhost } from "react-icons/fa";
import { Phone, Mail, MapPin, Facebook, Instagram, Snapchat} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 relative">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* CONTACT SECTION */}
        <div>

          <h3 className="text-white text-lg font-semibold mb-6 border-b-2 border-red-500 inline-block pb-1">
            CONTACT
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3  hover:text-yellow-300 transition">
              <Phone className="text-yellow-400" size={18} />
              <span>+65 8184 3454</span>
            </div>

            <div className="flex items-center gap-3  hover:text-yellow-300 transition">
              <Mail className="text-yellow-400" size={18} />
              <span>orders@pizzafun.sg</span>
            </div>

            <div className="flex items-start gap-3 hover:text-yellow-300 transition">
              <MapPin className="text-yellow-400 mt-1" size={18} />
              <span>
                151 Lorong Chuan, #01-21 New Tech Park,<br />
                Singapore 556741
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-start md:items-end gap-4">

          {/* Social Icons */}
          <div className="flex gap-4">

            <Link href="#">
              <div className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition">
                <Facebook size={18} />
              </div>
            </Link>

            <Link href="#">
              <div className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition">
                <Instagram size={18} />
              </div>
            </Link>

            <Link href="https://snapchat.com">
                <div className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition">
                <FaSnapchatGhost size={18} />
                </div>
            </Link>

          </div>

          {/* Policies */}
          <div className="flex flex-col gap-2 text-sm">

            <Link href="/privacy-policy" className="hover:text-yellow-400">
              Privacy Policy
            </Link>

            <Link href="/grievance-policy" className="hover:text-yellow-400">
              Grievance Policy
            </Link>

            <Link href="/terms" className="hover:text-yellow-400">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mx-6"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400">
        Copyright © 2026 Trust and Taste Pte. Ltd. All rights reserved.
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6581843454"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </a>

    </footer>
  );
}
