import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string);
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(req: Request) {
  const { body, method } = req;
  const products = body?.products;

  if (method === "POST") {
    try {
      const date = new Date().toISOString();

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              // product:body.product,
              tax_behavior: "inclusive",
              currency: "usd",
              product_data: {
                name: "INV-" + date,
                //   description:'',
                metadata: {},
              },
              unit_amount: body?.amount * 100 || 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        cancel_url: `${host}`,
        success_url: `${host}/confirmation/success`,
      });
      return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "Error checkout session" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}
