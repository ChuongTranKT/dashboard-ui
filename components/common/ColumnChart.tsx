'use client'
import { useState } from 'react'

// Desc: ColumnChart component for displaying data in column chart format
type ColumnChartType = {
  data: any
  factor: number
  first_bg_color: string
  second_bg_color: string
}

const ColumnChart = ({ data, factor, first_bg_color, second_bg_color }: ColumnChartType) => {
  const [isHover, setIsHover] = useState(false)
  const first_height = data[1] * factor
  const second_height = data[2] * factor

  return (
    <div
      className="flex cursor-pointer  items-end justify-start gap-1 lg:gap-2"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        style={{ height: `${first_height}px` }}
        className={`relative max-h-44 w-1.5 rounded-2xl  md:w-2.5 xl:w-3.5 ${first_bg_color}`}
      >
        {isHover && (
          <p className={`absolute right-[-4px] top-[-15px] text-[10px] text-blue`}>{data[1]}</p>
        )}
      </div>
      <div
        style={{ height: `${second_height}px` }}
        className={`relative max-h-44 w-1.5 rounded-2xl ${second_bg_color} opacity-70 md:w-2.5 xl:w-3.5`}
      >
        {isHover && (
          <p
            className={`absolute right-[-10px] top-[-15px] text-[10px] text-turquoise lg:right-[-4px]`}
          >
            {data[2]}
          </p>
        )}
      </div>
    </div>
  )
}

export default ColumnChart
