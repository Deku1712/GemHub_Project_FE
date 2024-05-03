import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Notification({ status }) {


  const notiSuccess = {
    faIcon : faCheck, // Thay đổi từ {faCheck} sang faCheck
    content: 'Sản phẩm đã được thêm vào giỏ hàng.'
  }
  const notiFailed = {
    faIcon: faTimes, // Thay đổi từ {faXmark} sang faTimes
    content: 'Thêm thất bại.'
  }

  const notification = status == 'succeeded' ? notiSuccess : notiFailed // Sửa lỗi chính tả và kiểu dữ liệu ở đây

  return (
    <div className=' fixed z-50 p-5 top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%] flex justify-center items-center bg-slate-400 bg-opacity-60'>
      <div className=' flex flex-col justify-center items-center'>
        <div className=' p-6 w-9 h-9 flex justify-center rounded-full bg-green-300 items-center'>
          <FontAwesomeIcon className=' text-white text-[30px]' icon={notification.faIcon}/>
        </div>
        <h3 className=' text-[16px] font-SFUFuturaBold text-white tracking-wide p-2'>{notification.content}</h3>
      </div>
    </div>
  )
}

export default Notification;
