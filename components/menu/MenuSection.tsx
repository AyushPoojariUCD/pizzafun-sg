"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function MenuSection({ category, filters }) {

  const addItem = useCartStore(
    (state) => state.addItem
  );

  if (!category) return null;

  const filteredItems =
    category.items?.filter((item) => {

      if (
        !filters?.veg &&
        !filters?.nonveg &&
        !filters?.spicy
      )
        return true;

      if (
        filters.veg &&
        item.type === "veg"
      )
        return true;

      if (
        filters.nonveg &&
        item.type === "nonveg"
      )
        return true;

      if (
        filters.spicy &&
        item.spicy
      )
        return true;

      return false;
    });

  if (!filteredItems?.length)
    return null;

  return (
    <section
      id={category.id}
      className="mb-20"
    >

      <h2 className="text-orange-500 text-3xl font-bold mb-8 border-b border-orange-500 pb-2">
        {category.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {filteredItems.map((item) => (

          <div
            key={item.code}
            className="flex items-center justify-between border-b border-gray-600 pb-6"
          >

            {/* LEFT */}
            <div className="flex-1 pr-4">

              <h3 className="text-white text-xl font-semibold">
                {item.code} - {item.name}
              </h3>

              <p className="text-orange-400 font-semibold">
                {item.price}
              </p>

              <p className="text-gray-400 text-sm mb-3">
                {item.desc}
              </p>

              <button
                onClick={() =>
                  addItem({
                    code: item.code,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                  })
                }
                className="
                  bg-yellow-400
                  text-black
                  px-4 py-2
                  rounded-lg
                  font-semibold
                  text-sm
                  hover:bg-yellow-500
                  transition
                "
              >
                Add to Cart
              </button>

            </div>

            {/* IMAGE */}
            <div className="w-[110px] h-[110px] bg-white rounded-xl overflow-hidden">

              <Image
                src={item.image}
                alt={item.name}
                width={110}
                height={110}
                className="object-cover w-full h-full"
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}