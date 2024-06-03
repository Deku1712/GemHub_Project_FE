import React from 'react'
import img1 from '../../assets/imgs/images (1).jpg'
import img2 from '../../assets/imgs/images.jpg'
import img3 from '../../assets/imgs/pngtree-jewel-handmade-bracelet-with-semipreciouse-stones-at-black-background-photo-picture-image_2887390.jpg'
export default function About2() {
  return (
    <div className=' w-full  overflow-hidden py-4 flex flex-col '>
      <a className=' mx-auto text-[28px] font-SFUFuturaRegular font-semibold mb-4 ' href="#">Gem Hub Được thành lập vào năm 2024</a>
      <div className='flex max-h-[620px] pt-4 gap-4'>
        <div className=' basis-4/12  flex flex-col '>
          <img src={img1} alt="" className=' pb-4 w-full h-[50%] object-cover' />
          <img src={img2} alt="" className=' w-full h-[50%] object-cover' />
        </div>
        <div className=' basis-8/12 '>

          <img className=' w-full  h-full  object-cover' src={img3} alt="" />
        </div>
      </div>
    </div>
  )
}
