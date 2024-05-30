import React from 'react'

export default function Post() {
  return (
    <div className=' max-w-[410px] mx-auto p-3 border border-brown cursor-pointer'>
      <div className=' mb-4'>
        <img className=' w-full h-full object-cover' src="src\assets\imgs\a61af3ce63afcff196be3.jpg" alt="" />
      </div>
      <div>
        <p className=' text-sm font-SFUFuturaRegular mb-4'>12/06/2018</p>
        <h3 className='text-brown text-lg  text-start font-SFUFuturaBold  mb-4'>Quà tặng ngày phụ nữ Việt Nam</h3>
        <p className='text-sm font-SFUFuturaRegular text-[#2E1C11] mb-3'>Viết bởi Ngọc Tâm</p>
        <p className='text-sm font-SFUFuturaBook text-[#2E1C11] mb-4'>Ngày phụ nữ Việt Nam là ngày quan trọng đặc biệt đến mẹ và người yêu của bạn ,là ngày để mình thể hiện tình yêu thương giành cho họ .Cùng KaT với một số gợi ý nhỏ dành tặng cho "người quan trọng" trong "ngày đặc biệt" nhé </p>
      </div>
    </div>
  )
}
