"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PizzaPromoSection() {

  const container = useRef<HTMLDivElement>(null);
  const pizzaRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {

    // Intro animation
    gsap.from(pizzaRef.current, {
      opacity: 0,
      scale: 0.6,
      y: 120,
      duration: 1.4,
      ease: "expo.out",
    });

    // Scroll parallax animation
    gsap.to(pizzaRef.current, {
      y: -150,
      scale: 1.15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

  }, { scope: container });



  return (
    <section
      ref={container}
      className="w-full bg-gray-200 py-8 sm:py-12"
    >
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="
          group relative flex flex-col lg:flex-row
          rounded-xl overflow-hidden shadow-xl
          transition-all duration-500 ease-out
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01]
        ">

          {/* LEFT PANEL */}
          <div
            className="
              relative w-full lg:w-1/2 flex items-center
              px-6 sm:px-10 lg:px-12
              py-10 sm:py-14 lg:py-20
              bg-cover bg-center bg-no-repeat
            "
            style={{
              backgroundImage:
                "url('/images/promo-section/promo-left-bg.png')",
            }}
          >

            <div
              className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/promo-section/promo-left-bg.png')",
                clipPath: "polygon(0 0, 80% 0, 98% 100%, 0% 100%)",
              }}
            />

            <div className="relative z-10">

              <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-gray-800">
                DELICIOUS PIZZA
              </p>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 mt-3">
                TIKKA
              </h2>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-600">
                TEMPTATION
              </h2>

              <p className="text-xl sm:text-2xl lg:text-3xl font-bold my-2 sm:my-4">
                &
              </p>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-600">
                TANDOOR
              </h2>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-red-600">
                TREAT
              </h2>

            </div>

          </div>


          {/* RIGHT PANEL */}
          <div className="
            relative w-full lg:w-[60%]
            min-h-[260px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[520px]
            overflow-hidden
          ">

            <div
              className="hidden lg:block absolute inset-0 z-10 pointer-events-none"
              style={{
                clipPath: "polygon(15% 100%, 0 0, 100% 0, 100% 100%)",
              }}
            />

            <Image
              ref={pizzaRef}
              src="/images/promo-section/chicken-tikka.png"
              alt="Chicken Tikka Pizza"
              fill
              priority
              className="object-cover object-center will-change-transform"
            />

          </div>

        </div>

      </div>
    </section>
  );
}