import { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // GET /api/orders/:sessionId - Fetch order by session ID
  if (req.method === 'GET') {
    const { sessionId } = req.query;

    if (!sessionId) {
      return res.status(400).json({ error: 'sessionId required' });
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .single();

      if (error) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch order' });
    }
  }

  // POST /api/orders - Create order record (called after payment)
  if (req.method === 'POST') {
    const { sessionId, email, name, items } = req.body;

    if (!sessionId || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const { data, error } = await supabase.from('orders').insert({
        stripe_session_id: sessionId,
        customer_email: email,
        customer_name: name,
        items,
        status: 'pending',
        created_at: new Date().toISOString(),
      });

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
