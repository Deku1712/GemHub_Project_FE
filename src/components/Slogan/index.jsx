import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useState } from 'react'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 }
}

const items = [
  <img className=' w-full h-full object-cover' key={1} src="src\assets\imgs\2bb1af643f05935bca142.jpg" alt="" />,
  <img className=' w-full h-full object-cover' key={2} src="src\assets\imgs\2c9dff4e6f2fc3719a3e12.jpg" alt="" />,
  <img className=' w-full h-full object-cover' key={3} src="src\assets\imgs\6eff6b2dfb4c57120e5d7.jpg" alt="" />,
  <img className=' w-full h-full object-cover' key={4} src="src\assets\imgs\6eff6b2dfb4c57120e5d7.jpg" alt="" />,
  <img className=' w-full h-full object-cover' key={5} src="src\assets\imgs\2bb1af643f05935bca142.jpg" alt="" />,
  <img className=' w-full h-full object-cover' key={6} src="src\assets\imgs\6eff6b2dfb4c57120e5d7.jpg" alt="" />


]

export default function Slogan() {

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
    <div className='w-full mb-4 '>
      <div className='  px-4 py-8 bg-[#f5f4f3]'>
        <p className=' text-brown text-[70px] font-SVNTakenbyVultures text-center tracking-wide '>
                    Stones of Art, Crafted by Heart
        </p>
      </div>
      {/* <div className=' relative'>
        <AliceCarousel
          activeIndex={thumbIndex}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          onSlideChanged={syncThumbs}

        />
        {thumbIndex !== 0 && <div className="btn-prev absolute left-0 top-[50%] -translate-y-4 -translate-x-5 px-5 py-4 bg-[#f4f6f8] hover:bg-brown hover:text-white cursor-pointer" onClick={slidePrev} >&lang;</div>}
        {thumbIndex !== items.length - 3 && <div className="btn-next  absolute right-0 top-[50%] -translate-y-4 translate-x-4 px-5 py-4 bg-[#f4f6f8] hover:bg-brown hover:text-white cursor-pointer" onClick={slideNext}>&rang;</div>}
      </div> */}

    </div>
  )
}
