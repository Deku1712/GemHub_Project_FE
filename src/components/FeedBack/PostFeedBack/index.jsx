import React from 'react'
import ngoctam from '../../../assets/imgs/ngoctam.jpg'
export default function Post() {
  return (
    <div className=' flex flex-col gap-y-3 p-[25px] rounded-md hover:shadow-xl transition ease-in-out cursor-pointer border '>
      <div className=' text-start'>
        <a href="" className=' text-lg font-mono font-semibold mb-1 underline'>Kacchan</a>
        <p className=' text-sm font-mono '>April 02, 2024</p>
      </div>
      <div className=' relative rounded-lg overflow-hidden mb-2'>
        <img className=' w-full h-full object-cover' src={ngoctam} alt="" />
        <div className=' absolute top-3 right-4 w-[20px] h-[20px] bg-white  border z-20 rounded-sm shadow-sm'></div>
        <div className=' absolute top-4 right-3 w-[20px] h-[20px] bg-white  border rounded-sm z-10'></div>

      </div>
      <div>
        <p className=' text-start text-sm font-mono'>Kỷ niệm 17 năm chơi chung, làm cái vòng vĩnh cữu cho kiếp sau còn gặp nhau tiếp ạ</p>
      </div>
    </div>
  )
}
