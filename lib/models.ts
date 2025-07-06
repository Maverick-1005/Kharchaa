import mongoose, { Schema, model, models } from 'mongoose';

const TransactionSchema = new Schema({
  userId:     { type: String, required: true },
  amount: Number,
  date: Date,
  description: String,
  category: String
});

const CategorySchema = new Schema({
  userId:     { type: String, required: true },
  name: String,
  color: String
});

const BudgetSchema = new Schema({
  userId:     { type: String, required: true },
  month: String,
  category: String,
  limit: Number
});

export const Transaction = models.Transaction || model('Transaction', TransactionSchema);
export const Category    = models.Category    || model('Category', CategorySchema);
export const Budget      = models.Budget      || model('Budget', BudgetSchema);
