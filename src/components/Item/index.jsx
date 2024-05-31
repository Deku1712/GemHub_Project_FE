import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from 'flowbite-react'
import { useEffect, useState } from 'react'
import React from 'react'
import ProductQuickView from '../ProductQuickView'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, getStateError, getStateStatus } from '../../redux/cartSlice'
import Notification from '../Notification'
import { useNavigate } from 'react-router-dom'
import { getStatus } from '../../redux/userSlice'
import { formatCurrencyVND } from '../../api/function'
import imgP from '../../assets/imgs/03 Vòng đá Aquamarin.jpg'


export default function Item(props) {
  
  const product = props.product || {
    id: 1,
    productName: 'kkasdfasdf',
    productPrice: '3232',
    imgs: [
      {
        imgUrl: imgP
      }
    ]
  }

  const [quickView, setQuickView] = useState(false)
  const [noti, setNoti] = useState(false)
  const status = useSelector(getStateStatus)
  const userStatus = useSelector(getStatus)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const addToCart = () => {
    console.log('add product id :', product.id)

    const itemDto = {
      productId: product.id,
      quantityOfProduct : 1
    }

    try {
      dispatch(addItemToCart(itemDto))
      setNoti(true)
    } catch (error) {
        console.log('add Faild')

    }
  }

  const viewDetail = () => {
    if(userStatus === 'authenticated') navigate(`products/${product.id}`)
    else navigate('/login')
  }

  useEffect(() => {
    setTimeout(() => {
      setNoti(false)
    }, 1500);
  } , [noti])

  


  return (
    <div className=' m-2 flex-col group cursor-pointer  hover:shadow-md rounded transition ease-in-out duration-300'>
      <div className=' relative pb-2 mb-2 overflow-hidden '>
        <img className=' group-hover:scale-110 group-hover:-translate-y-2 origin-center transition ease-in-out duration-300 w-full h-full object-cover' src={product.imgs[0].imgUrl} alt=""  />
        <div className='  absolute  bottom-0 justify-center items-center left-[50%] -translate-x-[50%] animate-transicon mb-6 gap-3'>
          <div className='hidden group-hover:flex animate-transicon gap-3 justify-center items-center'>
            <Tooltip content='Mua hàng' style='light' >
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
      <div className=' pb-4 px-2 flex flex-col gap-2 justify-center items-center' onClick={viewDetail}>
        <a className=' text-sm font-SFUFuturaRegular text-center uppercase' href="#">{product.productName}</a>
        <div className=' flex gap-1'>
          <p className=' text-sm font-SFUFuturaRegular font-semibold   text-center'>{formatCurrencyVND(product.productPrice)}</p>
          {/* <span className=' underline text-[12px]  font-SFUFuturaRegular'>đ</span> */}
        </div>
      </div>

      <ProductQuickView quickView={quickView} setQuickView={setQuickView} />
      {noti && <Notification status = {status}/>}
    </div>

  )
}
