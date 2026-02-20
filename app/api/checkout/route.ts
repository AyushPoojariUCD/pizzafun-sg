import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {

  const { items } = await req.json();

  const line_items = items.map((item: any) => {

    const price = parseFloat(
      item.price.replace("$", "").split("/")[0]
    );

    return {
      price_data: {
        currency: "sgd",
        product_data: {
          name: item.name,
          images: [`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`],
        },
        unit_amount: Math.round(price * 100),
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ["card"],

    line_items,

    mode: "payment",

    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,

    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
  });

  return NextResponse.json({ url: session.url });
}