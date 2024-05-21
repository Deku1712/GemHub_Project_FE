import React, { useEffect, useMemo, useState } from 'react'
import ComponentBreadCum from '../../components/Breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getStateItems, getStateStatus, updateItemInCart } from '../../redux/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup, Checkbox } from 'flowbite-react'
import { fetchCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import manage from '../../service/manage'
import AddressItem from '../../components/AddressItem'
import CartItem from './CartItem'
function CartPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Dataitems = useSelector(getStateItems)
  const cartStatus = useSelector(getStateStatus)
  const [items, setItems] = useState()
  const [preOrder, setPreOrder] = useState([])
  const [addressDefault, setAddressDefault] = useState()
  const [total , setTotal] = useState(0)

  const address = () => navigate('/address')

  const addItemToOrder = (item) => {
    setPreOrder([...preOrder, item])
  }
  const removeItemToOrder = (item) => {
    const list = preOrder.filter(p => p.id != item.id)
    setPreOrder(list)
  }
  const handleChange = ( e, item ) => {
    if (e.target.checked) {
      addItemToOrder(item)
    }
    else removeItemToOrder(item)
  }

  const fetchAddressDefault = async () => {
    try {
      const response = await manage.getAddressDefault()
      return response.data
    } catch (error) { /* empty */ }
  }

  const submitOrder = async() => {
    if (total !=   0) {
      const infor = {
        amount: total,
        orderInfor: 'Thanh toan don hang 2923'
      }
      try {
        const response = await manage.payment(infor)
        if (response.data.redirectUrl) {
          console.log(response.data.redirectUrl)
          window.location.href = response.data.redirectUrl
        }
        else {
          console.log('faild to redirect URL')
        }

      } catch (error) { /* empty */ }
    }
  }

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  useEffect(() => {
    if (Dataitems) {
      const cartItems = []

      Object.keys(Dataitems).forEach(key => {
        const productData = key.match(/Product\(.*?\)/)[0]
        const productId = parseInt(productData.match(/id=(\d+)/)[1])
        const productName = productData.match(/productName=(.*?),/)[1]
        const productType = productData.match(/productType=(.*?),/)[1]
        const productPrice = parseFloat(productData.match(/productPrice=(\d+(\.\d+)?),/)[1])
        const productQuantity = Dataitems[key]

        const product = {
          id: productId,
          productName: productName,
          productType: productType,
          productPrice: productPrice,
          productQuantity: productQuantity
        }

        cartItems.push(product)
      })
      cartItems.sort((a, b) => b.productQuantity - a.productQuantity)

      setItems(cartItems)
      const total = cartItems.reduce((sum, item) => sum + (parseInt(item.productPrice)* parseInt(item.productQuantity)), 0)
      setTotal(total)
    }
  }, [Dataitems])

  useEffect(() => {
    fetchAddressDefault().then(data => setAddressDefault(data))
  }, [])

  const cartItems = items && items.map((item, index) => <CartItem item = {item} />)


  return (
    <div className='mb-8'>
      <div className='relative w-full max-h-[500px] pt-4 mb-4 overflow-hidden'>
        <img src="src\assets\imgs\BannerGemHub1.png" alt="" />
      </div>
      <div className='max-w-[1280px] mx-auto'>
        <ComponentBreadCum />
        <div>
          <div className='title font-SFUFuturaBold text-start'>
            <a className='text-[15px] pr-2' href="">Thông tin tài khoản</a>
            <p className='text-sm my-4'>Xin chào, user</p>
          </div>
          <h1 className=' text-start text-xl font-SFUFuturaBold py-4'>Shopping Cart</h1>
          <div className='flex lg:flex-row md:flex-col flex-col-reverse gap-4'>
            <div className='w-full lg:w-9/12 mr-4'>
              {/* <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-2 py-3">
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartStatus === 'succeeded' && Dataitems ? (
                      cartItems
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4">Không có mặt hàng nào.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div> */}
              <div className=' w-full py-4'>
                {cartStatus === 'succeeded' && Dataitems ? (
                  cartItems
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">Không có mặt hàng nào.</td>
                  </tr>
                )}
              </div>
            </div>
            <div className='w-full flex lg:flex-col flex-col-reverse lg:w-3/12 ml-4'>
              <div className=' w-full p-4 flex flex-col gap-y-2 items-start'>
                <h3 className=' font-semibold text-lg text-brown uppercase '>Total</h3>
                <p className=' text-2xl font-bold'>đ{total}</p>
                <button className=' w-full p-2 bg-red-400 text-white rounded-lg cursor-pointer hover:opacity-85 hover:-translate-y-2 hover:-translate-x-2 hover:drop-shadow-2xl transition-all ease-in-out text-nowrap' onClick={submitOrder}>
                      Thanh Toán
                </button>
              </div>
              <div className=' w-full p-4 border-t-[1px]  flex flex-col gap-y-4 items-start font-SFUFuturaBook '>
                <h5 className=' font-bold text-lg uppercase tracking-wide'>Tài Khoản của tôi</h5>
                <p className=' text-sm'>Họ Tên: {addressDefault && addressDefault.name}  </p>
                <p className=' text-sm'>Địa chỉ: { addressDefault && addressDefault.address}</p>
                <p className=' text-sm'>Điện thoại: { addressDefault && addressDefault.phone}</p>
                <p className=' text-sm'>Thành phố: </p>
                <p className=' text-sm'>Quốc gia:</p>
                <button className=' w-full p-4 bg-brown text-white rounded-lg cursor-pointer hover:opacity-85 hover:-translate-y-2 hover:-translate-x-2 hover:drop-shadow-2xl transition-all ease-in-out' onClick={address}>
                      Sổ địa chỉ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
