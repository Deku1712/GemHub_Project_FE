import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

// import required modules
import { Pagination } from 'swiper/modules'
import BlogTag from '../Blog/BlogTag'

export default function AboutGemHub2() {
  return (

    <div className='w-full pb-[60px]'>
      <h2 className='mt-[40px] mb-[40px] pt-[20px] border-t-[1px] border-black text-center text-[35px] text-brown uppercase tracking-widest font-SFUFuturaRegular font-semiBold'>
        <a href="#"> About GemHub</a>
      </h2>
      <div className='relative w-full mx-auto max-w-[800px] mb-[20px]'>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
        >
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
          <SwiperSlide><BlogTag/></SwiperSlide>
        </Swiper>
      </div>
      </div>
  )
}