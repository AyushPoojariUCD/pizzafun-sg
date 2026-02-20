"use client";

import { MapPin, Navigation } from "lucide-react";

export default function StoreLocator() {
  const address =
    "151 Lorong Chuan, #01-21 New Tech Park, Singapore 556741";

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section className="w-full">

      {/* HERO */}
      <div className="bg-[#263142] text-white rounded-b-[80px] py-20 px-6 text-center">

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find PizzaFun stores near you
        </h1>

        <p className="text-lg text-green-100 mb-8">
          Visit our Singapore outlet
        </p>

        {/* Address Card */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          <div className="bg-white text-black px-6 py-4 rounded-full flex items-center gap-3 shadow-lg">

            <MapPin className="text-green-700" />

            <span className="font-semibold">
              {address}
            </span>

          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              address
            )}`}
            target="_blank"
            className="bg-yellow-400 text-black px-6 py-4 rounded-full font-semibold hover:bg-yellow-500 transition flex items-center gap-2"
          >
            <Navigation size={18} />
            Open in Maps
          </a>

        </div>

      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">

          <iframe
            src={mapSrc}
            width="100%"
            height="500"
            loading="lazy"
            className="w-full"
          />

        </div>

      </div>

    </section>
  );
}