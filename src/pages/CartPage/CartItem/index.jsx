import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup, Checkbox } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { deleteItemInCart, getStateItems, getStateStatus, updateItemInCart } from '../../../redux/cartSlice'
import { formatCurrencyVND } from '../../../api/function'

function CartItem(props) {
  const item = props.item
  const dispatch = useDispatch()
  const increaseProduct = (item) => {

    const newItem = {
      productId: item.product.id,
      quantityOfProduct: item.quantity + 1,
      status: item.status
    }
    dispatch(updateItemInCart(newItem))
  }
  const decreaseProduct = (item) => {
    if (item.quantity > 0) {
      const newItem = {
        productId: item.product.id,
        quantityOfProduct: item.quantity - 1,
        status: item.quantity > 1 ? item.status : false
      };
      dispatch(updateItemInCart(newItem));
    }
  };


  const changeStatus = (item) => {
    const newItem = {
      productId: item.product.id,
      quantityOfProduct: item.quantity > 0 ? item.quantity : item.quantity + 1,
      status: !item.status
    }
    dispatch(updateItemInCart(newItem))
  }

  const deleteItem = (id) => {
    dispatch(deleteItemInCart(id))
  }

  return (
    <div className=' py-2 border-t-[1px] flex gap-x-2'>
      <div className='w-1/12'>
        <img src={item.product.imgs[0].imgUrl} alt="" className=' w-full object-cover' />
      </div>
      <div className='w-9/12 pl-2'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-y-2'>
          <div><h2 className=' text-lg font-SFUFuturaHeavy text-start'>{item.product.productName}</h2>
            <p className=' text-start font'>{item.product.productType}</p>
            <div className=' flex flex-row justify-start items-center gap-x-2 my-2 '>
              <Button color='light' className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
                onClick={() => increaseProduct(item)}>
                <FontAwesomeIcon icon={faAngleUp} />
              </Button>
              <p>{item.quantity}</p>
              <Button color='light' className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
                onClick={() => decreaseProduct(item)}>
                <FontAwesomeIcon icon={faAngleDown} />
              </Button>

            </div></div>
          <div className=' flex justify-start items-start lg:flex-col lg:justify-end lg:items-end gap-x-4 mr-4 pb-2 '>
            {item.status ?
              <>
                <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer ' onClick={() => deleteItem(item.id)}>Remove</p>
                <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer ' onClick={() => changeStatus(item)} >Save for later</p>
                {/* <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer ' >Move to Wishlist</p> */}

              </>
              :
              <>
                <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer' onClick={() => deleteItem(item.id)}>Remove</p>
                <p className=' text-brown hover:text-amber-950 transition-all ease-in-out cursor-pointer ' onClick={() => changeStatus(item)} >Move to Cart</p>
              </>}

          </div>
        </div>
      </div>
      <div className=' w-2/12'>
        <p className=' px-2 ml-2 mt-4 font-semibold text-black text-end text-lg'>
          {formatCurrencyVND(item.product.productPrice)}
        </p>
      </div>
    </div>
  )
}

export default CartItem