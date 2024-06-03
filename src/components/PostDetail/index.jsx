import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import postImage from '../../assets/imgs/post_img.png'
import manage from '../../service/manage'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const [post, setPost] = useState(null)

  const { id } = useParams()

  const fetchPost = async () => {
    try {
      const response = await manage.getPostById(id)
      if (response != null) {
        setPost(response.data)
      }
    } catch (error) {

      console.error('Error fetching product:', error)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [id])

  if (!post) {
    return <div>Loading...</div> // Hiển thị khi đang tải dữ liệu
  }

  return (
    <div className='container mx-auto max-w-[1170px] uppercase text-[#42210b] bg-transparent py-2.5 border-[none] px-[15px]'>
      <div className="flex flex-wrap mr-[-15px] ml-[-15px]">
        <div className="lg:w-full pr-4 pl-4">
          <div className="text-center mb-[30px] flex justify-center items-center">
            <a className='mx-auto my-0'>
              <img itemProp="image" className="max-w-full h-auto border-0 border-none align-middle" src={post.image} alt="Tác dụng không tưởng của bạc 925 sẽ làm bạn bất ngờ - KaT Jewelry"/>
            </a>
          </div>
          <div className="font-normal mx-0 my-2.5" itemProp="datePublished">{post.createTime}</div>
          <div className="mb-5 text-[rgba(66,33,11,0.7)] text-[0.92857em] italic">
				Viết bởi
            <span itemProp="author"> {post.author}</span>
          </div>
          <div className='article-content'>
            <h1 style={{ textAlign: 'center' }} className='mb-[10px]'>
              <span style={{ fontSize: 24 }}>
                <strong>{post.title}</strong>
              </span>
            </h1>
            <p>{post.description}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PostDetails