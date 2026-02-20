import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {

  const body = await req.text();

  const signature =
    headers().get("stripe-signature");

  if (!signature) {

    return NextResponse.json(
      { error: "Missing signature" },
      { status: 400 }
    );

  }

  let event: Stripe.Event;

  try {

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

  }
  catch (err) {

    console.error(
      "Webhook signature verification failed.",
      err
    );

    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );

  }


  /*
    Handle successful payment
  */
  if (
    event.type ===
    "checkout.session.completed"
  ) {

    const session =
      event.data.object as Stripe.Checkout.Session;

    console.log(
      "Payment successful:",
      session.id
    );


    /*
      TODO: Store order in database
      Example structure:
    */

    /*
    await db.order.create({
      stripe_session_id: session.id,
      amount: session.amount_total,
      status: "paid",
      created_at: new Date(),
    });
    */


  }


  /*
    Handle payment failure
  */
  if (
    event.type ===
    "checkout.session.expired"
  ) {

    console.log(
      "Session expired:",
      event.data.object.id
    );

  }


  return NextResponse.json({
    received: true,
  });

}