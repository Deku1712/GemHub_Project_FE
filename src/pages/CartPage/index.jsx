import React, { useEffect, useMemo, useState } from 'react'
import ComponentBreadCum from '../../components/Breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { getStateItems, getStateStatus, updateItemInCart } from '../../redux/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Button, ButtonGroup } from 'flowbite-react'
import { fetchCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import manage from '../../service/manage'
function CartPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Dataitems = useSelector(getStateItems)
  const cartStatus = useSelector(getStateStatus)
  const [items, setItems] = useState()
  const [preOrder, setPreOrder] = useState()
  const [addressDefault, setAddressDefault] = useState()
  const address = () => navigate('/address')

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

  const prepareOrder = () => {

  }

  const fetchAddressDefault = async () => {
    try {
      const response = await manage.getAddressDefault()
      return response.data
    } catch (error) { /* empty */ }
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
    }
  }, [Dataitems])

  useEffect(() => {
    fetchAddressDefault().then(data => setAddressDefault(data))
  },[])


  const cartItems = items && items.map((item, index) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 group " key={index}>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white group-hover:bg-slate-200 transition-all ease-in-out cursor-pointer">
        {item.productName}
      </th>
      <td className="px-6 py-4 group-hover:bg-slate-200 transition-all ease-in-out cursor-pointer">
        {item.productType}
      </td>
      <td className="px-6 py-4 group-hover:bg-slate-200 transition-all ease-in-out cursor-pointer">
          $ {item.productPrice}
      </td>
      <td className="px-6 py-4 flex gap-x-2 justify-center items-center" >
        {item.productQuantity}
        <div className=' flex flex-col gap-y-1 justify-center items-center'>
          <button className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
            onClick={() => increaseProduct(item)}>
            <FontAwesomeIcon icon={faAngleUp}/>
          </button>
          <button className=' p-2 w-2 h-2 border  flex justify-center items-center hover:bg-slate-200 hover:border-white'
            onClick={() => descreaseProduct(item)}>
            <FontAwesomeIcon icon={faAngleDown}/>
          </button>
        </div>
      </td>
    </tr>
  ))


  return (
    <div className='mb-8'>
      <div className='relative w-full max-h-[500px] pt-4 mb-4 overflow-hidden'>
        <img src="src\assets\imgs\BannerGemHub1.png" alt="" />
      </div>
      <div className='max-w-[1080px] mx-auto'>
        <ComponentBreadCum />
        <div>
          <div className='title font-SFUFuturaBold text-start'>
            <a className='text-[15px] pr-2' href="">Thông tin tài khoản</a>
            <p className='text-sm my-4'>Xin chào, user</p>
          </div>
          <div className='flex lg:flex-row md:flex-col flex-col-reverse gap-4'>
            <div className='w-full lg:w-9/12'>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
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
              </div>
            </div>
            <div className='w-full lg:w-3/12 ml-4'>
              <div className=' w-full p-4 border flex flex-col gap-y-4 items-start font-SFUFuturaBook'>
                <h5 className=' font-bold text-lg uppercase tracking-wide'>Tài Khoản của tôi</h5>
                <p className=' text-sm'>Họ Tên: {addressDefault && addressDefault.name}  </p>
                <p className=' text-sm'>Địa chỉ: { addressDefault && addressDefault.address}</p>
                <p className=' text-sm'>Điện thoại: { addressDefault && addressDefault.phone}</p>
                <p className=' text-sm'>Thành phố: </p>
                <p className=' text-sm'>Quốc gia:</p>
                <button className=' w-full p-4 bg-brown text-white rounded-lg cursor-pointer hover:opacity-85 transition-all ease-in-out' onClick={address}>
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
