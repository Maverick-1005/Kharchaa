import SummaryCards from '../components/SummaryCards';
import TransactionList from '../components/TransactionList';
import MonthlyExpensesChart from '../components/MonthlyExpensesChart';

export default function Home() {
  return (
    <div>
      <SummaryCards />
      <div className="mt-8">
        <TransactionList />
      </div>
      <MonthlyExpensesChart />
    </div>
  )
}