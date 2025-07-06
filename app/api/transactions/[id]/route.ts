import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Transaction } from '@/lib/models';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB(process.env.MONGODB_URI!);
  const { id } = params;
  const update = await req.json();
  try {
    const transaction = await Transaction.findByIdAndUpdate(id, update, { new: true });
    if (!transaction) return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
    return NextResponse.json(transaction);
  } catch {
    return NextResponse.json({ error: 'Failed to update transaction' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB(process.env.MONGODB_URI!);
  const { id } = params;
  try {
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) return NextResponse.json({ error: 'Transaction not found' }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete transaction' }, { status: 500 });
  }
} 