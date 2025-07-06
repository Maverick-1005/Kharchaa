"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const expenseCategories = ["Food", "Shopping", "Utilities", "Transport", "Health", "Entertainment", "Other"];

export default function CashOutModal({ open, onClose, onSubmit }: { open: boolean, onClose: () => void, onSubmit: (data: { amount: string, description: string, category: string }) => void }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(expenseCategories[0]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ amount, description, category });
    setAmount("");
    setDescription("");
    setCategory(expenseCategories[0]);
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Cash Out</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Amount</label>
            <Input type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} required min={0.01} step={0.01} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <Input placeholder="Enter description" value={description} onChange={e => setDescription(e.target.value)} required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select className="w-full border rounded px-3 py-2" value={category} onChange={e => setCategory(e.target.value)} required>
              {expenseCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600">Add Expense</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 