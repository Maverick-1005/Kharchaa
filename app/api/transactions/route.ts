import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Transaction } from '@/lib/models';

export async function GET(req: NextRequest) {
  await connectDB(process.env.MONGODB_URI!);
  const { searchParams } = new URL(req.url);
  const month = searchParams.get('month');
  const userId = searchParams.get('userId');
  let filter: any = {};
  if (userId) filter.userId = userId;
  if (month) {
    // month format: 'YYYY-MM'
    const start = new Date(`${month}-01T00:00:00.000Z`);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    filter.date = { $gte: start, $lt: end };
  }
  try {
    const transactions = await Transaction.find(filter).sort({ date: -1 });
    return NextResponse.json(transactions);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  await connectDB(process.env.MONGODB_URI!);
  const { userId, amount, date, description, category } = await req.json();
  if (!userId || !amount || !date || !category) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  try {
    const transaction = await Transaction.create({ userId, amount, date, description, category });
    return NextResponse.json(transaction, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create transaction' }, { status: 500 });
  }
} 