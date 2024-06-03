import React, { useState, useEffect } from 'react'
import Post from '../../components/Post'
import ComponentBreadCum from '../../components/Breadcrumb'

import manage from '../../service/manage'

import bannerGemhub1 from '../../assets/imgs/BannerGemHub1.png'


export default function PostPage() {
  const [posts, setPosts] = useState([]) // State để lưu trữ các bài post
  const [loading, setLoading] = useState(true) // State để quản lý trạng thái loading

  useEffect(() => {
    // Gọi API để lấy danh sách các bài post
    manage.getPost()
      .then(response => {
        setPosts(response.data) // Lưu trữ dữ liệu vào state
        setLoading(false) // Cập nhật trạng thái loading
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
        setLoading(false) // Cập nhật trạng thái loading trong trường hợp lỗi
      })
  }, [])

  return (

    <div className='  mb-8'>
      <div className=' relative w-full max-h-[950px]  pt-4 mb-4 overflow-hidden'>
        <img src={bannerGemhub1} alt="" />
      </div>

      <div className='max-w-[1080px] mx-auto'>
        <ComponentBreadCum />

        <div>
          <div className='flex justify-center items-center gap-2'>
            <h2 className='text-brown text-sm text-start font-SFUFuturaBold text-nowrap p-2 mb-2'>Bộ Sưu Tập</h2>
            <span className='w-full h-0.5 bg-slate-200'></span>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              posts.map((post, index) => (
                <div key={index} className={index % 2 === 0 ? '' : 'md:mt-20 md:mb-3'}>
                  <Post post={post} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
