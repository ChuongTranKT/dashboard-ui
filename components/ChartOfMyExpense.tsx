'use client'
import React, { useState } from 'react'

const ChartOfMyExpense = () => {
  const data = [
    { month: 'Aug', value: 12500 },
    { month: 'May', value: 10000 },
    { month: 'Jun', value: 15000 },
    { month: 'Jul', value: 20000 },
    { month: 'Aug', value: 12500 },
    { month: 'Sep', value: 12000 },
  ]

  const maxHeight = 130 // Độ cao tối đa của một cột
  const maxVal = Math.max(...data.map((item) => item.value)) // Giá trị lớn nhất trong mảng
  const factor = maxHeight / maxVal // Hệ số để tính độ cao của mỗi cột
  return (
    <div className="h-52 w-full rounded-2xl bg-white p-5 lg:h-48 xl:h-56">
      <div className="flex-center h-full items-end gap-4 lg:gap-3 xl:gap-4">
        {data.map((item, index) => (
          <Column data={item} factor={factor} key={index} />
        ))}
      </div>
    </div>
  )
}

const Column = ({ data, factor }: any) => {
  const [isHoverColumn, setSsHoverColumn] = useState(false)
  const height = data.value * factor // Tính độ cao của cột dựa trên giá trị và hệ số

  // format money
  let formattedValue = data.value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  formattedValue = formattedValue.replace('.00', '')
  return (
    <div
      className="relative flex flex-col items-center justify-end gap-2"
      onMouseEnter={() => setSsHoverColumn(true)}
      onMouseLeave={() => setSsHoverColumn(false)}
    >
      <p
        className={`${isHoverColumn ? 'block' : 'hidden'} absolute top-[-17px] text-xs font-medium `}
      >
        {formattedValue}
      </p>
      <div
        style={{ height: `${height}px` }} // Sử dụng độ cao đã tính
        className={`w-9 rounded-md lg:w-5 xl:w-9 ${isHoverColumn ? 'bg-turquoise opacity-50' : 'bg-[#EDF0F7]'} transition-all duration-200 ease-in-out`}
      ></div>
      <p className="text-xs text-light_blue">{data.month}</p>
    </div>
  )
}

export default ChartOfMyExpense
