import { Button } from 'flowbite-react'
import React from 'react'
import Post from './PostFeedBack'

export default function Feedback() {
  return (
    <div className='w-full pb-[60px]  '>
      <h2 className='mt-[40px] mb-[40px] pt-[20px] border-t-[1px] border-black text-center text-[35px] text-brown uppercase font-SFUFuturaRegular tracking-wider font-semiBold'>
        <a href="#">Khách hàng FeedBack</a>
      </h2>

      <div className='  px-4 flex flex-col justify-center items-center '>
        <div className=' px-2 border-l-2 border-slate-400 mb-5'>
          <Button> Follow us</Button>
        </div>
        <div className=' relative flex flex-col lg:flex-row gap-x-2 gap-y-4 mb-8 justify-center'>
          <div className=' flex flex-col gap-y-4 justify-center'>
            <Post />
            <Post />
            <Post />

          </div>
          <div className=' flex flex-col gap-y-4 justify-center pt-[60px] '>
            <Post />
            <Post />
            <Post />

          </div>
          <div className=' flex flex-col gap-y-4 justify-center'>
            <Post />
            <Post />
            <Post />

          </div>

        </div>
        <div className=' px-2  mb-5'>
          <Button className=' '> View More</Button>
        </div>
      </div>

    </div>
  )
}
