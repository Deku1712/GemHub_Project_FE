import React, { useMemo } from 'react'
import ComponentBreadCum from '../../components/Breadcrumb'
import { useSelector } from 'react-redux'
import { getStateItems, getStateStatus } from '../../redux/cartSlice'

function CartPage() {
  const Dataitems = useSelector(getStateItems)
  const cartStatus = useSelector(getStateStatus)

  const items = useMemo(() => {
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

    return cartItems
  }, [Dataitems])

  console.log(items)


  const cartItems = items.map((item, index) => (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item.productName}
      </th>
      <td className="px-6 py-4">
        {item.productType}
      </td>
      <td className="px-6 py-4">
          $ {item.productPrice}
      </td>
      <td className="px-6 py-4">
        {item.productQuantity}
      </td>
    </tr>

  ))


  return (
    <div className='mb-8'>
      <div className='relative w-full max-h-[950px] pt-4 mb-4 overflow-hidden'>
        <img src="src\assets\imgs\BannerGemHub1.png" alt="" />
      </div>
      <div className='max-w-[1080px] mx-auto'>
        <ComponentBreadCum />
        <div>
          <div className='title font-SFUFuturaBold text-start'>
            <a className='text-[15px] pr-2' href="">Thông tin tài khoản</a>
            <p className='text-sm my-4'>Xin chào, user</p>
          </div>
          <div className='flex lg:flex-row md:flex-col flex-col-reverse'>
            <div className='w-full lg:w-8/12'>
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
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartStatus === 'succeeded' ? (
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
            <div className='w-full lg:w-4/12'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
