/* eslint-disable react/prop-types */
import React from 'react'

export default function Post({ post }) {
  return (
    <div className='max-w-[410px] mx-auto p-3 border border-brown cursor-pointer'>
      <div className='mb-4'>
        <img className='w-full h-full object-cover' src={post.image} alt={post.title} />
      </div>
      <div>
        <p className='text-sm font-SFUFuturaRegular mb-4'>{post.createTime}</p>
        <h3 className='text-brown text-lg text-start font-SFUFuturaBold mb-4'>{post.title}</h3>
        <p className='text-sm font-SFUFuturaRegular text-[#2E1C11] mb-3'>{post.author}</p>
        <p className='text-sm font-SFUFuturaBook text-[#2E1C11] mb-4'>{post.description}</p>
      </div>
    </div>
  )
}
