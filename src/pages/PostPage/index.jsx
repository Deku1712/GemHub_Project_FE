import React from 'react'
import Post from '../../components/Post'
import ComponentBreadCum from '../../components/Breadcrumb'

export default function PostPage() {
  return (
    <div className=' px-2 mb-8'>
      <div className=' relative w-full max-h-[950px]  pt-4 mb-4 overflow-hidden'>
        <img src="src\assets\imgs\BannerGemHub1.png" alt="" />
      </div>

      <div className=' max-w-[1080px] mx-auto'>
        <ComponentBreadCum />

        <div>

          <div className=' flex justify-center items-center gap-2'>
            <h2 className=' text-brown text-sm  text-start font-SFUFuturaBold text-nowrap p-2  mb-2'>Bộ Sưu Tập</h2>
            <span className=' w-full h-0.5 bg-slate-200'></span>
          </div>
          <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
            <div>
              <Post />
            </div>
            <div className=' md:mt-28 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div className=' md:mt-20 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div className=' md:mt-20 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div className=' md:mt-20 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div className=' md:mt-20 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div>
              <Post />
            </div>
            <div className=' md:mt-20 md:mb-3'>
              <Post />
            </div>
            <div>
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
