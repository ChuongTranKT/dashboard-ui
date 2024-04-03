'use client'
import React from 'react'
import ColumnChart from './common/ColumnChart'

const MyChart: React.FC = () => {
  const data = [
    ['Sat', 480, 270],
    ['Sun', 350, 110],
    ['Mon', 340, 270],
    ['Tue', 490, 380],
    ['Wed', 160, 630],
    ['Thu', 610, 250],
    ['Fri', 400, 330],
  ]

  const maxHeight = 180 // Độ cao tối đa của một cột
  const maxVal = Math.max(...data.map((item: any) => Math.max(item[1], item[2]))) // Giá trị lớn nhất trong mảng
  const factor = maxHeight / maxVal // Hệ số để tính độ cao của mỗi cột
  const columnHeights = data.map((item: any) => [
    item[0],
    (item[1] / maxVal) * maxHeight,
    (item[2] / maxVal) * maxHeight,
  ])
  // Làm tròn giá trị lớn nhất lên đến số gần nhất chia hết cho 100
  const roundedMaxVal = Math.ceil(maxVal / 100) * 100

  // Tính bước nhảy giữa các giá trị
  const step = Math.ceil(roundedMaxVal / 6)

  // Tạo mảng mới chứa các giá trị từ 0 đến giá trị lớn nhất, với bước nhảy tìm được
  const columnValue = Array.from({ length: 6 }, (_, i) => i * step)

  return (
    <div className="h-64 max-w-80 rounded-2xl bg-white px-6 pb-16 pt-6 md:max-w-96 lg:max-w-4xl xl:px-8 ">
      <div className="flex-center  mb-3 justify-end gap-8">
        <div className="flex-center gap-2">
          <div className="h-3 w-3 rounded-full bg-turquoise opacity-70"></div>
          <p className="text-xs font-normal text-light_blue">Diposit</p>
        </div>
        <div className="flex-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue"></div>
          <p className="text-xs font-normal text-light_blue">Withdraw</p>
        </div>
      </div>
      <div className="relative h-full">
        <div className="flex h-full flex-col justify-between">
          {columnValue.reverse().map((item: number, index: number) => (
            <div className="relative flex items-end justify-start gap-3" key={index}>
              <span className="text-xs font-normal text-light_blue">{item}</span>
              <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
            </div>
          ))}
        </div>
        <div className=" absolute bottom-[-20px] left-3 ml-6 mt-2 w-full xl:left-8 ">
          <div className="flex items-end justify-start gap-3 md:gap-5 lg:gap-8 xl:gap-12">
            {data.map((item: any, index: number) => (
              <div className="flex flex-col items-center gap-2" key={index}>
                <ColumnChart
                  data={item}
                  factor={factor}
                  first_bg_color="bg-blue"
                  second_bg_color="bg-turquoise"
                />
                <span className="text-xs font-normal text-light_blue">{item[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyChart
