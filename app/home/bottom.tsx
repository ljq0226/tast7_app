'use client'
import React from 'react'
import { AiFillHome, AiOutlineCar } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
const Bottom = () => {
  return (
    <div className='flex justify-around pt-2 border-t-2 border-gray-200'>
      <div className='flex flex-col text-green-500'>

        <div className="text-[25px]">
          <AiFillHome />
        </div>

        <p className='text-[13px]'>首页</p>

      </div>
      <div className='flex flex-col '>

        <div className="text-[25px] ml-3">
          <AiOutlineCar />
        </div>

        <p className='text-[13px]'>车位中心</p>

      </div>
      <div className='flex flex-col'>

        <div className="text-[25px] ml-3">
          <FaWpforms />
        </div>

        <p className='text-[13px]'>订单详情</p>

      </div>
      <div className='flex flex-col '>

        <div className="text-[25px] ml-3">
          <MdPersonOutline />
        </div>

        <p className='text-[13px]'>个人中心</p>

      </div>




    </div>
  )
}

export default Bottom
