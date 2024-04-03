'use client'
import { LIST_TRANSACTION } from '@/constants'
import { TransactionType } from '@/types/transaction.type'
import Image from 'next/image'
import { useState } from 'react'
import Divider from './common/Divider'

const RecentTransactionList = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  console.log('🚀 ~ RecentTransactionList ~ currentPage:', currentPage)
  const LIST_TAB = [
    {
      id: 0,
      label: 'All Transactions',
    },
    {
      id: 1,
      label: 'Income',
    },
    {
      id: 2,
      label: 'Expense',
    },
  ]
  const itemPerPage = 5

  const maxPage = Math.ceil(LIST_TRANSACTION.length / 5)
  console.log('🚀 ~ RecentTransactionList ~ maxPage:', maxPage)

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex items-center justify-between gap-6 md:justify-start">
        {LIST_TAB.map((item) => (
          <div className="relative p-2" key={item.id} onClick={() => setCurrentTab(item.id)}>
            <div
              className={`absolute bottom-0 left-0 w-full  ${currentTab === item.id ? 'h-[0.125rem]' : 'h-0'} rounded-tl-md rounded-tr-md bg-blue transition-all duration-200 ease-in-out`}
            ></div>
            <p
              className={`text-sm font-medium ${currentTab === item.id ? 'text-blue' : 'text-light_blue'} transition-all duration-150 ease-in-out`}
            >
              {item.label}
            </p>
          </div>
        ))}
        <div className="absolute bottom-0 h-[0.06rem] w-full bg-[#EBEEF2]"></div>
      </div>
      <div className="min-h-72 rounded-2xl bg-white p-5">
        <div className="hidden grid-cols-3 items-center justify-center lg:grid lg:grid-cols-12 lg:gap-1 xl:justify-start">
          <div className="col-span-2 flex items-center gap-3 lg:col-span-3">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Description
            </p>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Transaction ID
            </p>
          </div>
          <div className="hidden lg:col-span-1 lg:block">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Type
            </p>
          </div>
          <div className="hidden lg:col-span-1 lg:block">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Card
            </p>
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Date
            </p>
          </div>
          <div className="col-span-1 w-full place-content-center lg:col-span-1 ">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Amount
            </p>
          </div>
          <div className="lg:flex-center hidden lg:col-span-2 xl:flex xl:justify-start">
            <p className="text-center font-medium text-light_blue lg:text-xs xl:text-start xl:text-base">
              Receipt
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Divider />
        </div>
        <div>
          {LIST_TRANSACTION.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage).map(
            (item: TransactionType, index: number) => (
              <div key={item.id}>
                <TransactionItem data={item} />
                {index < itemPerPage - 1 && <Divider />}
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-4">
        <div
          className="flex-center gap-2"
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
        >
          <Image src={'/icons/ic_arrow_left.svg'} width={10} height={5} alt="arrow left"></Image>
          <p className="text-xs font-medium text-blue">Previous</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: maxPage }).map((_, index) => (
            <div
              className={`rounded-lg ${currentPage === index + 1 ? 'bg-blue' : 'bg-[#F5F7FA]'} px-3 py-2 transition-all duration-75 ease-in`}
              onClick={() => setCurrentPage(index + 1)}
            >
              <p
                className={`text-xs font-medium transition-all duration-150 ease-in ${currentPage === index + 1 ? 'text-white' : 'text-blue'}`}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
        <div
          className="flex-center gap-2"
          onClick={() => setCurrentPage(currentPage === maxPage ? maxPage : currentPage + 1)}
        >
          <p className="text-xs font-medium text-blue">Next</p>
          <Image src={'/icons/ic_arrow_right.svg'} width={10} height={5} alt="arrow right"></Image>
        </div>
      </div>
    </div>
  )
}

type TransactionItemProps = {
  data: TransactionType
}

const TransactionItem = ({ data }: TransactionItemProps) => {
  // format money
  let formattedValue = data.amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  formattedValue = formattedValue.replace('.00', '')
  return (
    <div className="grid grid-cols-3 items-center justify-start lg:grid-cols-12 lg:gap-1">
      <div className="col-span-2 flex items-center gap-3 lg:col-span-3">
        <div className="rounded-ful relative h-9 w-9 lg:h-5 lg:w-5 xl:h-8 xl:w-8">
          <Image
            src={data.type === 'send' ? '/icons/ic_arrow_up.svg' : '/icons/ic_arrow_down.svg'}
            fill
            alt="arrow up"
          ></Image>
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="text-sm font-medium text-black lg:text-xs xl:text-base">{data.title}</p>
          <p className="text-xs text-light_blue lg:hidden">{data.date}</p>
        </div>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <p className="text-center text-sm font-medium text-black lg:text-xs xl:text-start xl:text-base">
          {data.transaction_id}
        </p>
      </div>
      <div className="hidden lg:col-span-1 lg:block">
        <p className="text-center text-sm font-medium text-black lg:text-xs xl:text-start xl:text-base">
          {data.transaction_type}
        </p>
      </div>
      <div className="hidden lg:col-span-1 lg:block">
        <p className="text-center text-sm font-medium text-black lg:text-xs xl:text-start xl:text-base">
          {data.card_number}
        </p>
      </div>
      <div className="hidden lg:col-span-2 lg:block">
        <p className="text-center text-sm font-medium text-black lg:text-xs xl:text-start xl:text-base">
          {data.date}
        </p>
      </div>
      <div className="col-span-1 w-full place-content-center lg:col-span-1 ">
        <p
          className={`text-end text-sm font-medium lg:text-xs ${data.type === 'send' ? 'text-coral' : 'text-turquoise'} xl:text-start xl:text-base`}
        >
          {data.type === 'send' ? '-' : '+'}
          {formattedValue}
        </p>
      </div>
      <div className="lg:flex-center hidden lg:col-span-2 lg:w-full xl:justify-start ">
        <div className="flex-center h-7 cursor-pointer rounded-3xl border border-[#123288] px-3 py-1 hover:border-blue  ">
          <p className="text-xs text-[#123288] hover:text-blue xl:text-base">Download</p>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactionList
