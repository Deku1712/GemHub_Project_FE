import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const slides = [
  {
    url: 'src/assets/imgs/BannerGemHub1.png'
  },
  {
    url: 'src/assets/imgs/BannerGemHub1.png'
  },
  {
    url: 'src/assets/imgs/BannerGemHub1.png'
  }


]

const items = slides.map((slide, index) => (<img key = {index} src={slide.url} className=' w-full h-full object-cover ' />))
export default function Carousel() {


  return (

    <div className=' relative w-full max-h-[950px]  pt-4 mb-4 overflow-hidden'>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="slide"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />

    </div>

  )
}
