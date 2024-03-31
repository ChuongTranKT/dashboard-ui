'use client'
import React from 'react'
import ColumnChart from './common/ColumnChart'

const MyChart: React.FC = () => {
  const data = [
    ['Year', 'Deposit', 'Withdraw'],
    ['Sat', 480, 270],
    ['Sun', 350, 110],
    ['Mon', 340, 270],
    ['Tue', 490, 380],
    ['Wed', 160, 230],
    ['Thu', 410, 250],
    ['Fri', 400, 330],
  ]

  return (
    <div className="bg-white h-64 max-w-80 rounded-2xl px-6 pb-12 pt-6 md:max-w-96 lg:max-w-4xl xl:px-8 ">
      <div className="flex-center  justify-end gap-8">
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
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">500</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">400</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">300</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">300</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">100</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
          <div className="relative flex items-end justify-start gap-3">
            <span className="text-xs font-normal text-light_blue">0</span>
            <div className="mb-[3px] h-px w-full bg-[#F3F3F5]"></div>
          </div>
        </div>
        <div className=" absolute bottom-[-20px] left-3 ml-6 mt-2 w-full xl:left-8 ">
          <div className="flex items-end justify-start gap-3 md:gap-5 lg:gap-8 xl:gap-12">
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-40"
                second_height="h-20"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Sat</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-36"
                second_height="h-10"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Sun</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-32"
                second_height="h-20"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Mon</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-36"
                second_height="h-28"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Tue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-40"
                second_height="h-20"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Wed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-24"
                second_height="h-10"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Thu</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColumnChart
                first_height="h-24"
                second_height="h-10"
                first_bg_color="bg-blue"
                second_bg_color="bg-turquoise"
              />
              <span className="text-xs font-normal text-light_blue">Fri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyChart
