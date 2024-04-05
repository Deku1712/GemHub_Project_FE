import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import BlogTag from '../Blog/BlogTag'

const responsive = {
  0: { items: 3 }
}

const responsiveText = {
  0: { items: 1 }
}

const items = [
  <BlogTag key={1} />,
  <BlogTag key={2} />,
  <BlogTag key={3} />,
  <BlogTag key={4} />
  
]

const infoTexts = [
  <p className='text-brown text-center text-lg font-SFUFuturaHeavy'>Gem hub bao gồm 5 thành viên</p>,
  <p className='text-brown text-center text-lg font-SFUFuturaHeavy'>Gem hub được thành lập vào năm 2024</p>,
  <p className='text-brown text-center text-lg font-SFUFuturaHeavy'>mang lại nhiều sản phẩm tinh xảo.</p>
]
const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      {item}
    </div>
  ))
}
export default function AboutGemHub() {
  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]))
  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = (e) => {
    setMainAnimation(false)

    if (e.type === 'action') {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
    }
  }

  const syncThumbs = (e) => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }


  const renderDotsItem = ({ isActive }) => {
    return isActive ? <FontAwesomeIcon className='text-[10px] rounded-full border text-brown mx-2' icon={faCircle} /> : <FontAwesomeIcon className='text-[10px] text-slate-400 rounded-full border mx-2' icon={faCircle} />
  }

  return (
    <div className='w-full pb-[60px]'>
      <h2 className='mt-[40px] mb-[40px] pt-[20px] border-t-[1px] border-black text-center text-[35px] text-brown uppercase font-SFUFuturaRegular font-semiBold'>
        <a href="#"> About GemHub</a>
      </h2>
      <div className='relative w-full mx-auto max-w-[800px] mb-[20px]'>
        <AliceCarousel
          activeIndex={mainIndex}
          animationType="slide"
          animationDuration={500}
          disableDotsControls
          disableButtonsControls
          items={infoTexts}
          mouseTracking={!thumbAnimation}
          onSlideChange={syncMainBeforeChange}
          onSlideChanged={syncMainAfterChange}
          touchTracking={!thumbAnimation}
        />,
        <div className="thumbs">
          <AliceCarousel
            responsive={responsive}
            activeIndex={thumbIndex}
            disableButtonsControls
            renderDotsItem={renderDotsItem}
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />
        </div>
      </div>
    </div>
  )
}
