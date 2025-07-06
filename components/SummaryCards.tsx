import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Total Balance",
    value: "$12,450",
    change: "+2.5% from last month",
    color: "text-green-500",
    bg: "bg-gradient-to-r from-green-100 to-green-50",
  },
  {
    title: "Monthly Expenses",
    value: "$3,280",
    change: "+8.2% from last month",
    color: "text-red-500",
    bg: "bg-gradient-to-r from-red-100 to-red-50",
  },
  {
    title: "Monthly Income",
    value: "$5,200",
    change: "+1.2% from last month",
    color: "text-blue-500",
    bg: "bg-gradient-to-r from-blue-100 to-blue-50",
  },
  {
    title: "Savings Rate",
    value: "37%",
    change: "+3.1% from last month",
    color: "text-yellow-500",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-50",
  },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`opacity-0 animate-fade-in-up`} 
          style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
        >
          <Card className={`shadow-lg ${card.bg}`}>
            <CardContent className="p-6 flex flex-col items-start">
              <div className="font-semibold text-lg mb-2 text-gray-700">{card.title}</div>
              <div className={`text-4xl font-bold mb-2 ${card.color}`}>{card.value}</div>
              <div className="text-sm text-gray-500 bg-white/60 rounded px-2 py-1">{card.change}</div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

// Add the following to your globals.css or tailwind config:
// @keyframes fade-in-up {
//   0% { opacity: 0; transform: translateY(30px); }
//   100% { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in-up {
//   animation: fade-in-up 0.6s cubic-bezier(0.4,0,0.2,1) both;
// } 