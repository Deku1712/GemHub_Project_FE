import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'flowbite-react'
import { useState } from 'react'
import React from 'react'
import ProductQuickView from '../ProductQuickView'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/cartSlice'

export default function Item(props) {

  const product = props.product || {
    id: 1,
    productName: 'kkasdfasdf',
    productPrice: '3232'
  }

  const [quickView, setQuickView] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    console.log('add product id :', product.id)
    dispatch(addItemToCart(product.id))
  }


  return (
    <div className=' m-2   flex-col group cursor-pointer  hover:shadow-md rounded transition ease-in-out duration-300'>
      <div className=' relative pb-2 mb-2 overflow-hidden bg-[#ebebeb]'>
        <img className=' group-hover:rotate-12 group-hover:scale-110 group-hover:-translate-y-6 origin-center transition ease-in-out duration-300 w-full h-full object-cover' src="src\assets\imgs\2bb1af643f05935bca142.jpg" alt="" />
        <div className='  absolute  bottom-0 justify-center items-center left-[50%] -translate-x-[50%] animate-transicon mb-6 gap-3'>
          <div className='hidden group-hover:flex animate-transicon gap-3 justify-center items-center'>
            <Tooltip content='Hết hàng' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 hover:bg-brown hover:text-white transition ease-in-out bg-white ' onClick={addToCart}>
                <FontAwesomeIcon icon={faBagShopping} />
              </div>
            </Tooltip>
            <Tooltip content='Yêu Thích' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 hover:bg-red-400 hover:text-white transition ease-in-out bg-white'>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </Tooltip>
            <Tooltip content='Xem Nhanh' style='light' >
              <div className=' rounded-full text-xl  p-2 hover:-translate-y-2 hover:scale-110 hover:bg-brown hover:text-white transition ease-in-out bg-white ' onClick={() => setQuickView(!quickView)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </Tooltip>

          </div>
        </div>
      </div>
      <div className=' pb-4 px-2 flex flex-col gap-2 justify-center items-center'>
        <a className=' text-sm font-SFUFuturaRegular text-center uppercase' href="#">{product.productName}</a>
        <div className=' flex gap-1'>
          <p className=' text-sm font-SFUFuturaRegular font-semibold   text-center'>{product.productPrice}</p>
          <span className=' underline text-[12px]  font-SFUFuturaRegular'>đ</span>
        </div>
      </div>

      <ProductQuickView quickView={quickView} setQuickView={setQuickView} />
    </div>

  )
}
