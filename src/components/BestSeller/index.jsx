import React from 'react'
import Item from '../Item'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useState } from 'react'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1080: { items: 3 }
}

const items = [
  <Item key={1} />,
  <Item key={2} />,
  <Item key={4} />,
  <Item key={5} />,
  <Item key={3} />,
  <Item key={6} />

]
export default function BestSeller() {

  const [thumbIndex, setThumbIndex] = useState(0)
  // const [items, setItems] = useState(transformData())
  const slideNext = () => {
    console.log(thumbIndex)
    console.log(items.length - 1)
    if (thumbIndex < items.length - 2) {
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    console.log(thumbIndex)
    console.log(items.length - 1)

    if (thumbIndex > 0) {
      setThumbIndex(thumbIndex - 1)
    }
  }


  const syncThumbs = (e) => {
    setThumbIndex(e.item)

  }

  return (
    <div className=' w-full pb-[60px] '>
      <h2 className=' mt-[40px] mb-[20px] pt-[20px] border-t-[1px] border-black tracking-widest text-center text-[35px] text-brown te font-SFUFuturaRegular font-semiBold'>
        <a href="#"> Best Seller</a>
      </h2>
      <div className=' relative w-full  mx-auto max-w-[1280px] mb-[20px] '>
        <AliceCarousel
          activeIndex={thumbIndex}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          onSlideChanged={syncThumbs}
          animationDuration={150}

        />
        {thumbIndex !== 0 && <div className="btn-prev absolute left-0 top-[50%] -translate-y-4 -translate-x-5 px-5 py-4 bg-[#f4f6f8] hover:bg-[#d82e2e] hover:text-white cursor-pointer" onClick={slidePrev} >&lang;</div>}
        {thumbIndex !== items.length - 3 && <div className="btn-next  absolute right-0 top-[50%] -translate-y-4 translate-x-4 px-5 py-4 bg-[#f4f6f8] hover:bg-[#d82e2e] hover:text-white cursor-pointer" onClick={slideNext}>&rang;</div>}

      </div>

      
    </div>
  )
}
