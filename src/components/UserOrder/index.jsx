import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import manage from '../../service/manage'
import { formatCurrencyVND } from '../../api/function'
import { ToastContainer, toast } from 'react-toastify'


const TABLE_HEAD = ['OrderID', 'Customer', 'Order phone', 'Value', 'Payment', 'Create Time', 'Update Time']

export function UserOrder() {
  const [orders, setOrders] = useState([])

  function parseJwt(token) {
    // Tách phần payload từ token
    const base64Url = token.split('.')[1];
    // Chuyển đổi base64url thành base64
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // Giải mã base64 thành chuỗi JSON
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  const fetchOrder = async () => {
    const token = localStorage.getItem('token')
    const username = parseJwt(token)
    const response = await manage.getOrderByUserName(username.sub)
    return response.data
  }

  useEffect(() => {
    fetchOrder().then(data => setOrders(data))
  }, [])


  return (
    <div className=' w-full flex flex-col items-start mb-5'>
      <ToastContainer position='top-center' />
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
                  <td className={classes}>
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
                      {order.statusPayment}
                    </Typography>
                  </td>
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
  )
}