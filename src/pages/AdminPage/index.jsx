import React from 'react'
import NavBar from '../../components/AdminComponent/Navbar'
import { Outlet } from 'react-router-dom'

function AdminPage() {
  return (
    <div className=' relative bg-[#f6f7f8] flex justify-around '>
      <div className=' absolute h-[300px] top-0 w-full bg-brown bg-opacity-45 z-0'></div>
      <div className='hidden lg:block w-[300px] z-50 mb-6'>
        <NavBar />
      </div>
      <div className=' w-full lg:w-9/12  z-50'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPage