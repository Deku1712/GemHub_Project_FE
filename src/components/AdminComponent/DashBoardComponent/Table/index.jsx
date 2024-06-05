import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import manage from '../../../../service/manage'
import { formatCurrencyVND } from '../../../../api/function'

const TABLE_HEAD = ['OrderID', 'Customer', 'Order phone', 'Value', 'Status']

const TABLE_ROWS = [
  {
    name: 'John Michael',
    job: 'Manager',
    date: '23/04/18'
  },
  {
    name: 'Alexa Liras',
    job: 'Developer',
    date: '23/04/18'
  },
  {
    name: 'Laurent Perrier',
    job: 'Executive',
    date: '19/09/17'
  },
  {
    name: 'Michael Levi',
    job: 'Developer',
    date: '24/12/08'
  },
  {
    name: 'Richard Gran',
    job: 'Manager',
    date: '04/10/21'
  }
]

export function Table() {

  const [orders, setOrders] = useState([])

  const fetchOrder = async () => {
    const response = await manage.getAllOrder()
    return response.data
  }

  useEffect(() => {
    fetchOrder().then(data => setOrders(data))
  },[])


  return (
    <div className=' w-full flex flex-col items-start'>
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
              const isLast = index === TABLE_ROWS.length - 1
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

              return (
                <tr key={order.id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
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
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                    {formatCurrencyVND(order.total)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                    {order.status}
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