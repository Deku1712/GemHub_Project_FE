import React from 'react'

export default function About2() {
  return (
    <div className=' w-full  overflow-hidden py-4 flex flex-col '>
      <a className=' mx-auto text-[28px] font-SFUFuturaRegular font-semibold mb-4 ' href="#">Gem Hub Được thành lập vào năm 2024</a>
      <div className='flex max-h-[620px] pt-4 gap-4'>
        <div className=' basis-4/12  flex flex-col '>
          <img src="src\assets\imgs\images (1).jpg" alt="" className=' pb-4 w-full h-[50%] object-cover' />
          <img src="src\assets\imgs\images.jpg" alt="" className=' w-full h-[50%] object-cover' />
        </div>
        <div className=' basis-8/12 '>

          <img className=' w-full  h-full  object-cover' src="src\assets\imgs\pngtree-jewel-handmade-bracelet-with-semipreciouse-stones-at-black-background-photo-picture-image_2887390.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
