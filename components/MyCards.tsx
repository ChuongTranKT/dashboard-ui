import Image from 'next/image'
import React from 'react'

const MyCards = () => {
  return (
    <section id="my-cards" className="relative overflow-auto pl-6">
      <div className="relative w-[600px] md:w-full">
        <div className="flex gap-6 overflow-x-auto md:pr-5 lg:justify-start lg:pr-0">
          <div className="bg-cards-custom relative flex w-64 flex-col justify-between gap-6 rounded-2xl p-5 md:w-full lg:h-48  xl:h-[14rem] xl:max-w-96 ">
            <div className="flex-between">
              <div>
                <p className="font-lato text-white text-[0.6rem]">Balance</p>
                <p className="font-lato text-white text-base font-semibold">$5,756</p>
              </div>
              <div>
                <Image
                  src={'/icons/ic_chip_card.svg'}
                  alt="icon chip"
                  width={32}
                  height={32}
                ></Image>
              </div>
            </div>
            <div className="flex-between">
              <div>
                <p className="text-[0.6rem] font-normal text-[#c5c4fa]">CARD HOLDER</p>
                <p className="text-white text-sm font-semibold">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[0.6rem] font-normal text-[#c5c4fa]">VALID THRU</p>
                <p className="text-white text-sm font-semibold">12/22</p>
              </div>
            </div>
            <div className="flex-between relative">
              <div>
                <p className="text-white text-base font-semibold">3778 **** **** 1234</p>
              </div>
              <div>
                <Image src={'/icons/ic_cirle.svg'} width={32} height={32} alt="icon cirle"></Image>
              </div>
            </div>
            <div className="custom-bottom-card absolute bottom-0 left-0"></div>
          </div>
          <div className="flex w-64 flex-col justify-between  gap-6 rounded-2xl border border-[#DFEAF2] p-5 md:w-full lg:h-48  xl:h-[14rem] xl:max-w-96 ">
            <div className="flex-between">
              <div>
                <p className="font-lato text-[0.6rem] text-[#718EBF]">Balance</p>
                <p className="font-lato text-base font-semibold text-purple">$5,756</p>
              </div>
              <div>
                <Image
                  src={'/icons/ic_chip_card_gray.svg'}
                  alt="icon chip"
                  width={32}
                  height={32}
                ></Image>
              </div>
            </div>
            <div className="flex-between">
              <div>
                <p className="text-[0.6rem] font-normal text-[#718EBF]">CARD HOLDER</p>
                <p className="text-[0.8rem] font-semibold text-purple">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[0.6rem] font-normal text-[#718EBF]">VALID THRU</p>
                <p className="text-[0.8rem] font-semibold text-purple">12/22</p>
              </div>
            </div>
            <div className="flex-between relative gap-4">
              <div className="absolute left-[0rem] top-[-14px] h-[1px] w-full border-t border-[#DFEAF2]"></div>
              <div>
                <p className="text-[0.9rem] font-semibold text-purple">3778 **** **** 1234</p>
              </div>
              <div>
                <Image
                  src={'/icons/ic_cirle_gray.svg'}
                  width={32}
                  height={32}
                  alt="icon cirle"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCards
