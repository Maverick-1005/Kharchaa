import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, Briefcase, Zap } from "lucide-react";

const transactions = [
  {
    icon: <ShoppingCart className="text-pink-400" />, title: "Grocery Shopping", category: "Food & Dining", date: "Today", amount: "-$85.50", type: "expense"
  },
  {
    icon: <Briefcase className="text-green-400" />, title: "Salary Deposit", category: "Income", date: "Yesterday", amount: "+$2,600", type: "income"
  },
  {
    icon: <Zap className="text-blue-400" />, title: "Electricity Bill", category: "Utilities", date: "2 days ago", amount: "-$120.00", type: "expense"
  },
];

export default function TransactionList() {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold">Recent Transactions</div>
          <div className="flex gap-2">
            <Button variant="default" className="bg-green-500 hover:bg-green-600">Cash In</Button>
            <Button variant="default" className="bg-red-500 hover:bg-red-600">Cash Out</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {transactions.map((tx, i) => (
            <div
              key={tx.title}
              className="flex items-center gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100">
                {tx.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg text-gray-800">{tx.title}</div>
                <div className="text-sm text-gray-500">{tx.category} • {tx.date}</div>
              </div>
              <div className={`text-lg font-bold ${tx.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{tx.amount}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/transactions">
            <Button variant="outline" className="px-6">View More</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
} 