"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {

  const {
    items,
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
    getTotal,
  } = useCartStore();

  const total = getTotal();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white text-black z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">

          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={20} />
            Your Cart
          </h2>

          <button onClick={closeCart}>
            <X />
          </button>

        </div>


        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">

          {items.length === 0 && (
            <div className="text-center mt-20 text-gray-500">
              Cart is empty
            </div>
          )}

          {items.map((item) => (

            <div
              key={item.code}
              className="flex gap-4 mb-5 border-b pb-4"
            >

              {/* Image */}
              <Image
                src={item.image}
                width={70}
                height={70}
                alt={item.name}
                className="rounded-lg border"
              />

              {/* Info */}
              <div className="flex-1">

                <p className="font-semibold">
                  {item.name}
                </p>

                <p className="text-orange-500 font-semibold">
                  {item.price}
                </p>

                {/* Qty Controls */}
                <div className="flex items-center gap-2 mt-2">

                  <button
                    onClick={() => decreaseQty(item.code)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.code)}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>

                </div>

              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.code)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={18} />
              </button>

            </div>

          ))}

        </div>


        {/* Footer */}
        {items.length > 0 && (

          <div className="border-t p-5">

            {/* Total */}
            <div className="flex justify-between mb-4 text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Orders Button */}
            <Link href="/orders" onClick={closeCart}>

              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition">
                Go to Checkout
              </button>

            </Link>

          </div>

        )}

      </div>
    </>
  );
}