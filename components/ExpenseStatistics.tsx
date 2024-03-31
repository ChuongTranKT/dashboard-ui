import Image from 'next/image'
import React from 'react'

const ExpenseStatistics = () => {
  return (
    <div className="bg-white flex-center relative h-64 w-full rounded-2xl  ">
      <div className="flex-center relative w-52">
        <Image
          src={'/images/img_pie_chart.svg'}
          alt="pie chart"
          width={192}
          height={192}
          // className="h-64 xl:w-64"
        ></Image>
        <div className="flex-center absolute left-[48px] top-3 z-20 flex-col">
          <p className="text-white text-sm font-semibold">30%</p>
          <p className="text-white text-[0.7rem] font-semibold">Entertainment</p>
        </div>
        <div className="flex-center absolute left-[20px] top-24 z-20 flex-col">
          <p className="text-white text-sm font-semibold">20%</p>
          <p className="text-white text-[0.7rem] font-semibold">Investment</p>
        </div>
        <div className="flex-center absolute right-[20px] top-12 z-20 flex-col">
          <p className="text-white text-sm font-semibold">15%</p>
          <p className="text-white text-[0.7rem] font-semibold">Bill Expense</p>
        </div>
        <div className="flex-center absolute right-[65px] top-28 z-20 flex-col">
          <p className="text-white text-sm font-semibold">35%</p>
          <p className="text-white text-[0.7rem] font-semibold">Other</p>
        </div>
      </div>
    </div>
  )
}

export default ExpenseStatistics
