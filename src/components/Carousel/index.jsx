import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Slide1 from '../../assets/imgs/BannerGemHub1.png'
// import Slide2 from '../../assets/imgs/BannerGemHub2.png'
// import Slide3 from '../../assets/imgs/BannerGemHub3.png'

const slides = [
  {
    url: Slide1
  },
  {
    url: Slide1
  },
  {
    url: Slide1
  }


]

const items = slides.map((slide, index) => (<img key = {index} src={slide.url} className=' w-full h-full object-cover ' />))
export default function Carousel() {


  return (

    <div className=' relative w-full max-h-[650px]  pt-4 mb-4 overflow-hidden'>
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
