import BalanceHistory from '@/components/BalanceHistory'
import MyChart from '@/components/Chart'
import ExpenseStatistics from '@/components/ExpenseStatistics'
import MyCards from '@/components/MyCards'
import QuickTransfer from '@/components/QuickTransfer'
import RecentTransaction from '@/components/RecentTransaction'

export default function DashboardPage() {
  return (
    <main id="overview" className="flex flex-col gap-6">
      <div className=" flex flex-col gap-5 pt-5 lg:flex-row lg:gap-0">
        <section id="my-cards" className="overflow-auto  lg:w-2/3">
          <div className="flex-between mb-3 px-6 pr-6">
            <p className="text-base font-semibold text-purple">My Cards</p>
            <p className="text-sm font-semibold text-purple">See All</p>
          </div>
          <MyCards />
        </section>
        <section id="recent-transaction" className="lg:w-1/3">
          <RecentTransaction />
        </section>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
        <section id="my-chart" className="flex flex-col gap-4 px-6 lg:w-2/3 lg:pr-0">
          <p className="text-base font-semibold">Weekly Activity</p>
          <MyChart />
        </section>
        <section id="expense-statistics" className="px-6 lg:w-1/3">
          <p className=" mb-4 text-base font-semibold">Weekly Activity</p>
          <ExpenseStatistics />
        </section>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-0">
        <section
          id="quick-transfer"
          className="flex flex-col gap-4 px-6 lg:w-[40%] lg:pr-0 xl:w-1/3"
        >
          <p className="text-base font-semibold">Quick Transfer</p>
          <QuickTransfer />
        </section>
        <section id="balance-history" className="px-6 lg:w-[60%] xl:w-2/3">
          <p className=" mb-4 text-base font-semibold">Balance History</p>
          <BalanceHistory />
        </section>
      </div>
    </main>
  )
}
