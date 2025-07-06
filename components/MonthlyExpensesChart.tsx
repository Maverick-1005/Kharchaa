'use client';

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: 'Jan', expenses: 1200 },
  { month: 'Feb', expenses: 900 },
  { month: 'Mar', expenses: 1400 },
  { month: 'Apr', expenses: 1100 },
  { month: 'May', expenses: 1600 },
  { month: 'Jun', expenses: 1000 },
];

export default function MonthlyExpensesChart() {
  return (
    <Card className="shadow-lg mb-8">
      <CardContent className="p-6">
        <div className="text-xl font-bold mb-4">Monthly Expenses</div>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="expenses" fill="#f87171" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 