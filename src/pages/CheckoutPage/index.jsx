import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Radio } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import manage from '../../service/manage'
import { Button, Spinner } from '@material-tailwind/react'
import { formatCurrencyVND } from '../../api/function'
import logo from '../../assets/imgs/LogoGemHub.png'
import vnpay from '../../assets/imgs/Icon-VNPAY-QR.png'
function CheckoutPage() {
  const [openModal, setOpenModal] = useState(true)
  const [result, setResult] = useState()
  const navigate = useNavigate()
  const [orderDetail, setOrderDetail] = useState([])
  const [total, setTotal] = useState(0)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('PAYMENTONDELIVERY')
  const fetchOrderDetail = async () => {
    try {
      const response = await manage.getPreOrder()
      return response.data
    } catch (error) { console.log(error) }
  }

  const submitOrder = async () => {

    if (total != 0) {
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

  const completePay = async () => {
    try {
      const PaymentMethod = {
        paymentMethod: selectedPaymentMethod
      }
      const response = await manage.createOrder(PaymentMethod)

      if (selectedPaymentMethod == 'PAYMENTONDELIVERY') {
        setTimeout(() => {
          if (response.data) navigate('/result?paymentStatus=1')
          else navigate('/result?paymentStatus=0')
        }, 2000)
      }
      else {
        submitOrder()
      }
    } catch (error) { /* empty */ }
  }

  useEffect(() => {
    fetchOrderDetail().then(data => {
      setTimeout(() => {
        setOrderDetail(data)
        let t = data
          .filter(item => item.status)
          .reduce((t, item) => t + (item.quantity * item.product.productPrice), 0)

        setTotal(t)
      }, 1000)
    })
  }, [])


  return (
    <div >
      {orderDetail.length > 0 ? <><div className=' mb-2 px-6 py-4 flex justify-between items-center bg-white  shadow-md '>
        <div>
          <Link to='/home' className=' flex gap-2 items-center justify-center'>
            <img src={logo} className=' w-10 h-10 object-cover' />
            <span className=' text-2xl text-brown font-semibold font-SVNFutura'>GemHub.</span>
          </Link>
        </div>
        <div className=' p-2'>
          <Link to='/cart' className='text-lg text-brown text-center font-semibold font-SVNFutura hover:text-black cursor-pointer '>
            Cancel
          </Link>
        </div>
      </div>

      <div className=' max-w-[1080px] mx-auto flex flex-col lg:flex-row  '>
        <div className=' px-8 w-full lg:pl-6 lg:pr-12 lg:w-7/12 flex flex-col  items-start bg-white'>
          <h1 className=' my-8 text-start text-2xl text-brown font-serif font-semibold'>
              Thủ tục thanh toán
          </h1>
          <h2 className=' mb-4  py-2 w-full text-start text-xl text-black font-semibold font-serif'>
              Địa chỉ nhận hàng
          </h2>
          <span className=' py-2 text-lg w-full mb-4'>
              43 khái đông 4, hòa hải ngũ hành sơn , đà nẵng.
          </span>
          <h2 className=' mb-4  py-2 w-full text-start text-xl text-black font-semibold font-serif'>
              Chọn phương thức thanh toán.
          </h2>
          <fieldset className=' mb-4 flex flex-col gap-y-4 w-full'>
            <label className='p-2 border-2 bg-[#f7f9fa] flex justify-between items-center text-sm cursor-pointer group'>
              <div className='flex justify-center items-center gap-2'>
                <Radio className=' text-black bg-white' name="paymentMethod" id="thanhtoanHome" value="home" checked={selectedPaymentMethod === 'PAYMENTONDELIVERY'}
                  onChange={() => setSelectedPaymentMethod('PAYMENTONDELIVERY')} />
                <p>Thanh toán khi nhận hàng</p>
              </div>
              <div className='w-1/12 text-center'>
                <FontAwesomeIcon className='w-8 h-8 text-brown' icon={faHome} />
              </div>
            </label>
            <label className='p-2 border-2 bg-[#f7f9fa] flex justify-between items-center text-sm cursor-pointer group'>
              <div className='flex justify-center items-center gap-2'>
                <Radio className=' text-black bg-white' name="paymentMethod" id="thanhtoanVnpay" value="vnpay" checked={selectedPaymentMethod === 'PAYWITHVNPAY'}
                  onChange={() => setSelectedPaymentMethod('PAYWITHVNPAY')} />
                <p>Thanh toán qua VNpay</p>
              </div>
              <div className='w-1/12'>
                <img src={vnpay} alt="VNpay QR Code" className='w-[70%] h-[70%] object-cover' />
              </div>
            </label>
          </fieldset>
          <h2 className=' my-4  py-2 w-full text-start text-xl text-black font-semibold font-serif'>
              Hóa đơn
          </h2>

          {orderDetail.length > 0 && orderDetail.map((order, index) => (
            <div key={index} className=' w-full flex justify-between items-center my-3 p-2'>
              <img className=' w-10 h-10 object-cover' src={order.product.imgs[0].imgUrl} alt="" />
              <div className=' w-5/12 text-sm text-start font-SFUFuturaHeavy'>
                {order.product.productName}
              </div>
              <div className=' w-4/12 flex flex-col items-end text-sm font-mono  mr-4'>
                <p className=' pb-1 border-b'>{order.quantity} x {order.product.productPrice} VND</p>
                <p>Total: {order.quantity * order.product.productPrice} VND</p>
              </div>
            </div>
          ))}
        </div>

        <div className='   mt-2 w-full pl-12 pr-8 lg:w-5/12 bg-[#f7f9fa]  '>
          <div className=' mt-[96px] pb-2 border-b-2 w-full flex flex-col justify-center items-center'>
            <h2 className=' mb-4  py-2  w-full text-start text-xl text-black font-semibold font-serif'>
                Thanh toán
            </h2>
            <div className=' w-full flex justify-between items-center '>
              <div className=' py-1 font-SFUFuturaRegular text-[16px] w-8/12 '>
                  Giá gốc:
              </div>
              <div className=' py-1 font-SFUFuturaRegular text-[16px]  '>
                {formatCurrencyVND(total)}
              </div>
            </div>
            <div className=' w-full flex justify-between items-center '>
              <div className=' py-1 font-SFUFuturaRegular text-[16px] w-8/12 '>
                  Ưu đãi:
              </div>
              <div className=' py-1 font-SFUFuturaRegular text-[16px]  '>
                  0
              </div>
            </div>
          </div>
          <div className=' w-full flex justify-between items-center '>
            <div className=' py-1 font-SFUFuturaBold font-bold text-lg w-8/12 '>
                Total:
            </div>
            <div className=' py-1 font-SFUFuturaRegular text-[16px] font-semibold  '>
              {formatCurrencyVND(total)}
            </div>
          </div>

          <Button className=' w-full mt-8 p-4 bg-brown hover:bg-opacity-90' onClick={completePay}>Hoàn thành thanh toán</Button>
        </div>

      </div></> : <Spinner className='mx-auto mt-40' />}


    </div>
  )
}

export default CheckoutPage