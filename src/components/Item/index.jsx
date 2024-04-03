import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'flowbite-react'
import { useState } from 'react'
import React from 'react'
import ProductQuickView from '../ProductQuickView'

export default function Item() {
  const [quickView, setQuickView] = useState(false)
  return (
    <div className=' mx-4 max-h-[440px] flex-col group cursor-pointer shadow hover:shadow-lg rounded transition ease-in-out duration-300'>
      <div className=' relative pb-2 overflow-hidden'>
        <img className=' group-hover:rotate-12 group-hover:scale-110 group-hover:-translate-y-6 origin-center transition ease-in-out duration-300 w-full h-full object-cover' src="src\assets\imgs\2bb1af643f05935bca142.jpg" alt="" />
        <div className='  absolute  bottom-0 justify-center items-center left-[50%] -translate-x-[50%] animate-transicon mb-6 gap-3'>
          <div className='hidden group-hover:flex animate-transicon gap-3 justify-center items-center'>
            <Tooltip content='Hết hàng' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 transition ease-in-out '>
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
            </Tooltip>
            <Tooltip content='Yêu Thích' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 transition ease-in-out '>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </Tooltip>
            <Tooltip content='Xem Nhanh' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 transition ease-in-out ' onClick={() => setQuickView(!quickView)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </Tooltip>

          </div>
        </div>
      </div>
      <div className=' pb-4 px-2 flex flex-col gap-2 justify-center items-center'>
        <a className=' text-sm font-SFUFuturaRegular font-semibold text-center uppercase' href="#">Vòng tay may mắn</a>
        <p className=' text-sm font-SFUFuturaRegular uppercase text-center'>500.000 đ</p>
      </div>

      <ProductQuickView quickView={quickView} setQuickView={setQuickView} />
    </div>
  )
}
