"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Image from "next/image";

import { useCartStore } from "@/store/cartStore";

export default function OrdersPage() {

  const router = useRouter();

  const {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    getTotal,
  } = useCartStore();

  const total = getTotal();

  const [loading, setLoading] = useState(false);

  /*
    Redirect if cart empty
  */
  useEffect(() => {

    if (items.length === 0) {

      const timer = setTimeout(() => {
        router.push("/menu");
      }, 1500);

      return () => clearTimeout(timer);

    }

  }, [items, router]);


  /*
    Checkout handler (SECURE)
  */
  const handleCheckout = async () => {

    try {

      /*
        Frontend validation
        (Backend will validate again)
      */
      const valid = items.every(item =>
        item.code &&
        typeof item.quantity === "number" &&
        item.quantity > 0 &&
        item.quantity <= 10
      );

      if (!valid) {

        alert("Invalid cart detected.");
        return;

      }

      if (items.length === 0) return;

      setLoading(true);


      /*
        Send ONLY safe data
      */
      const safeItems = items.map(item => ({
        code: item.code,
        quantity: item.quantity
      }));


      const res = await fetch("/api/checkout", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          items: safeItems
        }),

      });


      if (!res.ok)
        throw new Error("Checkout failed");


      const data = await res.json();


      if (!data.url)
        throw new Error("Invalid Stripe session");


      /*
        Redirect to Stripe
      */
      window.location.href = data.url;


    }
    catch (error) {

      console.error("Checkout error:", error);

      alert("Checkout failed. Please try again.");

    }
    finally {

      setLoading(false);

    }

  };


  return (

    <>
      <Header />

      <div className="min-h-screen bg-black text-white px-6 py-20">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-10">
            Your Cart
          </h1>


          {/* Empty cart */}
          {items.length === 0 && (

            <p className="text-gray-400">
              Your cart is empty. Redirecting to menu...
            </p>

          )}


          {/* Cart Items */}
          <div className="space-y-6">

            {items.map((item) => {

              /*
                Safe price parsing
              */
              const price =
                typeof item.price === "string"
                  ? parseFloat(
                      item.price.replace("$", "").split("/")[0]
                    ) || 0
                  : 0;

              const subtotal = price * item.quantity;


              return (

                <div
                  key={item.code}
                  className="flex justify-between items-center border-b border-gray-700 pb-4"
                >

                  {/* Left */}
                  <div className="flex items-center gap-4">

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="bg-white rounded-lg object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-orange-400">
                        {item.price}
                      </p>

                      <p className="text-gray-400 text-sm">
                        Subtotal: ${subtotal.toFixed(2)}
                      </p>

                    </div>

                  </div>


                  {/* Right */}
                  <div className="flex items-center gap-4">


                    {/* Decrease */}
                    <button
                      onClick={() => {

                        if (item.quantity > 1)
                          decreaseQty(item.code);

                      }}
                      className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                      -
                    </button>


                    {/* Quantity */}
                    <span className="font-semibold w-6 text-center">
                      {item.quantity}
                    </span>


                    {/* Increase */}
                    <button
                      onClick={() => {

                        if (item.quantity < 10)
                          increaseQty(item.code);

                      }}
                      className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                      +
                    </button>


                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.code)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>


                  </div>

                </div>

              );

            })}

          </div>


          {/* Total */}
          {items.length > 0 && (

            <>

              <div className="mt-10 text-2xl font-bold flex justify-between">

                <span>Total:</span>

                <span className="text-yellow-400">
                  ${total.toFixed(2)}
                </span>

              </div>


              {/* Actions */}
              <div className="flex gap-4 mt-6">


                {/* Clear */}
                <button
                  onClick={clearCart}
                  disabled={loading}
                  className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600 disabled:bg-gray-500"
                >
                  Clear Cart
                </button>


                {/* Checkout */}
                <button
                  onClick={handleCheckout}
                  disabled={loading || items.length === 0}
                  className="
                    bg-green-600
                    px-6 py-3
                    rounded
                    hover:bg-green-700
                    disabled:bg-gray-500
                    disabled:cursor-not-allowed
                  "
                >
                  {loading
                    ? "Redirecting to Stripe..."
                    : "Checkout"}
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