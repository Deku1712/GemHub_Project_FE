import React from 'react'
import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
function NotiCheck(props) {

  const openModal = props.openModal
  const setOpenModal = props.setOpenModal

  return (
    <>
      
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Thông báo lỗi</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Một số sản phẩm không có đủ mặt hàng ở cửa hàng hiện tại.
                            Những số lượng của mặt hàng đó sẽ được thay đổi để phù hợp với số lượng sản phẩm trong cửa hàng.

            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Và đã được đưa vào danh sách mua sau. Hay chọn 'move to cart' nếu bạn vẫn cảm thấy phù hợp với sản phẩm đó
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className=' bg-brown' onClick={() => setOpenModal(false)}>Thoát</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NotiCheck