import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/db';
import { Transaction } from '@/lib/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB(process.env.MONGODB_URI!);
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing id' });
  }

  if (req.method === 'PUT') {
    try {
      const update = req.body;
      const transaction = await Transaction.findByIdAndUpdate(id, update, { new: true });
      if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
      return res.status(200).json(transaction);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to update transaction' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const transaction = await Transaction.findByIdAndDelete(id);
      if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to delete transaction' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 