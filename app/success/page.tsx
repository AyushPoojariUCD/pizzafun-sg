"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {

  const params = useSearchParams();
  const router = useRouter();

  const clearCart = useCartStore((s) => s.clearCart);

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  useEffect(() => {

    const session_id = params.get("session_id");

    // If user manually visits page → redirect
    if (!session_id) {
      router.replace("/orders");
      return;
    }

    const verifyPayment = async () => {

      try {

        const res = await fetch("/api/verify-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ session_id }),
        });

        const data = await res.json();

        if (data.valid) {

          clearCart();
          setVerified(true);

        } else {

          router.replace("/orders");

        }

      } catch {

        router.replace("/orders");

      } finally {

        setLoading(false);

      }

    };

    verifyPayment();

  }, [params, router, clearCart]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Verifying payment...
      </div>
    );
  }

  if (!verified) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">

      <CheckCircle
        size={80}
        className="text-green-500 mb-6"
      />

      <h1 className="text-4xl font-bold mb-4 text-center">
        Payment Successful 🎉
      </h1>

      <p className="text-gray-400 mb-8 text-center">
        Your order has been placed successfully.
      </p>

      <div className="flex gap-4">

        <Link href="/">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500 transition">
            Back to Home
          </button>
        </Link>

        <Link href="/menu">
          <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition">
            Order More
          </button>
        </Link>

      </div>

    </div>
  );
}