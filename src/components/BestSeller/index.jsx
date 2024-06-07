import React from 'react'
import Item from '../Item'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useState, useEffect } from 'react'
import manage from '../../service/manage'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1080: { items: 3 }
}

export default function BestSeller() {
  const [products, setProducts] = useState([])
  const [thumbIndex, setThumbIndex] = useState(0)

  useEffect(() => {
    // Gọi API để lấy danh sách products
    manage.getProductLimited()
      .then(response => {
        setProducts(response.data) // Lưu trữ dữ liệu vào state
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
      })
  }, [])

  const items = products.map((item, index) => {
    return <Item key={index} product={item}/>
  })

  const slideNext = () => {
    console.log(thumbIndex)
    console.log(products.length - 1)
    if (thumbIndex < products.length - 2) {
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    console.log(thumbIndex)
    console.log(products.length - 1)

    if (thumbIndex > 0) {
      setThumbIndex(thumbIndex - 1)
    }
  }


  const syncThumbs = (e) => {
    setThumbIndex(e.product)

  }

  return (
    <div className=' w-full pb-[60px] '>
      <h2 className=' mt-[40px] mb-[20px] pt-[20px] border-t-[1px] border-black  text-center text-[35px] text-brown font-SVNFutura'>
         Sản phẩm giới hạn
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
        {thumbIndex !== products.length - 3 && <div className="btn-next  absolute right-0 top-[50%] -translate-y-4 translate-x-4 px-5 py-4 bg-[#f4f6f8] hover:bg-[#d82e2e] hover:text-white cursor-pointer" onClick={slideNext}>&rang;</div>}

      </div>
    </div>
  )
}
