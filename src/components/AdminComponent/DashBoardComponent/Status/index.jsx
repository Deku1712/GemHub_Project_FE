import React, { useState } from 'react'
import { Dropdown } from 'flowbite-react'
import manage from '../../../../service/manage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Status({ setChange, orderId, status ,notifySuccess ,notifyFaild }) {

//   const notifySuccess = () => toast('Update success!')
//   const notifyFaild = () => toast('Update faild!')
  const updateStatus = async (data) => {
    const response = manage.updateStatus(orderId, data )
    if (response) {
        notifySuccess()
      setChange(true)
    }
    else {
        notifyFaild()
    }
    console.log(orderId,data)

  }


  return (
    <div>
      {/* <ToastContainer position='top-center' /> */}
      <Dropdown label={status} dismissOnClick={true}>
        <Dropdown.Item onClick={() => updateStatus('Success')}>Success</Dropdown.Item>
        <Dropdown.Item onClick={() => updateStatus('Faid')}>Faild</Dropdown.Item>
        <Dropdown.Item onClick={() => updateStatus('Prepared')}>Prepared</Dropdown.Item>
        <Dropdown.Item onClick={() => updateStatus('Ship')}>Ship</Dropdown.Item>
      </Dropdown>
    </div>
  )
}

export default Status