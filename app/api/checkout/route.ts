import Stripe from "stripe";
import { NextResponse } from "next/server";

import { menuCategories } from "@/data/menuData";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "http://localhost:3000";

const MAX_QTY = 10;


/*
 Secure menu lookup
*/
function findMenuItem(code: string) {

  for (const category of menuCategories) {

    const item = category.items.find(
      i => i.code === code
    );

    if (item) return item;

  }

  return null;

}


export async function POST(req: Request) {

  try {

    const body = await req.json();

    if (!body.items || !Array.isArray(body.items)) {

      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );

    }

    const cartItems = body.items;

    if (cartItems.length === 0) {

      return NextResponse.json(
        { error: "Cart empty" },
        { status: 400 }
      );

    }


    const line_items:
      Stripe.Checkout.SessionCreateParams.LineItem[] = [];


    /*
      Secure line item creation
    */
    for (const cartItem of cartItems) {

      /*
        Validate structure
      */
      if (
        !cartItem.code ||
        typeof cartItem.quantity !== "number"
      ) {

        return NextResponse.json(
          { error: "Invalid cart item" },
          { status: 400 }
        );

      }

      /*
        Validate quantity limits
      */
      if (
        cartItem.quantity <= 0 ||
        cartItem.quantity > MAX_QTY
      ) {

        return NextResponse.json(
          { error: "Invalid quantity" },
          { status: 400 }
        );

      }


      /*
        Secure server lookup
      */
      const menuItem =
        findMenuItem(cartItem.code);

      if (!menuItem) {

        return NextResponse.json(
          { error: "Invalid product" },
          { status: 400 }
        );

      }


      /*
        Secure server price
      */
      const price =
        parseFloat(
          menuItem.price
            .replace("$", "")
            .split("/")[0]
        ) || 0;


      if (price <= 0) {

        return NextResponse.json(
          { error: "Invalid price" },
          { status: 400 }
        );

      }


      line_items.push({

        price_data: {

          currency: "sgd",

          product_data: {

            name: menuItem.name,

            images: [
              `${BASE_URL}${menuItem.image}`
            ],

          },

          unit_amount:
            Math.round(price * 100),

        },

        quantity: cartItem.quantity,

      });

    }


    /*
      Create Stripe session
    */
    const session =
      await stripe.checkout.sessions.create({

        payment_method_types: ["card"],

        mode: "payment",

        line_items,

        success_url:
          `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

        cancel_url:
          `${BASE_URL}/failure`,

        /*
          Critical for webhook & order tracking
        */
        metadata: {

          source: "pizzafun",

          timestamp:
            new Date().toISOString(),

        },

      });


    return NextResponse.json({
      url: session.url,
    });


  }
  catch (error) {

    console.error(
      "Stripe Checkout Error:",
      error
    );

    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );

  }

}