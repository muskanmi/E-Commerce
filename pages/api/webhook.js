import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret = "whsec_3f6f54f4722e50e072e8fc67883c0cc04790012144cc09a64d9df5193dee0649";


export default async function handler(req, res) {
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
    //   console.log(data);
    if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
            paid:true,
        })
    }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  } 

  res.status(200).send('ok');
}

export const config = {
    api: {bodyParser:false,}
}

// nimble-adroit-gem-brainy
// acct_1N4iMXSDbX1dEbyx
