import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Card, Typography } from '@material-tailwind/react'
import ModalOrder from '../../components/AdminComponent/DashBoardComponent/ModalOrder'
import manage from '../../service/manage'
import { formatCurrencyVND } from '../../api/function'
const TABLE_HEAD = ['OrderID', 'Customer', 'Order phone', 'Value', 'Status', 'Create Time', 'Update Time']

function OrderPage() {

  const [orders, setOrders] = useState([])
  const [openModal, setOpenModal] = useState(true)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const fetchOrder = async () => {
    const response = await manage.getOrderByUser()
    return response.data
  }

  const handleModal =(order) => {

    setOpenModal(true)
    setSelectedOrder(order)
  }

  useEffect(() => {
    fetchOrder().then(data => setOrders(data))
  }, [])

  return (
    <div className='mb-8'>
      <div className='max-w-[1280px] mx-auto'>
        <ToastContainer position='top-center' />
        <ModalOrder order={selectedOrder} openModal={openModal} setOpenModal={setOpenModal} />
        <h2 className=' text-lg font-semibold py-2 mb-2'>Danh sách hóa đơn</h2>
        <Card className="h-full w-full ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const isLast = index === orders.length - 1
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                return (
                  <tr key={order.id}>
                    <td className={classes} onClick={() => {handleModal(order)}}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-purple-400 cursor-pointer"
                      >
                        {order.id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {order.user.username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {order.orderPhone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography

                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {formatCurrencyVND(order.total)}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography

                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {order.status}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                    <Typography

                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {order.statusPayment}
                    </Typography>
                  </td> */}
                    <td className={classes}>
                      <Typography

                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {order.createTime}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography

                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {order.updateTime}
                      </Typography>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

export default OrderPage