import ChartOfMyExpense from '@/components/ChartOfMyExpense'
import MyCards from '@/components/MyCards'
import RecentTransactionList from '@/components/RecentTransactionList'
import React from 'react'

const TransactionsPage = () => {
  return (
    <main id="transaction" className="flex flex-col gap-6">
      <div className=" flex flex-col gap-5 pt-5 lg:flex-row lg:gap-0">
        <section id="my-cards" className="overflow-auto  lg:w-2/3">
          <div className="flex-between mb-3 px-6 pr-6">
            <p className="text-base font-semibold text-purple">My Cards</p>
            <p className="text-sm font-semibold text-purple">+ Add Card</p>
          </div>
          <MyCards />
        </section>
        <section id="my-expense" className="flex flex-col gap-3 px-6 lg:w-1/3">
          <div>
            <p className="text-base font-semibold">My Expense</p>
          </div>
          <ChartOfMyExpense />
        </section>
      </div>
      <section id="recent-transactions" className="flex flex-col gap-3 px-6 ">
        <div>
          <p className="text-base font-semibold">Recent Transactions</p>
        </div>
        <RecentTransactionList />
      </section>
    </main>
  )
}

export default TransactionsPage
