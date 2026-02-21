import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!,
  {
    apiVersion: "2025-02-24.acacia",
  }
);

const webhookSecret =
  process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {

  try {

    const body = await req.text();

    // ✅ Next.js 15 fix
    const headersList = await headers();

    const signature =
      headersList.get("stripe-signature");

    if (!signature) {

      return NextResponse.json(
        { error: "Missing signature" },
        { status: 400 }
      );

    }

    let event: Stripe.Event;

    try {

      event =
        stripe.webhooks.constructEvent(
          body,
          signature,
          webhookSecret
        );

    }
    catch (err) {

      console.error(
        "Webhook signature verification failed",
        err
      );

      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );

    }


    /*
      PAYMENT SUCCESS
    */
    if (
      event.type ===
      "checkout.session.completed"
    ) {

      const session =
        event.data.object as Stripe.Checkout.Session;


      /*
        Prevent duplicate order
      */
      const existingOrder =
        await prisma.order.findUnique({

          where: {
            stripeSessionId: session.id,
          },

        });

      if (existingOrder) {

        console.log(
          "Order already exists:",
          session.id
        );

        return NextResponse.json({
          received: true,
        });

      }


      /*
        Get full session with line items
      */
      const fullSession =
        await stripe.checkout.sessions.retrieve(
          session.id,
          {
            expand: ["line_items"],
          }
        );

      const lineItems =
        fullSession.line_items?.data || [];


      /*
        Save order in database
      */
      await prisma.order.create({

        data: {

          stripeSessionId:
            session.id,

          stripePaymentIntentId:
            session.payment_intent as string,

          amount:
            session.amount_total || 0,

          currency:
            session.currency || "sgd",

          status:
            session.payment_status,

          customerEmail:
            session.customer_details?.email || null,

          items: {

            create:
              lineItems.map(
                (item) => ({

                  name:
                    item.description ||
                    "Unknown",

                  code:
                    item.price?.id ||
                    "unknown",

                  price:
                    item.amount_total || 0,

                  quantity:
                    item.quantity || 1,

                })
              ),

          },

        },

      });


      console.log(
        "Order saved successfully:",
        session.id
      );

    }


    /*
      PAYMENT FAILED / EXPIRED
    */
    if (
      event.type ===
      "checkout.session.expired"
    ) {

      const session =
        event.data.object as Stripe.Checkout.Session;

      console.log(
        "Session expired:",
        session.id
      );

    }


    return NextResponse.json({
      received: true,
    });

  }
  catch (error) {

    console.error(
      "Webhook fatal error:",
      error
    );

    return NextResponse.json(
      { error: "Webhook error" },
      { status: 500 }
    );

  }

}