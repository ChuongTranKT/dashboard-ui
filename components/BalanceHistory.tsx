'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const BalanceHistory = () => {
  const [currentSizeBrowser, setCurrentSizeBrowser] = useState<number>()
  useEffect(() => {
    const browserWidth = window.innerWidth
    setCurrentSizeBrowser(browserWidth)
  }, [])

  return (
    <div className="relative  rounded-2xl bg-white px-5 py-3 md:max-w-96 lg:h-56 lg:max-w-3xl xl:h-72">
      <div className="relative flex">
        <div className=" flex w-[10%] flex-col items-end justify-center gap-4 lg:gap-5 xl:gap-7">
          <div className="flex items-center gap-1">
            <span className="text-xs text-light_blue">800</span>
            <span className="text-center text-light_blue">-</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-light_blue">600</span>
            <span className="text-center text-light_blue">-</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-light_blue">400</span>
            <span className="text-center text-light_blue">-</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-light_blue">200</span>
            <span className="text-center text-light_blue">-</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-light_blue">0</span>
            <span className="text-center text-light_blue">-</span>
          </div>
        </div>
        <div className="relative flex w-full items-center ">
          <div className="flex w-full flex-col justify-center gap-6 lg:gap-7 xl:gap-9 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex-center h-4" key={index}>
                <div className="w-full border border-dashed border-[#DFE5EE] opacity-50"></div>
              </div>
            ))}
          </div>
          <div className=" absolute left-[49px] flex h-[258px] w-[160px] rotate-90 flex-col justify-between gap-4 md:left-[75px] md:h-[310px] lg:left-[91px] lg:h-[356px] lg:w-[175px] xl:left-[225px] xl:h-[656px] xl:w-[208px]  ">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="flex-center  items-end justify-center" key={index}>
                <div
                  className={`w-full border border-[#DFE5EE]  opacity-50 ${index === 0 ? 'opacity-50' : 'border-dashed'}`}
                ></div>
              </div>
            ))}
          </div>
          {currentSizeBrowser && (
            <div>
              <Image
                src={
                  currentSizeBrowser >= 1440
                    ? '/images/img_line_chart_for_laptop.svg'
                    : currentSizeBrowser >= 768
                      ? '/images/img_line_chart_for_tab.svg'
                      : '/images/img_line_chart.svg'
                }
                fill
                alt="chart line"
              ></Image>
            </div>
          )}
        </div>

        <div className="absolute bottom-[-18px] left-[22px] flex items-center justify-start gap-[15.5px] md:left-[27px] md:gap-[23.3px] lg:left-[28px] lg:gap-[30px] xl:bottom-[-30px] xl:left-[53px] xl:gap-[63.5px]">
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs text-light_blue xl:text-sm">Jul</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Aug</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Sep</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Oct</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Nov</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Dec</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 xl:w-[30px]">
            <p className=" rotate-90 text-base leading-[5px] text-light_blue xl:text-sm">-</p>
            <p className=" text-xs  text-light_blue xl:text-sm">Jan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceHistory
