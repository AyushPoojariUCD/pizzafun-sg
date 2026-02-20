"use client";

import Image from "next/image";

const categories = [
  {
    title: "WRAPS",
    subtitle: "ROLLIN’ WITH FLAVOUR",
    desc: "Veg & Non-Veg wraps",
    image: "/images/categories/wraps.png",
    bg: "bg-[#e9ded5]",
  },
  {
    title: "QUICK BITES",
    subtitle: "GRAB & GOBBLE",
    desc: "Fries, Garlic Bread, Chicken wings, Chicken Popcorn etc",
    image: "/images/categories/grab-gobble.png",
    bg: "bg-[#e5e4d6]",
  },
  {
    title: "SANDWICH",
    subtitle: "STUFF’D & STACK",
    desc: "Veg & Non-Veg Sandwiches",
    image: "/images/categories/sandwich.png",
    bg: "bg-[#e9ded5]",
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full py-20 bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {categories.map((cat, index) => (
            <div
              key={index}
              className={`
                relative 
                overflow-hidden 
                rounded-2xl 
                ${cat.bg} 
                group 
                cursor-pointer
                min-h-[340px]
                flex
                items-center
                p-10
                transition
                hover:shadow-2xl
              `}
            >

              {/* TEXT */}
              <div className="relative z-10 max-w-[60%]">

                <h3 className="text-4xl font-extrabold text-red-600">
                  {cat.title}
                </h3>

                <p className="text-xl font-bold text-red-500 mt-1">
                  {cat.subtitle}
                </p>

                <p className="text-gray-700 mt-4 text-lg">
                  {cat.desc}
                </p>

              </div>

              {/* CIRCLE IMAGE */}
              <div className="
                absolute
                right-[-100px]
                top-1/2
                -translate-y-1/2
                w-[340px]
                h-[340px]
                rounded-full
                overflow-hidden
              ">

                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
