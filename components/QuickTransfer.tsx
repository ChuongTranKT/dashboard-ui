'use client'
import { LIST_USER, UserType } from '@/constants'
import Image from 'next/image'
import { useRef, useState } from 'react'

type UserItemType = {
  id: number
  image: string
  name: string
  position: string
}

const UserItem = ({ image, name, position, id }: UserItemType) => {
  const [isHoverUserItem, setIsHoverUserItem] = useState<number>()
  const [selectedUserItem, setSelectedUserItem] = useState<number>()

  const handleSelectedUserItem = (userID: number) => {
    if (selectedUserItem === userID) {
      setSelectedUserItem(undefined)
    } else {
      setSelectedUserItem(userID)
    }
  }

  return (
    <div
      className="flex w-[30%] flex-shrink-0 flex-col items-center justify-center gap-3  xl:py-4"
      onMouseEnter={() => setIsHoverUserItem(id)}
      onMouseLeave={() => setIsHoverUserItem(undefined)}
      onClick={() => handleSelectedUserItem(id)}
    >
      <div className="relative h-[50px] w-[50px] rounded-full">
        <Image src={image} alt="avatar" fill className="rounded-full object-cover"></Image>
      </div>
      <div className="flex-center flex-col">
        <p
          className={`text-nowrap text-xs  text-black ${isHoverUserItem === id || selectedUserItem === id ? 'font-bold' : 'font-normal'}`}
        >
          {name}
        </p>
        <p
          className={`text-nowrap text-xs text-light_blue ${isHoverUserItem === id || selectedUserItem === id ? 'font-bold' : 'font-normal'}`}
        >
          {position}
        </p>
      </div>
    </div>
  )
}

const QuickTransfer = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAtStartSlide, setIsAtStartSlide] = useState(true)
  const [isAtEndSlide, setIsAtEndSlide] = useState(false)

  // This function is triggered when the mouse button is pressed down
  const handleMouseDown = (e: any) => {
    if (sliderRef.current) {
      // Set isDragging to true to indicate that the user has started dragging
      setIsDragging(true)
      // Record the initial X position of the mouse
      setStartX(e.pageX - sliderRef.current.offsetLeft)
      // Record the initial scroll position of the slider
      setScrollLeft(sliderRef.current.scrollLeft)
    }
  }

  // This function is triggered when the mouse leaves the slider
  const handleMouseLeave = () => {
    // Set isDragging to false to indicate that the user has stopped dragging
    setIsDragging(false)
  }

  // This function is triggered when the mouse button is released
  const handleMouseUp = () => {
    // Set isDragging to false to indicate that the user has stopped dragging
    setIsDragging(false)
  }

  // This function is triggered when the mouse is moved
  const handleMouseMove = (e: any) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    // Calculate the new X position of the mouse
    const x = e.pageX - sliderRef.current.offsetLeft
    // Calculate the distance the user has dragged
    const walk = (x - startX) * 3 //scroll-fast
    // Update the scroll position of the slider based on the distance the user has dragged
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  // This function is triggered when the "prev" button is clicked
  const handlePrevSlide = () => {
    setIsAtEndSlide(false)
    const slider = sliderRef.current
    if (slider && slider.scrollLeft > 0) {
      // Scroll the slider to the left by the width of the slider
      slider.scrollLeft -= slider.clientWidth
      if (slider.scrollLeft === slider.clientWidth) {
        setIsAtStartSlide(true)
      }
    }
    if (slider && slider.scrollLeft < 20) {
      console.log(slider && slider.scrollLeft)
      setIsAtStartSlide(true)
    }
  }

  // This function is triggered when the "next" button is clicked
  const handleNextSlide = () => {
    const slider = sliderRef.current
    if (slider && slider.scrollLeft < slider.scrollWidth - slider.clientWidth) {
      // Scroll the slider to the right by the width of the slider
      slider.scrollLeft += slider.clientWidth
      setIsAtStartSlide(false)
      setIsAtEndSlide(false)
    }

    if (slider && slider.scrollLeft === slider.clientWidth) {
      setIsAtEndSlide(true)
    }
  }
  return (
    <div className="relative flex h-52 w-full snap-x flex-col justify-center gap-6 rounded-2xl bg-white p-4 lg:h-56 xl:h-72 xl:gap-14">
      <div
        ref={sliderRef}
        className="relative flex w-[90%] cursor-pointer items-center justify-start gap-4 overflow-x-hidden scroll-smooth lg:gap-4 xl:w-[85%]"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {LIST_USER.map((userItem: UserType) => (
          <UserItem
            key={userItem.id}
            image={userItem.avatar}
            name={userItem.name}
            position={userItem.position}
            id={userItem.id}
          />
        ))}
      </div>
      <div
        className={`flex-center right-arrow absolute right-4 top-9 z-20 h-[40px] w-[40px] ${isAtEndSlide ? 'cursor-not-allowed' : 'cursor-pointer'} rounded-full bg-white p-1 opacity-70 shadow-md xl:top-14`}
        onClick={handleNextSlide}
      >
        <Image src={'/icons/ic_right-arrow.png'} width={16} height={16} alt="right arrow"></Image>
      </div>
      {!isAtStartSlide && (
        <div
          className="flex-center left-arrow absolute left-4 top-9 z-20 h-[40px] w-[40px] cursor-pointer  rounded-full bg-white p-1 opacity-70 shadow-lg xl:top-14"
          onClick={handlePrevSlide}
        >
          <Image src={'/icons/ic_left-arrow.png'} width={16} height={16} alt="left arrow"></Image>
        </div>
      )}
      <div className="flex-center gap-2">
        <div className="w-1/3">
          <p className="text-xs font-normal text-light_blue xl:text-base">Write Amount</p>
        </div>
        <div className="flex-between h-10 w-2/3 rounded-3xl bg-[#EDF1F7] pl-6  xl:h-12 ">
          <div className="w-1/3 lg:w-[55%] xl:w-[45%]">
            <input
              type="number"
              className=" w-full border-none bg-[#EDF1F7] text-xs font-normal text-light_blue outline-none xl:text-base"
              defaultValue={'525.50'}
            ></input>
          </div>
          <div className="flex-center h-full w-2/3 gap-3 rounded-3xl bg-blue p-1 lg:w-[45%] xl:w-[55%]">
            <span className="text-xs font-medium text-white  xl:text-base">Send</span>
            <Image
              src={'/icons/ic_send.svg'}
              width={16}
              height={14}
              alt="send"
              className="xl:h-[22px] xl:w-[26px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransfer
