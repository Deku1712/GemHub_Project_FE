import React from 'react'

export default function About() {
  return (
    <div className=' w-[80%] mx-auto p-4 max-h-[500px]  flex justify-center gap-4 '>
                <div className=' basis-1/2 lg:basis-8/12'>
                    <img className=' w-full h-full object-cover' src="src\assets\imgs\banner2.png" alt="" />
                </div>
                <div className=' basis-1/2 lg:basis-4/12 flex justify-center items-center flex-col gap-y-4 '>
                    <img className=' w-full h-full lg:h-[50%] object-cover' src="src\assets\imgs\f4aac24f44038809e0e411982421d688.jpg" alt="" />
                    <div className=' lg:block hidden w-full h-[50%]  px-2 pt-3 '>
                        <h2 className=' text-brown text-3xl text-center font-semibold font-SFUFutura mt-4 mb-2'>
                        Trang sức là một phụ kiện <br /> mà còn là một tác phẩm nghệ thuật
                        </h2>
                        <p className=' text-brown text-center text-sm font-SFUFuturaRegular'>
                        tạo ra bằng niềm đam mê,bằng chính trái tim.
                        </p>

                    </div>
                </div>
            </div>
  )
}
