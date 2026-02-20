"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

export default function PaymentFailedPage() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">

      <XCircle
        size={80}
        className="text-red-500 mb-6"
      />

      <h1 className="text-4xl font-bold text-red-500 mb-4 text-center">
        Payment Failed
      </h1>

      <p className="text-gray-400 mb-8 text-center">
        Your payment was not completed or was cancelled.
      </p>

      <div className="flex gap-4">

        <Link href="/orders">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-500 transition">
            Try Again
          </button>
        </Link>

        <Link href="/menu">
          <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-600 transition">
            Back to Menu
          </button>
        </Link>

      </div>

    </div>
  );
}