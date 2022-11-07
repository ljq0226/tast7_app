import React from 'react'
import { AiFillCar } from 'react-icons/ai'
import { MdLocalParking } from 'react-icons/md'

const Middle = () => {
  return (
    <div>
      <div className="flex justify-center m-3 space-x-2 align-center notice">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-500 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
        <div className='leading-5'>
          <p className='mt-[2px]'>最新活动预充1000送199!</p>
        </div>
        <div className='flex-grow'>

        </div>


        <button className='text-green-500 border border-green-500 rounded-sm'>详情</button>
      </div>
      <div>


        <div className='flex space-x-2'>
          <div className='bg-yellow-300 w-[200px] h-[200px] flex flex-col justify-center items-center rounded-sm'>
            <div className='h-[100px] w-[100px] text-[80px] text-white border-[10px] border-white rounded-full '>
              <AiFillCar />
            </div>
            <p className='text-white text-[18px] font-bold'>发布车位</p>

          </div>
          <div className='bg-green-300 w-[200px] h-[200px] flex flex-col justify-center items-center rounded-sm'>
            <div className='h-[100px] w-[100px] text-[80px] text-white border-[10px] border-white rounded-full '>
              <MdLocalParking />
            </div>
            <p className='text-white text-[18px] font-bold'>寻找车位</p>

          </div>
        </div>
      </div>
      <div className='mt-3 mb-5'>
        <div>
        <img src="https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/01.png" alt="" />
        </div>
        <div className='mr-2'>
        <img src="https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/02.png" alt="" />
        </div>

      </div>
    </div>
  )
}
export default Middle
