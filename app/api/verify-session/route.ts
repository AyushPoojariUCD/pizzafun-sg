// app/api/verify-session/route.ts

import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {

  const { session_id } = await req.json();

  if (!session_id)
    return NextResponse.json({ valid: false });

  try {

    const session =
      await stripe.checkout.sessions.retrieve(session_id);

    return NextResponse.json({
      valid: session.payment_status === "paid",
    });

  } catch {

    return NextResponse.json({ valid: false });

  }
}