/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Modal } from 'flowbite-react'
import { formatCurrencyVND } from '../../../../api/function'

function ModalOrder({ order, openModal, setOpenModal }) {
  return (
    <div>
      {order && (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <strong>OrderID_{order.id}</strong>
            <span className=' ml-2 font-sans'> create time: {order.createTime}</span>
          </Modal.Header>
          <Modal.Body>
            <div className=" flex flex-col space-y-6">
              <div className=' flex flex-col'>
                <span><strong>Customer:</strong> {order.user.username} - {order.orderPhone}</span>
                <span><strong>Address:</strong> {order.orderAddress}</span>
              </div>


              <h2 className=' font-semibold text-lg'>Order Detail</h2>
              {order.orderDetails.map((orderDetail, index) => (
                <div key={index} className=' flex justify-start items-start gap-x-2 text-sm'>
                  <img className=' w-20 h-20 object-cover' src={orderDetail.product.imgs[0].imgUrl}/>
                  <div>
                    <h4 className=' text-sm  text-start'>
                      {orderDetail.product.productName}
                    </h4>
                    <span>
                        Quantity: {orderDetail.productQuantity} x {formatCurrencyVND(orderDetail.productPrice)}
                    </span>
                  </div>
                </div>
              ))
              }
              <h2 className=' text-lg font-semibold pt-2 border-t'>
                Total : {formatCurrencyVND(order.total)}
              </h2>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>Close</Button>

          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

export default ModalOrder
