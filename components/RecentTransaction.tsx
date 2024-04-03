import Image from 'next/image'
import React from 'react'

const RecentTransaction = () => {
  return (
    <div className="flex max-w-sm flex-col justify-between gap-3 rounded-2xl bg-white p-5 lg:h-48 xl:h-[14rem]">
      <div className="flex-between w-full">
        <div className="flex items-center justify-start gap-4 lg:gap-2">
          <div className="flex-center h-[50px] w-[50px] rounded-full bg-[#FFF5D9] lg:h-10 lg:w-10 xl:h-[55px] xl:w-[55px]">
            <Image
              src={'/icons/ic_deposit_from_my.svg'}
              alt="deposit from my icon"
              width={20}
              height={20}
              className="xl:h-[28px] xl:w-[28px]"
            ></Image>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-black lg:text-xs">Deposit from my</p>
            <p className="text-xs font-normal text-light_blue lg:text-[0.6rem]">28 January 2021</p>
          </div>
        </div>
        <p className="text-[0.68rem] font-medium text-coral">-$850</p>
      </div>

      <div className="flex-between w-full">
        <div className="flex items-center justify-start gap-4 lg:gap-2">
          <div className="flex-center h-[50px] w-[50px] rounded-full bg-[#E7EDFF] lg:h-10 lg:w-10 xl:h-[55px] xl:w-[55px]">
            <Image
              src={'/icons/ic_paypal.svg'}
              alt="deposit from my icon"
              width={20}
              height={20}
              className="xl:h-[28px] xl:w-[28px]"
            ></Image>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-black lg:text-xs">Deposit Paypal</p>
            <p className="text-xs font-normal text-light_blue lg:text-[0.6rem]">28 January 2021</p>
          </div>
        </div>
        <p className="text-[0.68rem] font-medium text-turquoise">-$850</p>
      </div>

      <div className="flex-between w-full">
        <div className="flex items-center justify-start gap-4 lg:gap-2">
          <div className="flex-center h-[50px] w-[50px] rounded-full bg-[#DCFAF8] lg:h-10 lg:w-10 xl:h-[55px] xl:w-[55px]">
            <Image
              src={'/icons/ic_jemi.svg'}
              alt="deposit from my icon"
              width={20}
              height={20}
              className="xl:h-[28px] xl:w-[28px]"
            ></Image>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-black lg:text-xs">Jemi Wilson</p>
            <p className="text-xs font-normal text-light_blue lg:text-[0.6rem]">28 January 2021</p>
          </div>
        </div>
        <p className="text-[0.68rem] font-medium text-coral">-$850</p>
      </div>
    </div>
  )
}

export default RecentTransaction
