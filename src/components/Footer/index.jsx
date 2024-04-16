import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className=' w-full bg-brown h-[400px]'>
      <div className=' max-w-screen-xl mx-auto py-6 '>
        <div className='flex justify-center items-center mb-6'>
          <img src="src\assets\imgs\LogoGemHub.png" alt="" className=' w-[90px] h-[90px] object-cover' />
        </div>
        <div className=' py-4 flex flex-row justify-center  '>

          <div className=' basis-1/3 px-4 flex flex-row justify-center '>
            <div className=' px-6   text-start'>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5 '>Trang chủ</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Trang sức</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Bài viết</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Bộ sưu tập</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Thông tin</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Liên hệ</p>
              <p className=' text-[10px] text-white font-SFUFuturaRegular uppercase leading-5'>Gemhub</p>
            </div>
            <div className=' px-10  border-l-2 border-white text-start'>
              <FontAwesomeIcon icon={faFacebook} className=' text-white text-sm'/> <span className=' mx-2 text-sm text-white  font-SFUFuturaRegular  uppercase leading-5 '> GemHub</span> <br />
              <FontAwesomeIcon icon={faInstagram} className=' text-white text-sm'/> <span className=' mx-2 text-sm text-white font-SFUFuturaRegular  uppercase leading-5 '> GemHub</span> <br />
              <FontAwesomeIcon icon={faPhone} className=' text-white text-sm'/> <span className=' mx-2 text-sm text-white font-SFUFuturaRegular  uppercase leading-5 '> 0944549140</span> <br />

            </div>
          </div>
          <div className=' basis-1/3 px-4  border-x-2 border-white flex flex-col gap-y-3  items-center'>
            <h2 className='text-sm text-white font-SFUFuturaRegular  uppercase leading-5 '>GemHub store in Da Nang</h2>
            <span className='w-[30%] border border-white'></span>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase leading-5 ' >Design and make by ngoctam</p>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase leading-5 '>since 2024</p>
            
          </div>
          <div className=' basis-1/3 px-4 flex flex-col items-center '>
            <h2 className='text-sm text-white font-SFUFuturaRegular  uppercase  '> Hệ thống cửa hàng</h2>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase  ' >Hà Nội</p>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase  '>Đà Nẵng</p>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase  ' >Cần Thơ</p>
            <p className='text-sm text-white font-SFUFuturaRegular  uppercase  '>Sài Gòn</p>
          </div>

        </div>
      </div>
    </div>
  )
}
