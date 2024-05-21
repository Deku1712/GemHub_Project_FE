import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup, Checkbox } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { getStateItems, getStateStatus, updateItemInCart } from '../../../redux/cartSlice'

function CartItem(props) {
  const item = props.item
  const dispatch = useDispatch()
  const increaseProduct = (item) => {

    const newItem = {
      productId: item.id,
      quantityOfProduct: item.productQuantity + 1
    }
    dispatch(updateItemInCart(newItem))
  }
  const descreaseProduct = (item) => {
    if (item.productQuantity > 0 ) {
      const newItem = {
        productId: item.id,
        quantityOfProduct: item.productQuantity - 1
      }
      dispatch(updateItemInCart(newItem))
    }
  }
  return (
    <div className=' py-4 border-t-[1px] flex gap-x-2'>
      <div className='w-1/12'>
        <img src="src\assets\imgs\2bb1af643f05935bca142.jpg" alt="" className=' w-full object-cover' />
      </div>
      <div className='w-10/12 pl-2'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-y-2'>
          <div><h2 className=' text-lg font-SFUFuturaHeavy text-start'>{item.productName}</h2>
          <p className=' text-start font'>{item.productType}</p>
          <div className=' flex flex-row justify-start items-center gap-x-2 my-2 '>
            <p>{item.productQuantity}</p>
            <div className=' flex flex-col gap-y-1 justify-center items-center'>
              <button className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
                onClick={() => increaseProduct(item)}>
                <FontAwesomeIcon icon={faAngleUp} />
              </button>
              <button className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
                onClick={() => descreaseProduct(item)}>
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </div></div>
          <div className=' flex lg:flex-col justify-start items-start gap-x-4 text-start'>
            <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer text-start'>Remove</p>
            <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer text-start' >Move to Wishlist</p>
          </div>
        </div>
      </div>
      <div className=' w-1/12'>
        <p className=' px-2 ml-2 font-semibold text-brown'>
            đ{item.productPrice}
        </p>
      </div>
    </div>
  )
}

export default CartItem