'use client';
import { Home, List, BarChart2, Target, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/', icon: <Home /> },
  { name: 'Transactions', href: '/transactions', icon: <List /> },
  { name: 'Analytics', href: '/analytics', icon: <BarChart2 /> },
  { name: 'Budgets', href: '/budgets', icon: <Target /> },
  { name: 'Insights', href: '/insights', icon: <Lightbulb /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-white/90 shadow-lg rounded-tr-3xl p-6 flex flex-col gap-8 min-h-screen">
      <div className="text-2xl font-bold flex items-center gap-2 mb-8">
        <span role="img" aria-label="money">💰</span> Personal Finance
      </div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-lg font-medium hover:bg-blue-100/80 ${pathname === item.href ? 'bg-blue-200 text-blue-800' : 'text-gray-700'}`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 