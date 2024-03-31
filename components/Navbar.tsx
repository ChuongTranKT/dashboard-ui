'use client'
import Image from 'next/image'

const Navbar = () => {
  const handleOpenMenu = () => {
    const sidebar = document.getElementById('sidebar')
    sidebar?.classList.remove('sidebar-close')
    sidebar?.classList.add('sidebar-open')
  }
  return (
    <section
      id="navbar"
      className="sticky top-0 z-50 flex flex-col gap-5 bg-[#fff] p-6 lg:flex lg:h-20 lg:border-b lg:border-[#E6EFF5] lg:p-6"
    >
      <div className="flex-between gap-4">
        <div className="cursor-pointer lg:hidden" onClick={handleOpenMenu}>
          <Image src={'/icons/ic_menu.svg'} width={14} height={18} alt="menu"></Image>
        </div>
        <div>
          <p className="text-xl font-[600] text-purple lg:text-[1.5rem]">Overview</p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="hidden h-[2.5rem] w-full items-end justify-start gap-3 rounded-full bg-[#F5F7FA] py-3 pl-5 pr-10 lg:flex">
            <Image src={'/icons/ic_search.svg'} alt="search icon" width={16} height={16}></Image>
            <input
              type="text"
              placeholder="Search for something"
              className=" w-full border-none bg-[#F5F7FA] text-[0.75rem] text-light_blue outline-none"
            />
          </div>
          <div className="flex-center gap-5">
            <div className="flex-center lg:flex-center hidden gap-5">
              <div className="flex-center h-10 w-10 rounded-full bg-[#F5F7FA] ">
                <Image src={'/icons/ic_setting.svg'} alt="setting" width={18} height={18}></Image>
              </div>
              <div className="flex-center h-10 w-10 rounded-full bg-[#F5F7FA] ">
                <Image
                  src={'/icons/ic_notification.svg'}
                  alt="notification"
                  width={18}
                  height={18}
                ></Image>
              </div>
            </div>
            <div className="relative h-[35px] w-[35px] rounded-full">
              <Image
                src={'/images/img_avatar.jpeg'}
                fill
                className="rounded-full object-contain"
                alt="avatar"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-start gap-3 rounded-full bg-[#F5F7FA] px-5 py-3 lg:hidden">
        <Image src={'/icons/ic_search.svg'} alt="search icon" width={16} height={16}></Image>
        <input
          type="text"
          placeholder="Search for something"
          className=" w-full border-none bg-[#F5F7FA] text-sm text-light_blue outline-none"
        />
      </div>
    </section>
  )
}

export default Navbar
