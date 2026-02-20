"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function OrdersPage() {

  const {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    getTotal,
  } = useCartStore();

  const total = getTotal();

  return (
    <>
      <Header />

      <div className="min-h-screen bg-black text-white px-6 py-20">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-10">
            Your Cart
          </h1>

          {items.length === 0 && (
            <p className="text-gray-400">
              Your cart is empty
            </p>
          )}

          <div className="space-y-6">

            {items.map((item) => (

              <div
                key={item.code}
                className="flex justify-between items-center border-b border-gray-700 pb-4"
              >

                {/* LEFT */}
                <div className="flex items-center gap-4">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="bg-white rounded-lg"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-orange-400">
                      {item.price}
                    </p>
                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                  <button
                    onClick={() => decreaseQty(item.code)}
                    className="bg-gray-700 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.code)}
                    className="bg-gray-700 px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(item.code)}
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* TOTAL */}
          {items.length > 0 && (
            <>
              <div className="mt-10 text-2xl font-bold">
                Total: ${total.toFixed(2)}
              </div>

              <div className="flex gap-4 mt-6">

                <button
                  onClick={clearCart}
                  className="bg-gray-700 px-6 py-3 rounded"
                >
                  Clear Cart
                </button>

                <button
  onClick={async () => {

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });

    const data = await res.json();

    window.location.href = data.url;

  }}
  className="bg-green-600 px-6 py-3 rounded hover:bg-green-700"
>
  Checkout
</button>

              </div>
            </>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}