import React, { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'
import Post from './PostFeedBack'
import manage from '../../service/manage'

export default function Feedback() {
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
    <div className='w-full pb-[60px]'>
      <h2 className='mt-[40px] mb-[40px] pt-[20px] border-t-[1px] border-black text-center text-[35px] text-brown uppercase font-SFUFuturaRegular tracking-wider font-semiBold'>
        <a href="#">Khách hàng FeedBack</a>
      </h2>

      <div className='px-4 flex flex-col justify-center items-center'>
        <div className='px-2 border-l-2 border-slate-400 mb-5'>
          <Button>Follow us</Button>
        </div>
        <div className='relative flex flex-col lg:flex-row gap-x-2 gap-y-4 mb-8 justify-center'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className={index % 2 === 0 ? 'flex flex-col gap-y-4 justify-center' : 'flex flex-col gap-y-4 justify-center pt-[60px]'}>
                <Post post={post} />
              </div>
            ))
          )}
        </div>
        <div className='px-2 mb-5'>
          <Button>View More</Button>
        </div>
      </div>
    </div>
  )
}
