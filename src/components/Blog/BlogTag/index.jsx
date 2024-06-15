/* eslint-disable react/prop-types */
import React from 'react'
import blogimg from '../../../assets/imgs/2c9dff4e6f2fc3719a3e12.jpg'

export default function BlogTag({ title, image, id }) {
  return (
    <div className='max-h-[500px] mx-4 flex justify-center items-center flex-col gap-y-4'>
      <div className=''>
        <img src={image || blogimg} alt="" className='w-full h-full object-cover' />
      </div>
      <a href={`/postDetail/${id}`} className='text-lg text-brown text-center font-SFUFuturaHeavy cursor-pointer'>
        {title}
      </a>

    </div>
  )
}
