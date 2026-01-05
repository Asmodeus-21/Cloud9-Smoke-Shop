import Stripe from 'stripe';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const sig = req.headers['stripe-signature'] as string;

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      // Retrieve full session details including line items
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items'],
      });

      const lineItems = fullSession.line_items?.data || [];

      // Save order to database
      const { error } = await supabase.from('orders').insert({
        stripe_session_id: session.id,
        customer_email: session.customer_email,
        customer_name: session.customer_details?.name,
        amount_total: session.amount_total,
        amount_subtotal: session.amount_subtotal,
        status: 'completed',
        items: lineItems,
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Failed to save order' });
      }

      // TODO: Send confirmation email here using SendGrid
      console.log(`Order confirmed for ${session.customer_email}`);
    }

    // Handle payment_intent.payment_failed event
    if (event.type === 'charge.dispute.created') {
      const dispute = event.data.object as Stripe.Dispute;
      console.log(`Dispute created for charge ${dispute.charge}`);
      // TODO: Handle dispute logic
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: 'Webhook verification failed' });
  }
}
