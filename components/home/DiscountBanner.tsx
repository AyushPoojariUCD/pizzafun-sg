"use client";

import Image from "next/image";

export default function DiscountBanner() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          className="
            relative
            bg-[#e9e7e4]
            rounded-xl
            overflow-hidden
            flex flex-col lg:flex-row
            items-center justify-between
            px-6 sm:px-10 lg:px-16
            py-8 sm:py-12 lg:py-16
          "
        >

          {/* LEFT CONTENT */}
          <div className="z-10 text-center lg:text-left">

            <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800">
              GET DISCOUNT
            </p>

            <h2 className="
              text-3xl sm:text-5xl lg:text-6xl
              font-extrabold text-red-600
              drop-shadow-lg mt-2
            ">
              15% OFF
            </h2>

            <p className="
              text-lg sm:text-2xl lg:text-3xl
              font-bold text-gray-800 mt-6 lg:mt-8
            ">
              EARN POINTS
            </p>

            <h3 className="
              text-3xl sm:text-5xl lg:text-6xl
              font-extrabold text-red-600
              drop-shadow-lg mt-2
            ">
              $1 = 1PT
            </h3>

          </div>


          {/* BACKGROUND TEXT (Desktop only) */}
          <div
            className="
              absolute
              right-10 lg:right-40
              text-[60px] sm:text-[100px] lg:text-[140px]
              font-extrabold
              text-white/40
              leading-none
              hidden sm:block
              select-none
            "
          >
            UP TO<br />10%
          </div>


          {/* RIGHT IMAGE */}
          <div
            className="
              relative z-10
              mt-8 sm:mt-10 lg:mt-0
              w-[200px] sm:w-[300px] lg:w-[420px]
              h-[200px] sm:h-[300px] lg:h-[420px]
            "
          >

            <Image
              src="/images/discount-banner.png"
              alt="Pizza"
              fill
              priority
              className="
                object-contain
                drop-shadow-2xl
                transition duration-500
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}